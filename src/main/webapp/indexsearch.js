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
        return object !== undefined && typeof object !== 'undefined';
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
     * class ResultSearch 
     *
     * bean for keep result after searching
     */
    var ResultSearch = function(result) {
        var totalHighlight__ = result.totalHighlight || 0;
        var totalSentence__ = result.totalSentence || 0;
        var content__ = result.content || {repositories: {}};

        this.getTotalHighlight = function() {
            return totalHighlight__;
        };

        this.getTotalSentence = function() {
            return totalSentence__;
        };

        this.getContent = function() {
            return content__;
        };
    };

    /**
     * class Highlighter
     *
     * for make html highlight result search    				
     */
    var Highlighter = function(cssClass) {
        var totalSentence__ = 0;
        var totalHighlight__ = 0;

        function highlightKeyword(keyword) {
            return '<span class=' + cssClass + '>' + escapseString(keyword) + '</span>';
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

        this.highlight = function(keyword, text) {
            var highlightText = '';
            var keywordLength = keyword.length;

            var index = findIndex(keyword, text);
            if (index === -1) {
                return highlightText;
            }

            totalSentence__ = totalSentence__ + 1;
            while (true) {
                totalHighlight__ = totalHighlight__ + 1;

                var lastIndex = index + keywordLength;
                var before = escapseString(text.substring(0, index));
                var center = highlightKeyword(text.substring(index, lastIndex));

                //concatenation 
                highlightText = highlightText + before + center;

                //re text
                text = text.substring(lastIndex);
                //
                index = findIndex(keyword, text);
                if (index === -1) {
                    highlightText = highlightText + escapseString(text);
                    break;
                }
            }


            return highlightText;
        };
    };

    /**
     * class MemoryIndex
     * 
     * for read write an index
     */
    var MemoryIndex = function(maximumKeySize) {
        if (maximumKeySize < 1) {
            maximumKeySize = 1;
        }

        var indexs__ = [];
        for (var keySizeIndex = 1; keySizeIndex <= maximumKeySize; keySizeIndex++) {
            indexs__[keySizeIndex] = {};
        }

        var IndexWriter = function() {

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
        };

        var IndexReader = function() {

            this.readIndex = function(keyword) {
                var dictionary;
                var indexList = [];
                if (keyword.length <= maximumKeySize) {
                    dictionary = indexs__[keyword.length][keyword];
                } else {
                    dictionary = indexs__[maximumKeySize][keyword.substring(0, maximumKeySize)];
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
        };

        var indexWriter__ = new IndexWriter();
        var indexReader__ = new IndexReader();

        this.addKeywordDictionary = function(keyword) {
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

        this.getIndexWriter = function() {
            return indexWriter__;
        };

        this.getIndexReader = function() {
            return indexReader__;
        };

        this.get = function() {
            return indexs__;
        };
    };

    //============================== constructor ===============================
    return function(repository, options) {
        if (notDefined(repository)) {
            throw new Error('require first parameter is repository');
        }

        options = options || {};

        var repository_ = repository || {repositories: {}};
        var indexFields_ = options.indexFields || [];

        if (empty(indexFields_)) {
            throw new Error('require {string[]} : options.indexFields');
        } else {
            for (var index in indexFields_) {
                if (indexFields_[index] === 'repositories') {
                    throw new Error('field name \'repositories\' in {string[]} : options.indexFields is reserved word');
                }
            }
        }

        var highlighter_ = new Highlighter(options.highlightClass || 'highlighter');
        var index_ = new MemoryIndex(options.maximumIndexKeySize || 3);

        var indexSeparator_ = options.indexSeparator || '/';
        var result_;
        var keyword_ = '';
        var duplicated = {};

        /**
         * function stopword
         * 
         * use for separate keyword from sentence
         */
        var stopword_ = options.stopword || function(text) {
            return replaceNotation(text).split(' ');
        };


        //----------------------------------------------------------------------
        createIndex();

        function createIndex() {
            walkRepositoryReadKeyword(repository_);

            for (var postIndex in repository_.repositories) {
                walkRepositoryWriteIndex(0, postIndex, repository_.repositories[postIndex]);
            }
        }

        function createDictionary(sentence) {
            if (empty(sentence)) {
                return;
            }

            var keywords = stopword_(sentence);
            for (var keywordIndex in keywords) {
                index_.addKeywordDictionary(keywords[keywordIndex]);
            }
        }

        function walkRepositoryReadKeyword(repository) {
            for (var index in indexFields_) {
                var indexName = indexFields_[index];
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
            for (var i in indexFields_) {
                var indexName = indexFields_[i];
                if (notDefined(duplicated[repository[indexName]])) {
                    duplicated[repository[indexName]] = 0;
                    index_.getIndexWriter().writeIndex(index, repository[indexName]);
                } else {
                    duplicated[repository[indexName]] = duplicated[repository[indexName]] + 1;
                }
            }

            // modify repository
            repository.level = 'level-' + level;
            repository.index = index + '';

            var repositories = repository.repositories;
            if (empty(repositories)) {
                return;
            }

            for (var postIndex in repositories) {
                walkRepositoryWriteIndex(level + 1, index + indexSeparator_ + postIndex, repositories[postIndex]);
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
            return index_.get();
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

            // keyword search not change such as empty keyword
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

            var indexs = index_.getIndexReader().readIndex(keyword_);
            for (var idx in indexs) {
                pullRepository(indexs[idx]);
            }

            return new ResultSearch({
                totalHighlight: highlighter_.getTotalHighlight(),
                totalSentence: highlighter_.getTotalSentence(),
                content: result_
            });
        };
        
        function copyRepository(repository){
            var newRepository = {};
            for(var fieldName in repository){
                newRepository[fieldName] = repository[fieldName];
                
                for(var indexName in indexFields_){
                    if(fieldName === indexFields_[indexName]){
                        var sentence = repository[fieldName];
                        var highlightText = highlighter_.highlight(keyword_, sentence);
                        if(notEmpty(highlightText)){
                            newRepository[fieldName + 'Highlight'] = highlightText;
                        }
                    }
                }
            }
            
            return newRepository;
        }

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
    };
})();