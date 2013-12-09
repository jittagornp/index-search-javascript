(function(window, document, startUp) {
    var resourceJS = [
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/jquery.js',
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/indexsearch.js',
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/additionalDictionaries.js'
    ];

    var resourceStyle = [
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/blogspotSearch.css'
    ];

    window.onload = function() {
        var html = ['<input id="searchInput"/><button id="clearButton">clear</button>',
            '<div id="result">',
            '<div id="summary"></div>',
            '<div id="suggestions"></div>',
            '<div id="repositories"></div>',
            '</div>'
        ];

        var blogElement = getNsScriptAttribute('data-element-id');
        document.getElementById(blogElement).innerHTML = html.join('');

        for (var index in resourceStyle) {
            loadStyle(resourceStyle[index]);
        }

        for (var index in resourceJS) {
            loadScript(resourceJS[index], function() {
                if (index == 1) {
                    startUp(getNsScriptAttribute('data-blogspot-url'));
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

        getHeadElement().appendChild(script);
    }

    function getNsScriptAttribute(attributeName) {
        return document.getElementsByClassName('ns-blogsearch-script')[0].getAttribute(attributeName);
    }
})(window, document, function(blogspotURL) {
    Blogger.pullRepositoryFromBlog(blogspotURL, function(repository) {
        var settings = {
            repository: repository, //require
            indexOnFields: ['name'], //require
            maximumIndexKeySize: 5,
            additionalDictionaries: additionalDictionaries
        };

        var indexSearch__ = new IndexSearch(settings);
        //====================================================================================


        var $searchInput = $('#searchInput');
        var $clearButton = $('#clearButton');
        var $summary = $('#summary');
        var $suggestions = $('#suggestions');
        var $repositories = $('#repositories');

        showResult(repository);
        $searchInput.keyup(function() {
            var keyword = $searchInput.val();
            var result = indexSearch__.search(keyword);

            $summary.text('');
            if (result.getTotalPosition() !== 0) {
                $summary.append('search \'')
                        .append($('<span>').text(indexSearch__.getKeyword()).addClass('summary-highlight'))
                        .append('\' found ')
                        .append($('<span>').text(result.getTotalPosition()).addClass('summary-highlight'))
                        .append(' positions on ')
                        .append($('<span>').text(result.getTotalSentence()).addClass('summary-highlight'))
                        .append(' sentances.');
            } else if (keyword !== '') {
                $summary.append('search \'')
                        .append($('<span>').text(indexSearch__.getKeyword()).addClass('summary-highlight'))
                        .append('\' not found.');
            }


            $suggestions.text('');
            var suggestions = result.getSuggestions();
            if (suggestions.length !== 0) {
                $suggestions.append('do you mean ');
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

                $suggestions.append(' ').append('?');
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
                    //$list.attr('title', dateFormat(childNode.published));
                }

                $parentDOM.append($list);

                walkRepositoryShowResult(childNode, $childDOM);
            }
        }
    });
});