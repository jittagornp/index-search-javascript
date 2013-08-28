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

    function undefined(object) {
        return !defined(object);
    }

    function empty(list) {
        return undefined(list) || list.length === 0;
    }

    /**
     * class Collections
     *
     * utilities method for process collection
     */
    var Collections = {
        //
        empty: function(list) {
            return undefined(list) || list.length === 0;
        },
        //        
        findIndex: function(element, list) {
            if (typeof list === 'string') {
                element = element.toLowerCase();
                list = list.toLowerCase();
            }

            return list.indexOf(element);
        },
        //       
        foundIn: function(element, list) {
            if (typeof list === 'string') {
                element = element.toLowerCase();
                list = list.toLowerCase();
            }

            return list.indexOf(element) !== -1;
        },
        //      
        notFoundIn: function(element, list) {
            return !Collections.foundIn(element, list);
        }
    };

    /**
     * class StringUtils
     *
     * utilities method for process string
     */
    var StringUtils = {
        //
        escapseString: function(text) {
            text = text.replace(/&/g, '&amp;')
                    .replace(/>/g, '&gt;')
                    .replace(/</g, '&lt;')
                    .replace(/"/g, '&quot;');
            return text;
        },
        //
        replaceNotation: function(text) {
            if (undefined(text)) {
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
    };

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
            return '<span class=' + cssClass + '>' + StringUtils.escapseString(keyword) + '</span>';
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

            var index = Collections.findIndex(keyword, text);
            if (index === -1) {
                return highlightText;
            }

            totalSentence__ = totalSentence__ + 1;
            while (true) {
                totalHighlight__ = totalHighlight__ + 1;

                var lastIndex = index + keywordLength;
                var before = StringUtils.escapseString(text.substring(0, index));
                var center = highlightKeyword(text.substring(index, lastIndex));

                //concatenation 
                highlightText = highlightText + before + center;

                //re text
                text = text.substring(lastIndex);
                //
                index = Collections.findIndex(keyword, text);
                if (index === -1) {
                    highlightText = highlightText + StringUtils.escapseString(text);
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
        var indexs__ = [];
        for (var keySizeIndex = 1; keySizeIndex <= maximumKeySize; keySizeIndex++) {
            indexs__[keySizeIndex] = {};
        }

        var IndexWriter = function() {

            this.writeIndex = function(path, text) {
                if (undefined(text)) {
                    return;
                }

                for (var keySizeIndex in indexs__) {
                    for (var dictionryIndex in indexs__[keySizeIndex]) {
                        var keywordList = indexs__[keySizeIndex][dictionryIndex];

                        for (var keywordIndex in keywordList) {
                            var keyword = keywordList[keywordIndex];

                            if (Collections.foundIn(keywordIndex, text) && Collections.notFoundIn(path, keyword)) {
                                keyword.push(path);
                            }
                        }
                    }
                }
            };
        };

        var IndexReader = function() {

            this.readIndex = function() {

            };
        };

        var indexWriter__ = new IndexWriter();
        var indexReader__ = new IndexReader();

        this.addKeywordDictionary = function(keyword) {
            keyword = keyword.trim().toLowerCase();

            if (Collections.empty(keyword)) {
                return;
            }

            for (var keySizeIndex in indexs__) {
                if (keyword.length >= keySizeIndex) {
                    var dictionary = keyword.substring(0, keySizeIndex);
                    var dictionaryList = indexs__[keySizeIndex][dictionary];

                    if (undefined(dictionaryList)) {
                        indexs__[keySizeIndex][dictionary] = {};
                        dictionaryList = indexs__[keySizeIndex][dictionary];
                    }

                    if (undefined(dictionaryList[keyword])) {
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

    //======================== constructor =========================
    return function(repository, options) {
        if (undefined(repository)) {
            throw new Error('require first parameter is repository');
        }

        options = options || {};

        var highlighter_ = new Highlighter(options.highlightClass || 'highlighter');
        var index_ = new MemoryIndex(options.maximumIndexKeySize || 3);

        var pathSeparator_ = options.pathSeparator || '/';
        var repositoryResult_;
        var keyword_ = '';
        var duplicated = {};

        /**
         * function stopword
         * 
         * use for separate keyword from sentence
         */
        var stopword_ = options.stopword || function(text) {
            return StringUtils.replaceNotation(text).split(' ');
        };


        //----------------------------------------------------------
        createIndex();

        function createIndex() {
            walkRepositoryReadKeyword(repository);

            for (var index in repository.posts) {
                walkRepositoryWriteIndex(0, index, repository.posts[index]);
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

        function walkRepositoryWriteIndex(level, path, parentTopic) {
            if (undefined(duplicated[parentTopic.name])) {
                duplicated[parentTopic.name] = 0;
                index_.getIndexWriter().writeIndex(path, parentTopic.name);
            } else {
                duplicated[parentTopic.name] = duplicated[parentTopic.name] + 1;
            }

            parentTopic.level = 'level-' + level;
            parentTopic.path = path + '';
            var posts = parentTopic.posts;
            if (undefined(posts) || posts.length === 0) {
                return;
            }

            for (var topicIndex in posts) {
                var childTopic = posts[topicIndex];
                walkRepositoryWriteIndex(level + 1, path + pathSeparator_ + topicIndex, childTopic);
            }
        }

        this.reIndex = function(repo) {
            repository = repo;
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

        this.search = function(keyword) {
            if (empty(keyword)) {
                return new ResultSearch({
                    content: repository
                });
            }

            keyword = keyword.trim().toLowerCase();
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

            var dictionary = dictionary = index_.get(keyword_);
            for (var dictionaryIndex in dictionary) {
                if (Collections.foundIn(keyword_, dictionaryIndex)) {
                    for (var index in dictionary[dictionaryIndex]) {
                        var path = dictionary[dictionaryIndex][index];
                        pullRepository(path);
                    }
                }
            }

            return new ResultSearch({
                totalHighlight: highlighter_.getTotalHighlight(),
                totalSentence: highlighter_.getTotalSentence(),
                content: repositoryResult_
            });
        };

        function pullRepository(path) {
            var pathArray = path.split(pathSeparator_);
            var repositoryPointer = repository;
            var resultPointer = repositoryResult_;

            for (var pathIndex in pathArray) {
                var position = pathArray[pathIndex];

                if (empty(position)) {
                    break;
                }

                repositoryPointer = repositoryPointer.posts[position];
                var temp = resultPointer.posts[position];
                if (undefined(temp)) {
                    temp = {
                        level: repositoryPointer.level,
                        path: repositoryPointer.path,
                        name: repositoryPointer.name,
                        link: repositoryPointer.link,
                        highlight: highlighter_.highlight(keyword_, repositoryPointer.name)
                    };

                    resultPointer.posts[position] = temp;
                }

                if (undefined(temp.posts)) {
                    temp.posts = {};
                }

                resultPointer = temp;
            }
        }
    };
})();