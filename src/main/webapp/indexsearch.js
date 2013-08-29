/**
 * class IndexSearch
 * @author redcrow (jittagorn pitakmetagoon)
 * @create on 26/08/2013
 * @website na5cent.blogspot.com
 * @version 1.0
 */
var IndexSearch = (function() {

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

    function findIndex(element, list) {
        if (isString(list)) {
            element = element.toLowerCase();
            list = list.toLowerCase();
        }

        return list.indexOf(element);
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
     * class Highlighter
     * for make html highlight result search    				
     */
    var Highlighter = function(cssClass) {
        var cssClass__ = cssClass;
        var totalSentence__ = 0;
        var totalHighlight__ = 0;

        function highlightKeyword(keyword) {
            return '<span class=' + cssClass__ + '>' + escapseString(keyword) + '</span>';
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

        this.highlight = function(keyword, sentence) {
            var sentenceHighlighted = '';
            var keywordLength = keyword.length;

            var index = findIndex(keyword, sentence);
            if (index === -1) {
                return sentenceHighlighted;
            }

            totalSentence__ = totalSentence__ + 1;
            while (true) {
                totalHighlight__ = totalHighlight__ + 1;

                var lastIndex = index + keywordLength;
                var infront = escapseString(sentence.substring(0, index));
                var highlighted = highlightKeyword(sentence.substring(index, lastIndex));

                //concatenation 
                sentenceHighlighted = sentenceHighlighted + infront + highlighted;

                //re text
                sentence = sentence.substring(lastIndex);
                //
                index = findIndex(keyword, sentence);
                if (index === -1) {
                    sentenceHighlighted = sentenceHighlighted + escapseString(sentence);
                    break;
                }
            }


            return sentenceHighlighted;
        };
    };

    /**
     * define IndexStore interface
     */
    var IndexStore = new Interface('IndexStore', ['writeIndex', 'readIndex', 'addDictionary', 'getDictionary', 'getIndexs']);

    /**
     * class MemoryIndexStore
     * for store index in memory
     */
    var MemoryIndexStore = function(maximumKeySize) {
        var maximumKeySize__ = maximumKeySize;

        if (notDefined(maximumKeySize__) || maximumKeySize__ < 1) {
            maximumKeySize__ = 1;
        }

        var indexs__ = [];
        for (var keySizeIndex = 1; keySizeIndex <= maximumKeySize__; keySizeIndex++) {
            indexs__[keySizeIndex] = {};
        }

        this.writeIndex = function(index, sentence) {
            if (notDefined(sentence)) {
                return;
            }

            for (var keySizeIndex in indexs__) {
                for (var dictionryIndex in indexs__[keySizeIndex]) {
                    var keywordList = indexs__[keySizeIndex][dictionryIndex];

                    for (var keywordIndex in keywordList) {
                        var indexs = keywordList[keywordIndex];

                        if (foundIn(keywordIndex, sentence) && notFoundIn(index, indexs)) {
                            indexs.push(index);
                        }
                    }
                }
            }
        };

        this.readIndex = function(keyword) {
            var dictionary = this.getDictionary(keyword);

            var indexList = [];
            for (var dictionaryIndex in dictionary) {
                if (foundIn(keyword, dictionaryIndex)) {
                    var indexs = dictionary[dictionaryIndex];
                    for (var idx in indexs) {
                        if (notFoundIn(indexs[idx], indexList)) {
                            indexList.push(indexs[idx]);
                        }
                    }
                }
            }

            return indexList;
        };

        this.addDictionary = function(keyword) {
            keyword = keyword.trim().toLowerCase();

            if (empty(keyword)) {
                return;
            }

            for (var keySizeIndex in indexs__) {
                if (keyword.length >= keySizeIndex) {
                    var dictionary = keyword.substring(0, keySizeIndex);
                    var dictionaryList = indexs__[keySizeIndex][dictionary];

                    if (notDefined(dictionaryList)) {
                        indexs__[keySizeIndex][dictionary] = {};
                        dictionaryList = indexs__[keySizeIndex][dictionary];
                    }

                    if (notDefined(dictionaryList[keyword])) {
                        dictionaryList[keyword] = [];
                    }
                }
            }
        };

        this.getDictionary = function(keyword) {
            var dictionary;
            if (keyword.length <= maximumKeySize__) {
                dictionary = indexs__[keyword.length][keyword];
            } else {
                dictionary = indexs__[maximumKeySize__][keyword.substring(0, maximumKeySize__)];
            }

            return dictionary;
        };

        this.getIndexs = function() {
            return indexs__;
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

        this.getDictionary = function(keyword) {
            return indexStore__.getDictionary(keyword);
        };

        this.getIndexs = function() {
            return indexStore__.getIndexs();
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

        var indexOnFields__ = settings.indexOnFields || [];

        var highlighter__ = new Highlighter(settings.highlightClass || 'highlighter');
        var indexStoreImplmentation__ = settings.indexStore || new MemoryIndexStore(settings.maximumIndexKeySize || 3);
        Interface.ensureImplements(indexStoreImplmentation__, [IndexStore]);

        var indexWriter__ = new IndexWriter(indexStoreImplmentation__);
        var indexReader__ = new IndexReader(indexStoreImplmentation__);

        var indexSeparator__ = settings.indexSeparator || '/';
        var postfixFieldNameHighlight__ = settings.postfixFieldNameHighlight || 'Highlight';

        var resultNode__;
        var keyword__ = '';
        var duplicated__ = {};
        var additionalDictionaries__ = settings.additionalDictionaries || [];
        var seggestions = [];
        var suggestionsSize__ = settings.suggestionsSize || 10;

        /**
         * function stopword
         * use for separate keyword from sentence
         */
        var stopword_ = settings.stopword || function(text) {
            return replaceNotation(text).split(' ');
        };

        if (empty(indexOnFields__)) {
            throw new Error('require index field on {string[]} : settings.indexOnFields');
        } else if (foundIn('nodes', indexOnFields__)) {
            throw new Error('field name \'nodes\' in {string[]} : settings.indexOnFields is reserved word');
        }

        //----------------------------------------------------------------------
        createIndex();

        function createIndex() {
            walkRepositoryReadKeyword(node__);
            for (var dictionaryIndex in additionalDictionaries__) {
                indexWriter__.addDictionary(additionalDictionaries__[dictionaryIndex]);
            }

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

            var keywords = stopword_(sentence);
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

            // keyword not change, such as user try type an empty keyword
            // return old result
            if (keyword__ === keyword) {
                return new ResultSearch({
                    totalPosition: highlighter__.getTotalHighlight(),
                    totalSentence: highlighter__.getTotalSentence(),
                    content: resultNode__,
                    suggestions: seggestions
                });
            }

            //clean results
            highlighter__.resetTotal();
            resultNode__ = {nodes: []};
            seggestions = [];
            //
            keyword__ = keyword;

            var indexs = indexReader__.readIndex(keyword__);
            for (var idx in indexs) {
                pullNode(indexs[idx]);
            }
            
            seggestions = getSuggestions(indexReader__.getDictionary(keyword__));

            return new ResultSearch({
                totalPosition: highlighter__.getTotalHighlight(),
                totalSentence: highlighter__.getTotalSentence(),
                content: resultNode__,
                suggestions: seggestions
            });
        };

        function getSuggestions(dictionary) {
            var suggestions = [];
            for (var dictionaryIndex in dictionary) {
                suggestions.push(dictionaryIndex);

                if (suggestions.length === suggestionsSize__) {
                    break;
                }
            }

            suggestions = suggestions.sort(function(keyword1, keyword2){
                return keyword1.length - keyword2.length;
            });

            return suggestions;
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