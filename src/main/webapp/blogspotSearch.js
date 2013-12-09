(function(window, document) {
    var resourceJS = [
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/jquery.js',
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/additionalDictionaries.js',   
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/indexsearch.js',
        'https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/blogspotSearchController.js'
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
                if (index == 3) {
                    initController(getNsScriptAttribute('data-blogspot-url'));
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
})(window, document);