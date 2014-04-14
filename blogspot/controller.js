(function(window, document, controller) {
    var SOURCE_ORIGIN = 'https://rawgithub.com/jittagornp/index-search-javascript/master/blogspot/';

    var resourceJS = [
        //
    ];

    var resourceStyle = [
        SOURCE_ORIGIN + 'blogspot.css?time=1'
    ];

    function forEachArray(array, callback, context_opt) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            var value = callback.call(context_opt, array[i], i, array, length);
            if (value === false) {
                return false;
            }
        }

        return true;
    }

    window.addEventListener('load', function() {
        //
        var jscript = getSearchScript();

        var blogspotURL = jscript.getAttribute('data-blogspot-url');
        var langs = jscript.getAttribute('data-languages');
        langs = langs ? JSON.parse(langs) : {};

        var localeName = jscript.getAttribute('data-locale') || 'en';
        var localeObj = __searchPluginLocale__[localeName];
        if (!localeObj) {
            alert('Not support locale (data-locale) "' + localeName + '"');
        }

        var elementId = jscript.getAttribute('data-element-id');
        var adDics = jscript.getAttribute('data-additionalDictionaries') || [];
        var isSlide = jscript.getAttribute('data-slide-search');
        if (!isSlide) {
            isSlide = 'true';
        }

        var theme = jscript.getAttribute('data-theme') || 'facebook'; //default
        if (Boolean(isSlide)) {
            resourceJS.push(SOURCE_ORIGIN + 'slide.js');

            resourceStyle.push(SOURCE_ORIGIN + 'jscrollpane/jscrollpane.css');
            resourceStyle.push(SOURCE_ORIGIN + 'slide.css');
            resourceStyle.push(SOURCE_ORIGIN + 'theme/' + theme + '/css/default.css?time=2');
        }

        var html = [
            '<div class="ns-plugin-search-scroll">',
            /**/'<div class="ns-plugin-search-scroll-content">',
            /******/'<div class="ns-plugin-search-box" style="display : none;">',
            /**********/'<input class="ns-plugin-search-input" placeholder="' + (langs.PLACE_HOLDER || localeObj.PLACE_HOLDER) + '"/>',
            /**********/'<button class="ns-plugin-search-clear-button">' + (langs.CLEAR || localeObj.CLEAR) + '</button>',
            /**********/'<div class="ns-plugin-search-result">',
            /**************/'<div class="ns-plugin-search-summary"></div>',
            /**************/'<div class="ns-plugin-search-suggestions"></div>',
            /**************/'<div class="ns-plugin-search-repositories"></div>',
            /**********/'</div>',
            /******/'</div>',
            /**/'</div>',
            '</div>',
            '<div class="ns-plugin-search-button" title="' + (langs.SEARCH_BUTTON_TITLE || localeObj.SEARCH_BUTTON_TITLE) + '">',
            '</div>'
        ];

        findById(elementId).innerHTML = html.join('');
        findById(elementId).className += 'ns-plugin-slide-search ns-plugin-theme-' + theme;

        forEachArray(resourceStyle, function(css) {
            loadStyle(css);
        });

        var searchContext = {
            url: blogspotURL,
            languages: langs,
            locale: {
                name: localeName,
                lang: localeObj,
                dictionaries: adDics
            }
        };

        if (resourceJS.length === 0) {
            controller && controller(searchContext, window.jQuery);
            return;
        }

        forEachArray(resourceJS, function(js, index, array, size) {
            var isLastest = index === (size - 1);
            loadScript(js, function() {
                isLastest && controller && controller(searchContext, window.jQuery);
            });
        });
    });

    function findById(id) {
        return document.getElementById(id);
    }

    function getSearchScript() {
        document.querySelectorAll('.ns-blogsearch-script')[0];
    }

    function getHeadElement() {
        return document.getElementsByTagName('head')[0];
    }

    function loadStyle(styleUrl) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', styleUrl);
        getHeadElement().appendChild(link);
    }

    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = callback;
        script.onreadystatechange = function() {
            if (this.readyState === "loaded" || this.readyState === "complete") {
                callback.apply(this);
            }
        };

        script.src = url;
        getHeadElement().appendChild(script);
    }
})(window, document, function(context, $) {
    if (!window.Blogger || !$) {
        return;
    }

    Blogger.pullRepositoryFromBlog(context.url, function(repository) {
        /**/
        var hasDictionary = context.dictionary && context.dictionary.length > 0;
        var settings = {
            repository: repository, //require
            indexOnFields: ['name'], //require
            maximumIndexKeySize: 5,
            additionalDictionaries: hasDictionary ? context.dictionary.split(',') : window.additionalDictionaries
        };

        var indexSearch = new IndexSearch(settings);
        //====================================================================================


        var $searchInput = $('.ns-plugin-search-input');
        var $clearButton = $('.ns-plugin-search-clear-button');
        var $summary = $('.ns-plugin-search-summary');
        var $suggestions = $('.ns-plugin-search-suggestions');
        var $repositories = $('.ns-plugin-search-repositories');
        $('.ns-plugin-search-box').show();

        showResult(repository);
        $searchInput.keyup(function() {
            var keyword = $searchInput.val();
            var result = indexSearch.search(keyword);

            $summary.text('').hide();
            if (result.getTotalPosition() !== 0) {
                $summary.append((context.languages.SEARCH || context.locale.lange.SEARCH) + ' \'')
                        .append($('<span>').text(indexSearch.getKeyword()).addClass('summary-highlight'))
                        .append('\' ' + (context.languages.FOUND || context.locale.lange.FOUND) + ' ')
                        .append($('<span>').text(result.getTotalPosition()).addClass('summary-highlight'))
                        .append(' ' + (context.languages.POSITIONS || context.locale.lange.POSITIONS) + ' ')
                        .append($('<span>').text(result.getTotalSentence()).addClass('summary-highlight'))
                        .append(' ' + (context.languages.SENTENCES || context.locale.lange.SENTENCES))
                        .show();
            } else if (keyword !== '') {
                $summary.append((context.languages.SEARCH || context.locale.lange.SEARCH) + ' \'')
                        .append($('<span>').text(indexSearch.getKeyword()).addClass('summary-highlight'))
                        .append('\' ' + (context.languages.NOT_FOUND || context.locale.lange.NOT_FOUND))
                        .show();
            }


            $suggestions.text('').hide();
            var suggestions = result.getSuggestions();
            if (suggestions.length !== 0) {
                $suggestions.append((context.languages.DO_YOU_MEAN || context.locale.lange.DO_YOU_MEAN) + ' ');
                for (var suggestIndex in suggestions) {
                    var suggest = suggestions[suggestIndex];
                    var highlight = suggest.highlight;

                    if (suggestIndex != 0) {
                        $suggestions.append(', ');
                    }

                    var $suggestItem = $('<a>').attr('href', '#' + suggest.word)
                            .attr('data-suggest', suggest.word)
                            .html(highlight)
                            .click(function(event) {
                                event.preventDefault();
                                $searchInput.val($(this).attr('data-suggest')).keyup();
                            });

                    $suggestions.append($suggestItem);
                }

                $suggestions.append(' ').append('?').show();
            }

            showResult(result.getContent());
        });

        $clearButton.click(function() {
            $searchInput.val('');
            indexSearch.clear();
            $summary.text('').hide();
            $suggestions.text('').hide();
            showResult(repository);
        });

        function showResult(rootNode) {
            var $rootDOM = $('<ul>');
            $repositories.html($rootDOM);
            walkRepositoryShowResult(rootNode, $rootDOM);
        }

        function walkRepositoryShowResult(parentNode, $parentDOM) {
            var nodes = parentNode.nodes;
            if (!nodes || nodes.length === 0) {
                return;
            }

            for (var index in nodes) {
                var childNode = nodes[index];
                var $childLink = $('<a>').attr('href', childNode.link).html(childNode.nameHighlight || childNode.name);
                var $newPost = childNode.newPost ? $('<span>').text(context.locale.lange.NEW + '!').addClass('index-search-new-post') : '';
                var $childDOM = $('<ol>');
                var $list = $('<li>').attr('class', childNode.level)
                        .append($childLink)
                        .append($newPost);

                if (childNode.nodes && childNode.nodes.length > 0) {
                    $list.append($childDOM);
                }

                if (childNode.published) {
                    $list.attr('title', dateFormat(childNode.published));
                }

                $parentDOM.append($list);

                walkRepositoryShowResult(childNode, $childDOM);
            }
        }

        function dateFormat(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        }

        $('.ns-plugin-search-scroll-content').append('<div class="ns-plugin-search-about">Search plugin by <a target="_blank" href="http://search-plugin.blogspot.com/">search-plugin.blogspot.com</a></div>');
    });
});