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
        if (typeof list === 'string') {
            element = element.toLowerCase();
            list = list.toLowerCase();
        }

        return list.indexOf(element) !== -1;
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
        var content__ = result.content || {posts: {}};

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

            this.writeIndex = function(path, text) {
                if (notDefined(text)) {
                    return;
                }

                for (var keySizeIndex in indexs__) {
                    for (var dictionryIndex in indexs__[keySizeIndex]) {
                        var keywordList = indexs__[keySizeIndex][dictionryIndex];

                        for (var keywordIndex in keywordList) {
                            var paths = keywordList[keywordIndex];

                            if (foundIn(keywordIndex, text) && notFoundIn(path, paths)) {
                                paths.push(path);
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

        this.get = function(keyword) {
            if (keyword.length <= maximumKeySize) {
                return indexs__[keyword.length][keyword];
            } else {
                return indexs__[maximumKeySize][keyword.substring(0, maximumKeySize)];
            }
        };

        this.gets = function() {
            return indexs__;
        };
    };

    //============================== constructor ===============================
    return function(repository, options) {
        if (notDefined(repository)) {
            throw new Error('require first parameter is repository');
        }

        options = options || {};

        var repository_ = repository || {posts: {}};
        var highlighter_ = new Highlighter(options.highlightClass || 'highlighter');
        var index_ = new MemoryIndex(options.maximumIndexKeySize || 3);

        var indexSeparator_ = options.indexSeparator || '/';
        var repositoryResult_;
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

            for (var postIndex in repository_.posts) {
                walkRepositoryWriteIndex(0, postIndex, repository_.posts[postIndex]);
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

        function walkRepositoryReadKeyword(parent) {
            createDictionary(parent.name);

            var posts = parent.posts;
            if (empty(posts)) {
                return;
            }

            for (var index in posts) {
                walkRepositoryReadKeyword(posts[index]);
            }
        }

        function walkRepositoryWriteIndex(level, index, repository) {
            if (notDefined(duplicated[repository.name])) {
                duplicated[repository.name] = 0;
                index_.getIndexWriter().writeIndex(index, repository.name);
            } else {
                duplicated[repository.name] = duplicated[repository.name] + 1;
            }

            // modify repository
            repository.level = 'level-' + level;
            repository.index = index + '';

            var posts = repository.posts;
            if (empty(posts)) {
                return;
            }

            for (var postIndex in posts) {
                walkRepositoryWriteIndex(level + 1, index + indexSeparator_ + postIndex, posts[postIndex]);
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
            return index_.gets();
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
                    content: repositoryResult_
                });
            }

            //clean results
            highlighter_.resetTotal();
            repositoryResult_ = {posts: {}};
            //
            keyword_ = keyword;

            var indexs = index_.getIndexReader().readIndex(keyword_);
            for (var idx in indexs) {
                pullRepository(indexs[idx]);
            }

            return new ResultSearch({
                totalHighlight: highlighter_.getTotalHighlight(),
                totalSentence: highlighter_.getTotalSentence(),
                content: repositoryResult_
            });
        };

        function pullRepository(index) {
            var indexArray = index.split(indexSeparator_);
            var repositoryPointer = repository_;
            var resultPointer = repositoryResult_;

            for (var idx in indexArray) {
                var position = indexArray[idx];

                if (empty(position)) {
                    break;
                }

                repositoryPointer = repositoryPointer.posts[position];
                var temp = resultPointer.posts[position];
                if (notDefined(temp)) {
                    temp = {
                        level: repositoryPointer.level,
                        index: repositoryPointer.index,
                        name: repositoryPointer.name,
                        link: repositoryPointer.link,
                        highlight: highlighter_.highlight(keyword_, repositoryPointer.name)
                    };

                    resultPointer.posts[position] = temp;
                }

                if (notDefined(temp.posts)) {
                    temp.posts = {};
                }

                resultPointer = temp;
            }
        }
    };
})();