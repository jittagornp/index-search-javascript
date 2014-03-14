(function(window, document) {
    function $(id) {
        return document.getElementById(id);
    }

    function getHeadElement() {
        return document.getElementsByTagName('head')[0];
    }

    function loadCss(cssUrl) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', cssUrl);
        link.setAttribute('class', 'ns-plugin-search-style');

        getHeadElement().appendChild(link);
    }

    loadCss('search-plugin.css');
    window.onload = function() {

        $('search').innerHTML = '<iframe id="nsPluginSearchIframe" src="javascript:true;"></iframe>';
        var iframeDocument = $('nsPluginSearchIframe').contentWindow.document;
        try {
            iframeDocument.open();
            var css = [
            ];

            var javascript = ['<script type="text/javascript" src="search-plugin-controller.js"></script>'];

            iframeDocument.write('<html><head>' + css.join('') + javascript.join('') + '</head><body><div id="nsPluginSearchBox"></div></body></html>');
        } finally {
            iframeDocument.close();
        }
    };
}).call(this, window, document);