/**
 * IndexSearch.js
 *
 * author     -->  redcrow (jittagorn pitakmetagoon)
 * create on  -->  26/08/2013
 * website    -->  na5cent.blogspot.com
 * 
 * version    -->  1.0
 * version    -->  2.0 (multiple search keyword : AND search operation)
 * 
 * License    ---> Apache License
 * Version 2.0, January 2004 (http://www.apache.org/licenses/LICENSE-2.0)
 * 
 * 
 * 
 * update 13/12/2013 : add integrate period algorithm (document : http://na5cent.blogspot.com/2013/12/integrate-period-algorithm-javascript.html)
 */

window.IndexSearch = window.IndexSearch || (function() {

    function defined(object) {
        return !isUndefined(object);
    }

    function notDefined(object) {
        return isUndefined(object);
    }

    function empty(list) {
        return notDefined(list) || list.length === 0;
    }

    function notEmpty(list) {
        return !empty(list);
    }

    function trim(string) {
        return string.replace(/^\s+|\s+$/g, '');  //for old browser
    }

    function findIndex(element, list, startPoint) {
        if (notDefined(element)) {
            return -1;
        }

        if (isString(list)) {
            element = element.toLowerCase();
            list = list.toLowerCase();
        }

        return list.indexOf(element, defined(startPoint) ? startPoint : 0);
    }

    function foundIn(element, list) {
        return findIndex(element, list) !== -1;
    }

    function notFoundIn(element, list) {
        return !foundIn(element, list);
    }

    function escapseString(text) {
        text = text.replace(/&/g, '&amp;')
                .replace(/>/g, '&gt;')
                .replace(/</g, '&lt;')
                .replace(/"/g, '&quot;');

        return text;
    }

    function copyObject(source, destination) {
        for (var key in source) {
            destination[key] = source[key];
        }
    }

    function forEachObject(obj, callback, context_opt) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = callback.call(context_opt, obj[key], key, obj);
                if (value === false) {
                    return false;
                }
            }
        }

        return true;
    }

    function forEachArray(array, callback, context_opt) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            var value = callback.call(context_opt, array[i], i, array);
            if (value === false) {
                return false;
            }
        }

        return true;
    }

    function forEach(obj, callback, context_opt) {
        var forEachImpl;
        if (isObject(obj)) {
            forEachImpl = forEachObject;
        } else if (isArray(obj)) {
            forEachImpl = forEachArray;
        }

        return forEachImpl(obj, callback, context_opt);
    }

    function object2Array(obj) {
        var newObj = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj.push(key);
            }
        }

        return newObj;
    }

    function replaceNotation(text) {
        if (notDefined(text)) {
            return '';
        }

        text = text.replace(/\(/g, ' ')
                .replace(/\)/g, ' ')
                .replace(/\,/g, ' ')
                .replace(/\//g, ' ')
                .replace(/\\/g, ' ')
                .replace(/\:/g, ' ')
                .replace(/\./g, ' ')
                .replace(/\>/g, ' ')
                .replace(/\</g, ' ')
                .replace(/\[/g, ' ')
                .replace(/\]/g, ' ')
                .replace(/\+/g, ' ')
                .replace(/\=/g, ' ')
                .replace(/\;/g, ' ');

        return text;
    }

    function is(data, type) {
        return Object.prototype.toString.call(data) === '[object ' + type + ']';
    }

    function isFunction(data) {
        return is(data, 'Function');
    }

    function isArray(data) {
        return is(data, 'Array');
    }

    function isString(data) {
        return is(data, 'String');
    }

    function isNumber(data) {
        return is(data, 'Number');
    }

    function isObject(data) {
        return is(data, 'Object');
    }

    function isRegExp(data) {
        return is(data, 'RegExp');
    }

    function isUndefined(data) {
        return is(data, 'Undefined');
    }

    function totalProperties(object) {
        var total = 0;
        for (var property in object) {
            total = total + 1;
        }

        return total;
    }

    function numberFormat(number) {
        var floatNumber = parseFloat(number);
        var integerNumber = parseInt(number);
        if ((floatNumber - integerNumber) === 0) {
            return integerNumber;
        } else {
            return new Number(number).toFixed(2);
        }
    }

    /**
     * class Interface
     * @author redcrow
     * @create on 25/02/2013
     * @website na5cent.blogspot.com
     */
    var Interface = (function() {

        /**
         * for ensure constructor input type require
         */
        function ensureConstructorRequire(name, methods) {
            if (!isString(name)) {
                throw new Error('constructor of Interface class require first argument is \'string\', but is \'' + (typeof name) + '\'.');
            }

            if (!isArray(methods)) {
                throw new Error('constructor of Interface class require second argument is \'array of string\', but is \'' + (typeof methods) + '\'.');
            }
        }

        /**
         * for ensure method type require
         */
        function ensureMethodType(method, index) {
            if (!isString(method)) {
                throw new Error('constructor of Interface class require second argument is \'array of string\', but method index ' + index + ' is not \'string\', is \'' + (typeof method) + '\'.');
            }

            return method;
        }

        /**
         * Interface constructor
         * {string} name
         * {string[]} method names 
         */
        return function(name, methods) {
            if (arguments.length !== 2) {
                throw new Error("constructor of Interface class require 2 arguments : Interface({string} name, {string[]} method names");
            }
            ensureConstructorRequire(name, methods);

            var name__ = name;
            var methods__ = [];

            for (var index = 0; index < methods.length; index++) {
                var method = ensureMethodType(methods[index], index);
                methods__.push(method);
            }

            this.getName = function() {
                return name__;
            };

            this.getMethods = function() {
                return methods__;
            };
        };
    })();

    /**
     * static method Interface.ensureImplements
     * for ensure class implements an interfaces.
     */
    Interface.ensureImplements = function(clazz, interfacs) {
        if (arguments.length !== 2) {
            throw new Error('Interface.ensureImplements require 2 arguments : Interface.ensureImplement({object} obj, {interface[]} interfaces).');
        }

        if (!isObject(clazz)) {
            throw new Error('first argument of Interface.ensureImplements is not \'object\', but is \'' + (typeof clazz) + '\'.');
        }

        if (!isArray(interfacs)) {
            throw new Error('second argument of Interface.ensureImplements is not \'array of interface\', but is \'' + (typeof interfacs) + '\'.');
        }

        for (var index = 0; index < interfacs.length; index++) {
            var interf = interfacs[index];
            if (interf.constructor !== Interface) {
                throw new Error('second argument of Interface.ensureImplements index ' + index + ' is not interface.');
            }

            var methods = interf.getMethods();
            for (var property in methods) {
                var method = methods[property];

                if (notDefined(clazz[method])) {
                    throw new Error('implementation class is not define method \'' + method + '\' of Interface \'' + interf.getName() + '\'.');
                }

                if (!isFunction(clazz[method])) {
                    throw new Error('implementation class define \'' + method + '\' is not \'method\', but is \'' + (typeof clazz[method]) + '\'.');
                }
            }
        }
    };

    /**
     * class ResultSearch 
     * bean for keep result after searching
     */
    var ResultSearch = function(result) {
        var totalPosition__ = result.totalPosition || 0;
        var totalSentence__ = result.totalSentence || 0;
        var content__ = result.content || {nodes: {}};
        var suggestions__ = result.suggestions || [];

        this.getTotalPosition = function() {
            return totalPosition__;
        };

        this.getTotalSentence = function() {
            return totalSentence__;
        };

        this.getContent = function() {
            return content__;
        };

        this.getSuggestions = function() {
            return suggestions__;
        };
    };

    /**
     * class Period
     * for keep period information
     */
    var Period = function(start, end) {
        var start__ = start;
        var end__ = end;

        this.getStart = function() {
            return start__;
        };

        this.getEnd = function() {
            return end__;
        };

        this.setStart = function(start) {
            start__ = start;
        };

        this.setEnd = function(end) {
            end__ = end;
        };

        this.equals = function(object) {
            if (object.getStart() === start__ && object.getEnd() === end__) {
                return true;
            }

            return false;
        };

        this.toString = function() {
            return 'period {' + start__ + ', ' + end__ + '}';
        };
    };

    /**
     * class PeriodIntegrator
     * for integrate period in timeline
     * 
     * document : http://na5cent.blogspot.com/2013/12/integrate-period-algorithm-java.html
     */
    var PeriodIntegrator = function() {

        var periodSet__ = {};
        var periodList__;

        function getPeriodKey(period) {
            return period.getStart() + ':' + period.getEnd();
        }

        this.addPeriod = function(period) {
            var periodKey = getPeriodKey(period);
            if (notDefined(periodSet__[periodKey])) {
                periodSet__[periodKey] = period;
            }

            return this;
        };

        this.addAllPeriods = function(periodList) {
            if (notEmpty(periodList)) {
                forEach(periodList, function(period) {
                    this.addPeriod(period);
                }, this);
            }

            return this;
        };

        function toPeriodList() {
            var list = [];
            forEach(periodSet__, function(period) {
                list.push(period);
            });
            return list;
        }

        function sortPeriods() {
            periodList__ = toPeriodList().sort(function(period1, period2) {
                if (period1.getStart() === period2.getStart()) {
                    return period1.getEnd() - period2.getEnd();
                }

                return period1.getStart() - period2.getStart();
            });
        }

        function changeOverlap() {
            if (periodList__.length > 1) {
                for (var i = 1; i < periodList__.length; i++) {
                    var before = periodList__[i - 1];
                    var current = periodList__[i];

                    if (current.getStart() < before.getEnd()) {
                        current.setStart(before.getEnd());
                    }
                }
            }
        }

        function removePeriod(period) {
            for (var index in periodList__) {
                if (periodList__[index].equals(period)) {
                    delete periodList__[index];
                }
            }
        }

        function removeIncorrect() {
            if (periodList__.length > 1) {
                for (var i = 1; i < periodList__.length; i++) {
                    var periodI = periodList__[i];
                    for (var j = i + 1; j < periodList__.length; j++) {
                        var periodJ = periodList__[j];

                        if (defined(periodI) && defined(periodJ) && (isIncorrect(periodJ) || isSubPeriod(periodJ, periodI))) {
                            removePeriod(periodJ);
                        }
                    }
                }
            }
        }

        function isIncorrect(period) {
            return period.getStart() >= period.getEnd();
        }

        function isSubPeriod(period1, period2) {
            return period1.getStart() >= period2.getStart() && period1.getEnd() <= period2.getEnd();
        }

        function integratePeriods() {
            if (periodList__.length > 1) {
                for (var i = 1; i < periodList__.length; i++) {
                    var before = periodList__[i - 1];
                    var current = periodList__[i];

                    if (defined(current) && defined(before) && current.getStart() === before.getEnd()) {
                        current.setStart(before.getStart());
                        removePeriod(before);
                        i--;
                    }
                }
            }
        }

        this.integrate = function() {
            sortPeriods();
            changeOverlap();
            removeIncorrect();
            integratePeriods();

            return periodList__;
        };
    };

    var InputSearchSplitor = function(input) {
        var input__ = input || '';
        var keywordSize__ = 0;

        this.split = function() {
            var result = [];
            var keywordList = input__.split(' ');
            forEach(keywordList, function(keyword) {
                if (notEmpty(keyword)) {
                    result.push(keyword);
                    keywordSize__ = keywordSize__ + 1;
                }
            });

            return result;
        };

        this.getKeywordSize = function() {
            return keywordSize__;
        };

        this.getInput = function() {
            return input__;
        };
    };

    /**
     * class Highlighter
     * for make html highlight result search    				
     */
    var Highlighter = function(cssClass) {
        var cssClass__ = cssClass;
        var totalSentence__ = 0;
        var totalHighlight__ = 0;

        function highlightKeyword(keyword) {
            return '<span class="' + cssClass__ + '">' + keyword + '</span>';
        }

        this.getTotalSentence = function() {
            return totalSentence__;
        };

        this.resetTotalSentence = function() {
            totalSentence__ = 0;
        };

        this.getTotalHighlight = function() {
            return totalHighlight__;
        };

        this.resetTotalHighlight = function() {
            totalHighlight__ = 0;
        };

        this.resetTotal = function() {
            totalHighlight__ = 0;
            totalSentence__ = 0;
        };

        function findPeriodsOfSentenceByKeyword(sentence, keywordString) {
            var integrator = new PeriodIntegrator();
            var splitor = new InputSearchSplitor(keywordString);

            forEach(splitor.split(), function(keyword) {
                if (empty(keyword)) {
                    return true;
                }

                var keywordLength = keyword.length;

                var start = 0;
                var end = 0;
                while (true) {
                    var indexOf = findIndex(keyword, sentence, end);
                    if (indexOf === -1) { //not found
                        break;
                    }

                    start = indexOf;
                    end = indexOf + keywordLength;

                    integrator.addPeriod(new Period(start, end));
                }
            });

            return integrator.integrate();
        }

        this.highlight = function(keywordString, sentence) {
            totalSentence__ = totalSentence__ + 1;
            var newSentence = escapseString(sentence);

            var periods = findPeriodsOfSentenceByKeyword(newSentence, keywordString);
            var highlightSize = 0;

            forEach(periods, function(period) {
                var start = period.getStart() + highlightSize;
                var end = period.getEnd() + highlightSize;

                var infront = newSentence.substring(0, start);
                var word = newSentence.substring(start, end);
                var highlighted = highlightKeyword(word);
                var behind = newSentence.substring(end);

                newSentence = infront + highlighted + behind;

                highlightSize = highlightSize + highlighted.length - (word.length);
                totalHighlight__ = totalHighlight__ + 1;
            });

            return newSentence;
        };
    };

    /**
     * define IndexStore interface
     */
    var IndexStore = new Interface('IndexStore', [
        'writeIndex',
        'readIndex',
        'addDictionary',
        'getDictionaries',
        'getIndexs'
    ]);

    /**
     * class InMemoryIndexStore
     * for store index in memory (array)
     */
    var InMemoryIndexStore = function(maximumDictionaryKeySize) {
        var maximumDictionaryKeySize__ = maximumDictionaryKeySize;

        if (notDefined(maximumDictionaryKeySize__) || maximumDictionaryKeySize__ < 1) {
            maximumDictionaryKeySize__ = 1;
        }

        var indexStore__ = [];
        for (var index = 1; index <= maximumDictionaryKeySize__; index++) {
            indexStore__[index] = {};
        }

        /**
         * for write an index into IndexStore
         * pattern : IndexStore --> stores --> dictionaries --> indexes
         * 
         * @param {string} index
         * @param {string} sentence
         */
        this.writeIndex = function(index, sentence) {
            if (notDefined(sentence)) {
                return;
            }

            forEach(indexStore__, function(store) {
                forEach(store, function(dictionaries) {
                    forEach(dictionaries, function(indexes, keyword) {
                        if (foundIn(keyword, sentence) && notFoundIn(index, indexes)) {
                            indexes.push(index);
                        }
                    });
                });
            });
        };

        /**
         * for read indexes from IndexStore by keyword search parameter
         * 
         * @param {string} keywordString
         * @returns {array} indexs
         */
        this.readIndex = function(keywordString) {
            var keywordMap = {};

            var splitor = new InputSearchSplitor(keywordString);
            forEach(splitor.split(), function(keyword) {
                forEach(this.getDictionaries(keyword), function(indexes, dictionaryKey) {
                    if (foundIn(keyword, dictionaryKey)) {
                        if (notDefined(keywordMap[keyword])) {
                            keywordMap[keyword] = {};
                        }

                        forEach(indexes, function(index) {
                            keywordMap[keyword][index] = index;
                        });
                    }
                });
            }, this);

            return intersecIndexesByKeywordSize(keywordMap, splitor.getKeywordSize());
        };

        function intersecIndexesByKeywordSize(keywordMap, keywordSearchSize) {
            var indexMap = indexCountMapper(keywordMap);
            return indexCountReducer(indexMap, keywordSearchSize);
        }

        function indexCountMapper(keywordMap) {
            var indexMap = {};
            forEach(keywordMap, function(indexes) {
                forEach(indexes, function(index) {
                    if (notDefined(indexMap[index])) {
                        indexMap[index] = 0;
                    }

                    indexMap[index] = indexMap[index] + 1;
                });
            });

            return indexMap;
        }

        function indexCountReducer(indexMap, reduceSize) {
            var indexes = [];
            forEach(indexMap, function(count, index) {
                if (count >= reduceSize) {
                    indexes.push(index);
                }
            });

            return indexes;
        }

        this.addDictionary = function(keyword) {
            keyword = keyword.trim().toLowerCase();

            if (empty(keyword)) {
                return;
            }

            forEach(indexStore__, function(store, dictionaryKeySize) {
                if (keyword.length >= dictionaryKeySize) {
                    var dictionaryKeyword = keyword.substring(0, dictionaryKeySize);

                    if (notDefined(store[dictionaryKeyword])) {
                        store[dictionaryKeyword] = {};
                    }

                    if (notDefined(store[dictionaryKeyword][keyword])) {
                        store[dictionaryKeyword][keyword] = [];
                    }
                }
            });
        };

        /**
         * for read dictionaries from IndexStore which match by keyword search parameter
         * 
         * @param {string} keywordString
         * @returns {object} dictionaries
         */
        this.getDictionaries = function(keywordString) {
            if (empty(keywordString)) {
                return {};
            }

            var splitor = new InputSearchSplitor(keywordString);
            var dictionaries = {};
            forEach(splitor.split(), function(keword) {
                var source;
                var destination = dictionaries;

                if (keword.length <= maximumDictionaryKeySize__) {
                    source = indexStore__[keword.length][keword];
                } else {
                    var patialKeyword = keword.substring(0, maximumDictionaryKeySize__);
                    source = indexStore__[maximumDictionaryKeySize__][patialKeyword];
                }

                copyObject(source, destination);
            });


            if (notDefined(dictionaries)) {
                dictionaries = {};
            }

            return dictionaries;
        };

        this.getIndexs = function() {
            return indexStore__;
        };
    };

    /**
     * class IndexWriter
     * for write index into index store
     */
    var IndexWriter = function(indexStore) {
        var indexStore__ = indexStore;

        this.writeIndex = function(index, sentence) {
            indexStore__.writeIndex(index, sentence);
        };

        this.addDictionary = function(keyword) {
            indexStore__.addDictionary(keyword);
        };
    };

    /**
     * class IndexReader
     * for read index from index store
     */
    var IndexReader = function(indexStore) {
        var indexStore__ = indexStore;

        this.readIndex = function(keyword) {
            return indexStore__.readIndex(keyword);
        };

        this.getDictionaries = function(keyword) {
            return indexStore__.getDictionaries(keyword);
        };

        this.getIndexs = function() {
            return indexStore__.getIndexs();
        };
    };

    /**
     * class Suggession 
     * @description http://na5cent.blogspot.com/2013/02/algorithm-for-find-difference.html
     */
    var Suggestion = function(settings) {
        //require
        var dictionaries__ = settings.dictionary;
        var highlighter__ = settings.highlighter;

        //optional
        var percentSuggest__ = settings.percentSuggest || 60;
        var suggestionsSize__ = settings.suggestionsSize || 10;

        /**
         * for find total character map of string
         */
        function reduceKeywordAndTransformToMap(keyword) {
            var map = {};
            for (var i = 0; i < keyword.length; i++) {
                var character = keyword.charAt(i);
                if (notDefined(map[character])) {
                    map[character] = {
                        duplicate: 0,
                        position: 0
                    };
                }
                map[character].duplicate = map[character].duplicate + 1;
                map[character].position = map[character].position + i;
            }

            return map;
        }

        /**
         * for compute percentage between keyword and word compare
         */
        function computePercentage(keywordMap, compareMap) {
            var percentTotal = 0;

            for (var keywordProperty in keywordMap) {
                if (notDefined(compareMap[keywordProperty])) {
                    compareMap[keywordProperty] = {
                        duplicate: 0,
                        position: 0
                    };
                }

                var keywordObj = keywordMap[keywordProperty];
                var compareObj = compareMap[keywordProperty];

                var keywordPropertyValue = keywordObj.duplicate + keywordObj.position;
                var comparePropertyValue = compareObj.duplicate + compareObj.position;

                if (keywordPropertyValue !== 0 && comparePropertyValue !== 0) {

                    var propertyBase = (comparePropertyValue + keywordPropertyValue) / 2;
                    if (keywordPropertyValue >= comparePropertyValue) {
                        percentTotal = percentTotal + (comparePropertyValue / propertyBase);
                    } else {
                        percentTotal = percentTotal + (keywordPropertyValue / propertyBase);
                    }
                }
            }

            var mapBase = (totalProperties(keywordMap) + totalProperties(compareMap)) / 2;

            return 100 * (percentTotal / mapBase);
        }

        function getSuggestions(keywordString, PERCENT_SUGGEST) {
            var suggestions = [];
            var splitor = new InputSearchSplitor(keywordString);
            var keywordList = splitor.split();

            forEach(keywordList, function(keyword) {
                return forEach(dictionaries__, function(indexes, dictionaryKeyword) {
                    if (!hasSuggest(dictionaryKeyword, suggestions)) {

                        var keywordMap = reduceKeywordAndTransformToMap(keyword);
                        var dictionaryMap = reduceKeywordAndTransformToMap(dictionaryKeyword);
                        var percent = computePercentage(keywordMap, dictionaryMap);

                        if (percent >= PERCENT_SUGGEST) {
                            var highlightText = highlighter__.highlight(keywordString, dictionaryKeyword);
                            if (empty(highlightText)) {
                                highlightText = dictionaryKeyword;
                            }

                            suggestions.push({
                                keywordMatch: keyword,
                                word: dictionaryKeyword,
                                highlight: highlightText,
                                percent: numberFormat(percent)
                            });

                            if (suggestions.length === suggestionsSize__) {
                                return false;
                            }
                        }
                    }
                });
            });

            suggestions = suggestions.sort(function(keyword1, keyword2) {
                return keyword2.percent - keyword1.percent;
            });

            return suggestions;
        }

        function hasKeyword(word, list) {
            for (var index in list) {
                if (list[index] === word) {
                    return true;
                }
            }

            return false;
        }

        function hasSuggest(word, list) {
            for (var index in list) {
                if (list[index].word === word) {
                    return true;
                }
            }

            return false;
        }

        this.getSuggestionsWhenSearchFound = function(keyword) {
            return getSuggestions(keyword, 0);
        };

        this.getSuggestionsWhenSearchNotFound = function(keyword) {
            return getSuggestions(keyword, percentSuggest__);
        };
    };


    /**
     * constructor of IndexSearch
     * @param {object} settings
     */
    var constructor = function(settings) {
        if (notDefined(settings)) {
            throw new Error('require {object} settings');
        }

        var node__ = settings.repository;
        if (notDefined(node__)) {
            throw new Error('require {repository} settings.repository');
        }

        if (!isObject(node__)) {
            throw new Error('require {repository} settings.repository is root node object');
        }

        var indexOnFields__ = settings.indexOnFields || [];
        if (empty(indexOnFields__)) {
            throw new Error('require index field on {string[]} : settings.indexOnFields');
        } else if (foundIn('nodes', indexOnFields__)) {
            throw new Error('field name \'nodes\' in {string[]} : settings.indexOnFields is reserved word');
        }

        var highlighter__ = new Highlighter(settings.highlightClass || 'keyword-highlight');
        var suggestionHighlighter__ = new Highlighter(settings.highlightClass || 'keyword-highlight');

        var indexStoreImpl__ = settings.indexStore || new InMemoryIndexStore(settings.maximumDictionaryKeySize || 3);
        Interface.ensureImplements(indexStoreImpl__, [IndexStore]);

        var indexWriter__ = new IndexWriter(indexStoreImpl__);
        var indexReader__ = new IndexReader(indexStoreImpl__);

        var indexSeparator__ = settings.indexSeparator || '/';
        var postfixFieldNameHighlight__ = settings.postfixFieldNameHighlight || 'Highlight';

        var resultNode__;
        var keyword__ = '';
        var duplicated__ = {};
        var additionalDictionaries__ = settings.additionalDictionaries || [];
        var suggestionList__ = [];
        var suggestionsSize__ = settings.suggestionsSize;
        var percentSuggest__ = settings.percentSuggest;

        /**
         * function stopword
         * use for separate keyword from sentence
         */
        var stopword__ = settings.stopword || function(text) {
            return replaceNotation(text).split(' ');
        };

        //----------------------------------------------------------------------
        createIndex();

        function createIndex() {
            for (var dictionaryIndex in additionalDictionaries__) {
                indexWriter__.addDictionary(additionalDictionaries__[dictionaryIndex]);
            }
            walkRepositoryReadKeyword(node__);

            for (var nodeIndex in node__.nodes) {
                walkRepositoryWriteIndex(0, nodeIndex, node__.nodes[nodeIndex]);
            }

            for (var duplicateType in duplicated__) {
                delete duplicated__[duplicateType];
            }
        }

        function createDictionary(sentence) {
            if (empty(sentence)) {
                return;
            }

            var keywords = stopword__(sentence);
            for (var keywordIndex in keywords) {
                indexWriter__.addDictionary(keywords[keywordIndex]);
            }
        }

        function walkRepositoryReadKeyword(node) {
            for (var field in indexOnFields__) {
                var indexName = indexOnFields__[field];
                createDictionary(node[indexName]);
            }

            var nodes = node.nodes;
            if (empty(nodes)) {
                return;
            }

            for (var nodeIndex in nodes) {
                walkRepositoryReadKeyword(nodes[nodeIndex]);
            }
        }

        function walkRepositoryWriteIndex(level, index, node) {
            reduceIndex(node, function(sentence) {
                indexWriter__.writeIndex(index, sentence);
            });

            // add field
            node.level = 'level-' + level;
            node.index = index + '';

            var nodes = node.nodes;
            if (empty(nodes)) {
                return;
            }

            for (var nodeIndex in nodes) {
                walkRepositoryWriteIndex(level + 1, index + indexSeparator__ + nodeIndex, nodes[nodeIndex]);
            }
        }

        function reduceIndex(node, callback) {
            for (var field in indexOnFields__) {
                var indexName = indexOnFields__[field];
                var duplicatedType = duplicated__[indexName];

                if (notDefined(duplicatedType)) {
                    duplicatedType = {};
                    duplicated__[indexName] = duplicatedType;
                }

                var duplicatedField = duplicatedType[node[indexName]];
                if (notDefined(duplicatedField)) {
                    duplicatedField = true;
                    duplicatedType[node[indexName]] = duplicatedField;
                    callback(node[indexName]);
                }
            }
        }

        this.reIndex = function(node) {
            node__ = node;
            createIndex();
        };

        this.getKeyword = function() {
            return keyword__;
        };

        this.getRepository = function() {
            return node__;
        };

        this.getIndexs = function() {
            return indexReader__.getIndexs();
        };

        this.clear = function() {
            keyword__ = '';
            return new ResultSearch({
                content: node__
            });
        };

        this.search = function(keyword) {
            if (empty(keyword)) {
                return new ResultSearch({
                    content: node__
                });
            }

            keyword = keyword.trim().toLowerCase();

            // keyword not change, such as user try typed an empty keyword
            // return old result
            if (keyword__ === keyword) {
                return getResultSearch();
            }

            //clean results
            highlighter__.resetTotal();
            suggestionHighlighter__.resetTotal();

            resultNode__ = {nodes: []};
            suggestionList__ = [];
            //
            keyword__ = keyword;
            pullSuggestions();
            keyword__ = generateNewKeywrod();
            search();
            keyword__ = keyword;

            return getResultSearch();
        };

        function generateNewKeywrod() {
            var suggestMap = {};

            forEach(suggestionList__, function(suggest) {
                var firstCharactor = suggest.word[0];
                if (notDefined(suggestMap[firstCharactor])) {
                    suggestMap[firstCharactor] = [];
                }

                suggestMap[firstCharactor].push(suggest.word);
            });

            var splitor = new InputSearchSplitor(keyword__);
            var keywordList = splitor.split();
            forEach(suggestMap, function(suggests) {
                getKeyword(suggests[0], keywordList);
            });

            removeSomeSuggests(keywordList);
            return reduceKeyword(keywordList);
        }

        function removeSomeSuggests(keywordList) {
            var newSuggets = [];
            forEach(keywordList, function(keyword) {
                forEach(suggestionList__, function(suggest) {
                    if (keyword !== suggest.word && notFoundIn(suggest, newSuggets)) {
                        newSuggets.push(suggest);
                    }
                });
            });

            suggestionList__ = newSuggets;
        }

        function reduceKeyword(keywordList) {
            var keywordMap = {};
            for (var index in keywordList) {
                keywordMap[keywordList[index]] = keywordList[index];
            }

            return object2Array(keywordMap).join(' ');
        }

        function getKeyword(word, list) {
            for (var index in list) {
                if (matchWord(list[index], word)) {
                    list[index] = word;
                }
            }
        }

        function matchWord(word1, word2) {
            return word1[0] === word2[0] && (word2.length < word1.length || notFoundIn(word1, word2));
        }

        function getResultSearch() {
            var splitor = new InputSearchSplitor(keyword__);
            splitor.split();
            return new ResultSearch({
                totalPosition: splitor.getKeywordSize() > 0 ? Math.ceil(highlighter__.getTotalHighlight() / splitor.getKeywordSize()) : 0,
                totalSentence: highlighter__.getTotalSentence(),
                content: resultNode__,
                suggestions: suggestionList__
            });
        }

        function search() {
            var indexes = indexReader__.readIndex(keyword__);
            for (var idx in indexes) {
                pullNode(indexes[idx]);
            }
        }

        function pullSuggestions() {
            suggestionList__ = new Suggestion({
                dictionary: indexReader__.getDictionaries(keyword__),
                suggestionsSize: suggestionsSize__,
                percentSuggest: percentSuggest__,
                highlighter: suggestionHighlighter__
            }).getSuggestionsWhenSearchFound(keyword__);
        }

        function pullNode(index) {
            var indexArray = index.split(indexSeparator__);
            var nodePointer = node__;
            var resultNodePointer = resultNode__;

            for (var idx in indexArray) {
                var subIndex = indexArray[idx];

                if (empty(subIndex)) {
                    break;
                }

                nodePointer = nodePointer.nodes[subIndex];
                var nodeTemp = resultNodePointer.nodes[subIndex];
                if (notDefined(nodeTemp)) {
                    nodeTemp = copyNode(nodePointer);
                    resultNodePointer.nodes[subIndex] = nodeTemp;
                }

                if (notDefined(nodeTemp.nodes)) {
                    nodeTemp.nodes = [];
                }

                resultNodePointer = nodeTemp;
            }
        }

        function copyNode(node) {
            var newNode = {};
            for (var fieldName in node) {
                if (fieldName !== 'nodes') {
                    newNode[fieldName] = node[fieldName];
                    for (var indexName in indexOnFields__) {
                        if (fieldName === indexOnFields__[indexName]) {
                            var sentence = newNode[fieldName];
                            var highlightText = highlighter__.highlight(keyword__, sentence);
                            if (notEmpty(highlightText)) {
                                newNode[fieldName + postfixFieldNameHighlight__] = highlightText;
                            }
                        }
                    }
                }
            }

            return newNode;
        }
    };


    /**
     * IndexSearch return
     */
    return constructor;

})();










/**
 * Blogger
 * for pull repository from blogger
 * 
 * @author redcrow (jittagorn pitakmetagoon)
 */

window.Blogger = window.Blogger || {};
window.Blogger.pullRepositoryFromBlog = function(blogUrl, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = blogUrl + '/feeds/posts/default?max-results=10000&alt=json-in-script&callback=blogFeedCallback';
    script.onload = function() {
        callback(window.blogFeedRepository);
    };

    document.getElementsByTagName('head')[0].appendChild(script);
};


function blogFeedCallback(xml) {
    var blogFeedRepository__ = {nodes: []};
    var feed = xml.feed;
    var categories = feed.category;
    for (var index in categories) {
        var category = categories[index];
        blogFeedRepository__.nodes.push({
            name: category.term,
            link: '/search/label/' + encodeURIComponent(category.term)
        });
    }

    var entries = feed.entry;
    for (var index in entries) {
        var entry = entries[index];
        entry.title.$t;
        var entryCategories = entry.category;
        for (var categoryIndex in entryCategories) {
            var entryCategory = entryCategories[categoryIndex];
            var category = getCategory(entryCategory.term);

            var nodes = category.nodes;
            if (!nodes) {
                nodes = [];
            }

            var node = {
                name: entry.title.$t,
                published: new Date(entry.published.$t),
                link: getPostLink(entry),
                nodes: []
            };

            if (index < 5) {
                node.newPost = true;
            }

            nodes.push(node);

            category.nodes = nodes;
        }
    }

    sortNodesByName(blogFeedRepository__.nodes);
    for (var index in blogFeedRepository__.nodes) {
        var node = blogFeedRepository__.nodes[index];
        sortByPublished(node.nodes);
    }

    function sortNodesByName(nodes) {
        nodes = nodes.sort(function(node1, node2) {
            return node1.name.localeCompare(node2.name);
        });
    }

    function sortByPublished(nodes) {
        nodes = nodes.sort(function(node1, node2) {
            return node1.published > node2.published;
        });
    }

    function getCategory(name) {
        var nodes = blogFeedRepository__.nodes;
        for (var index in nodes) {
            var node = nodes[index];
            if (node.name === name) {
                return node;
            }
        }

        return null;
    }

    function getPostLink(entry) {
        var links = entry.link;
        for (var index in links) {
            if (links[index].rel === 'alternate') {
                return links[index].href;
            }
        }

        return '';
    }

    window.blogFeedRepository = blogFeedRepository__;
}
;