/**
 * class IndexSearch
 * 
 * @author redcrow (jittagorn pitakmetagoon)
 * @create on 26/08/2013
 * @website na5cent.blogspot.com
 * @version 1.0
 */
var IndexSearch = (function() {

    function defined(object) {
        return typeof object !== 'undefined';
    }

    function notDefined(object) {
        return !defined(object);
    }

    function empty(list) {
        return notDefined(list) || list.length === 0;
    }

    function notEmpty(list) {
        return !empty(list);
    }

    function findIndex(element, list) {
        if (typeof list === 'string') {
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

    /**
     * class Interface
     * 
     * @author : redcrow
     * @create on 25/02/2013
     * @website na5cent.blogspot.com
     */
    var Interface = (function() {

        /**
         * for ensure constructor input type require
         */
        function ensureConstructorRequire(name, methods) {
            if (typeof name !== 'string') {
                throw new Error('constructor of Interface class require first argument is \'string\', but is \'' + (typeof name) + '\'.');
            }

            if (typeof methods !== 'object' || methods.length === undefined) {
                throw new Error('constructor of Interface class require second argument is \'array of string\', but is \'' + (typeof methods) + '\'.');
            }
        }

        /**
         * for ensure method type require
         */
        function ensureMethodType(method, index) {
            if (typeof method !== 'string') {
                throw new Error('constructor of Interface class require second argument is \'array of string\', but method index ' + index + ' is not \'string\', is \'' + (typeof method) + '\'.');
            }

            return method;
        }

        /**
         * constructor
         * 
         * {string} name
         * {string[]} method names 
         */
        return function(name, methods) {
            if (arguments.length !== 2) {
                throw new Error("constructor of Interface class require 2 arguments : Interface({string} name, {string[]} method names");
            }
            ensureConstructorRequire(name, methods);

            var _name = name;
            var _methods = [];

            for (var index = 0; index < methods.length; index++) {
                var method = ensureMethodType(methods[index], index);
                _methods.push(method);
            }

            this.getName = function() {
                return _name;
            };

            this.getMethods = function() {
                return _methods;
            };
        };
    })();

    /**
     * static method Interface.ensureImplements
     * 
     * for ensure class implements an interfaces.
     */
    Interface.ensureImplements = function(clazz, interfacs) {
        if (arguments.length !== 2) {
            throw new Error('Interface.ensureImplements require 2 arguments : Interface.ensureImplement({object} obj, {interface[]} interfaces).');
        }

        if (typeof clazz !== 'object') {
            throw new Error('first argument of Interface.ensureImplements is not \'object\', but is \'' + (typeof clazz) + '\'.');
        }

        if (typeof interfacs !== 'object' || interfacs.length === undefined) {
            throw new Error('second argument of Interface.ensureImplements is not \'array of interface\', but is \'' + (typeof interfacs) + '\'.');
        }

        for (var index = 0; index < interfacs.length; index++) {
            var interface = interfacs[index];
            if (interface.constructor !== Interface) {
                throw new Error('second argument of Interface.ensureImplements index ' + index + ' is not interface.');
            }

            var methods = interface.getMethods();
            for (var property in methods) {
                var method = methods[property];

                if (clazz[method] === undefined) {
                    throw new Error('implementation class is not define method \'' + method + '\' of Interface \'' + interface.getName() + '\'.');
                }

                if (typeof clazz[method] !== 'function') {
                    throw new Error('implementation class define \'' + method + '\' is not \'method\', but is \'' + (typeof clazz[method]) + '\'.');
                }
            }
        }
    };

    /**
     * class ResultSearch 
     *
     * bean for keep result after searching
     */
    var ResultSearch = function(result) {
        var totalHighlight__ = result.totalHighlight || 0;
        var totalSentence__ = result.totalSentence || 0;
        var content__ = result.content || {repositories: {}};
        var suggestions__ = result.suggestions || [];

        this.getTotalHighlight = function() {
            return totalHighlight__;
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
     *
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
    var IndexStore = new Interface('IndexStore', ['writeIndex', 'readIndex', 'addDictionary', 'addDictionary', 'getDictionary', 'getIndexs']);

    /**
     * class MemoryIndex
     * 
     * for store index in memory
     */
    var MemoryIndex = function(maximumKeySize) {
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
            var dictionary;
            var indexList = [];
            if (keyword.length <= maximumKeySize__) {
                dictionary = indexs__[keyword.length][keyword];
            } else {
                dictionary = indexs__[maximumKeySize__][keyword.substring(0, maximumKeySize__)];
            }

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

        };

        this.getIndexs = function() {
            return indexs__;
        };
    };

    /**
     * class IndexWriter
     * 
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
     * 
     * for write index into index store
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

    //============================== constructor ===============================
    return function(repository, options) {
        if (notDefined(repository)) {
            throw new Error('require first parameter is repository');
        }

        options = options || {};

        var repository_ = repository || {repositories: {}};
        var indexOnFields_ = options.indexOnFields || [];

        var highlighter_ = new Highlighter(options.highlightClass || 'highlighter');
        var indexStoreImplmentation_ = options.indexStore || new MemoryIndex(options.maximumIndexKeySize || 3);
        Interface.ensureImplements(indexStoreImplmentation_, [IndexStore]);
        
        var indexWriter_ = new IndexWriter(indexStoreImplmentation_);
        var indexReader_ = new IndexReader(indexStoreImplmentation_);

        var indexSeparator_ = options.indexSeparator || '/';
        var postfixFieldNameHighlight_ = options.postfixFieldNameHighlight || 'Highlight';

        var result_;
        var keyword_ = '';
        var duplicated_ = {};

        /**
         * function stopword
         * 
         * use for separate keyword from sentence
         */
        var stopword_ = options.stopword || function(text) {
            return replaceNotation(text).split(' ');
        };

        if (empty(indexOnFields_)) {
            throw new Error('require {string[]} : options.indexOnFields');
        } else {
            for (var index in indexOnFields_) {
                if (indexOnFields_[index] === 'repositories') {
                    throw new Error('field name \'repositories\' in {string[]} : options.indexOnFields is reserved word');
                }
            }
        }

        //----------------------------------------------------------------------
        createIndex();

        function createIndex() {
            walkRepositoryReadKeyword(repository_);

            for (var repoIndex in repository_.repositories) {
                walkRepositoryWriteIndex(0, repoIndex, repository_.repositories[repoIndex]);
            }
        }

        function createDictionary(sentence) {
            if (empty(sentence)) {
                return;
            }

            var keywords = stopword_(sentence);
            for (var keywordIndex in keywords) {
                indexWriter_.addDictionary(keywords[keywordIndex]);
            }
        }

        function walkRepositoryReadKeyword(repository) {
            for (var field in indexOnFields_) {
                var indexName = indexOnFields_[field];
                createDictionary(repository[indexName]);
            }

            var repositories = repository.repositories;
            if (empty(repositories)) {
                return;
            }

            for (var index in repositories) {
                walkRepositoryReadKeyword(repositories[index]);
            }
        }

        function walkRepositoryWriteIndex(level, index, repository) {
            for (var field in indexOnFields_) {
                var indexName = indexOnFields_[field];
                var duplicatedType = duplicated_[indexName];

                if (notDefined(duplicatedType)) {
                    duplicatedType = {};
                    duplicated_[indexName] = duplicatedType;
                }

                var duplicatedField = duplicatedType[repository[indexName]];
                if (notDefined(duplicatedField)) {
                    duplicatedField = 0;
                    duplicatedType[repository[indexName]] = duplicatedField;
                    indexWriter_.writeIndex(index, repository[indexName]);
                } else {
                    duplicatedField = duplicatedField + 1;
                }
            }

            // modify repository
            repository.level = 'level-' + level;
            repository.index = index + '';

            var repositories = repository.repositories;
            if (empty(repositories)) {
                return;
            }

            for (var repoIndex in repositories) {
                walkRepositoryWriteIndex(level + 1, index + indexSeparator_ + repoIndex, repositories[repoIndex]);
            }
        }

        this.reIndex = function(repo) {
            repository_ = repo;
            createIndex();
        };

        this.getKeyword = function() {
            return keyword_;
        };

        this.getRepository = function() {
            return repository;
        };

        this.getIndexs = function() {
            return indexReader_.getIndexs();
        };

        this.clear = function() {
            return new ResultSearch({
                content: repository_
            });
        };

        this.search = function(keyword) {
            if (empty(keyword)) {
                return new ResultSearch({
                    content: repository_
                });
            }

            keyword = keyword.trim().toLowerCase();

            // keyword not change, such as user try type an empty keyword
            // return old result
            if (keyword_ === keyword) {
                return new ResultSearch({
                    totalHighlight: highlighter_.getTotalHighlight(),
                    totalSentence: highlighter_.getTotalSentence(),
                    content: result_
                });
            }

            //clean results
            highlighter_.resetTotal();
            result_ = {repositories: {}};
            //
            keyword_ = keyword;

            var indexs = indexReader_.readIndex(keyword_);
            for (var idx in indexs) {
                pullRepository(indexs[idx]);
            }

            return new ResultSearch({
                totalHighlight: highlighter_.getTotalHighlight(),
                totalSentence: highlighter_.getTotalSentence(),
                content: result_
            });
        };

        function pullRepository(index) {
            var indexArray = index.split(indexSeparator_);
            var repositoryPointer = repository_;
            var resultPointer = result_;

            for (var idx in indexArray) {
                var subIndex = indexArray[idx];

                if (empty(subIndex)) {
                    break;
                }

                repositoryPointer = repositoryPointer.repositories[subIndex];
                var repo = resultPointer.repositories[subIndex];
                if (notDefined(repo)) {
                    repo = copyRepository(repositoryPointer);
                    resultPointer.repositories[subIndex] = repo;
                }

                if (notDefined(repo.repositories)) {
                    repo.repositories = {};
                }

                resultPointer = repo;
            }
        }

        function copyRepository(repository) {
            var newRepository = {};
            for (var fieldName in repository) {
                if (fieldName !== 'repositories') {
                    newRepository[fieldName] = repository[fieldName];
                    for (var indexName in indexOnFields_) {
                        if (fieldName === indexOnFields_[indexName]) {
                            var sentence = newRepository[fieldName];
                            var highlightText = highlighter_.highlight(keyword_, sentence);
                            if (notEmpty(highlightText)) {
                                newRepository[fieldName + postfixFieldNameHighlight_] = highlightText;
                            }
                        }
                    }
                }
            }

            return newRepository;
        }
    };
})();