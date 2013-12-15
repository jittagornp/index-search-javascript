(function(window, document, controller) {
    var resourceJS = [
     
    ];

    var resourceStyle = [
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/blogspotSearch.css'
    ];

    window.onload = function() {
        //
        var na5centScript = document.getElementsByClassName('ns-blogsearch-script')[0];
        var blogspotURL = na5centScript.getAttribute('data-blogspot-url');
        var languages = na5centScript.getAttribute('data-languages') ? JSON.parse(na5centScript.getAttribute('data-languages')) : {};
        var targetElementId = na5centScript.getAttribute('data-element-id');
        var additionalDictionaries = na5centScript.getAttribute('data-additionalDictionaries') || [];
        var slideSearch = na5centScript.getAttribute('data-slide-search') || false;
        if (slideSearch == 'true') {
            resourceJS.push('https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/slideSearch.js');
            
            resourceStyle.push('https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/jscrollpane/jscrollpane.css');
            resourceStyle.push('https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/slideSearch.css');
        }

        var html = ['<div class="ns-plugin-search-scroll"><div class="ns-plugin-search-scroll-content"><div class="ns-plugin-search-box" style="display : none;"><input id="na5centSearchInput" placeholder="' + (languages.PLACE_HOLDER || 'search...') + '"/><button id="na5centClearButton">' + (languages.CLEAR || 'clear') + '</button>',
            '<div id="na5centResult">',
            '<div id="na5centSummary"></div>',
            '<div id="na5centSuggestions"></div>',
            '<div id="na5centRepositories"></div>',
            '</div></div></div><div class="ns-plugin-search-button"></div>'
        ];

        document.getElementById(targetElementId).innerHTML = html.join('');
        document.getElementById(targetElementId).className += 'ns-plugin-slide-search';

        for (var index in resourceStyle) {
            loadStyle(resourceStyle[index]);
        }

        for (var index in resourceJS) {
            loadScript(resourceJS[index], function() {
                if (index == (resourceJS.length - 1)) {
                    if (controller) {
                        controller(blogspotURL, languages, additionalDictionaries, window.jQuery);
                    }
                }
            });
        }
    };

    function getHeadElement() {
        return document.getElementsByTagName('head')[0];
    }

    function loadStyle(styleUrl) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', styleUrl);

        getHeadElement().appendChild(link);
    }

    function loadScript(jsURL, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = callback;
        script.src = jsURL;
        //script.async = false;

        getHeadElement().appendChild(script);
    }
})(window, document, function(blogspotURL, languages, additionalDictionaries, $) {
    if (!window.Blogger || !$) {
        return;
    }

    Blogger.pullRepositoryFromBlog(blogspotURL, function(repository) {
        var settings = {
            repository: repository, //require
            indexOnFields: ['name'], //require
            maximumIndexKeySize: 5,
            additionalDictionaries: (additionalDictionaries && additionalDictionaries.length > 0) ? additionalDictionaries.split(',') : window.additionalDictionaries
        };

        var indexSearch__ = new IndexSearch(settings);
        //====================================================================================


        var $searchInput = $('#na5centSearchInput');
        var $clearButton = $('#na5centClearButton');
        var $summary = $('#na5centSummary');
        var $suggestions = $('#na5centSuggestions');
        var $repositories = $('#na5centRepositories');
        $('.ns-plugin-search-box').show();

        showResult(repository);
        $searchInput.keyup(function() {
            var keyword = $searchInput.val();
            var result = indexSearch__.search(keyword);

            $summary.text('').hide();
            if (result.getTotalPosition() !== 0) {
                $summary.append((languages.SEARCH || 'search') + ' \'')
                        .append($('<span>').text(indexSearch__.getKeyword()).addClass('summary-highlight'))
                        .append('\' ' + (languages.FOUND || 'found') + ' ')
                        .append($('<span>').text(result.getTotalPosition()).addClass('summary-highlight'))
                        .append(' ' + (languages.POSITIONS || 'positions on') + ' ')
                        .append($('<span>').text(result.getTotalSentence()).addClass('summary-highlight'))
                        .append(' ' + (languages.SENTENCES || 'sentences.'))
                        .show();
            } else if (keyword !== '') {
                $summary.append((languages.SEARCH || 'search') + ' \'')
                        .append($('<span>').text(indexSearch__.getKeyword()).addClass('summary-highlight'))
                        .append('\' ' + (languages.NOT_FOUND || 'not found'))
                        .show();
            }


            $suggestions.text('').hide();
            var suggestions = result.getSuggestions();
            if (suggestions.length !== 0) {
                $suggestions.append((languages.DO_YOU_MEAN || 'do you mean') + ' ');
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
            indexSearch__.clear();
            $summary.text('');
            $suggestions.text('');
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
                var $newPost = childNode.newPost ? $('<span>').text('New!').addClass('index-search-new-post') : '';
                var $childDOM = $('<ol>');
                var $list = $('<li>').attr('class', childNode.level)
                        .append($childLink)
                        .append($newPost)
                        .append($childDOM);

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
    });
});
