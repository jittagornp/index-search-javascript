index-search-javascript
=======================

for search repositories tree by index search methodology.<br/><br/>
<b>Demo</b> : left slide search on the web site http://search-plugin.blogspot.com/ <br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="http://1.bp.blogspot.com/-U9y8IUerUu0/UiEklzrzrqI/AAAAAAAAGTE/XbvXBGGZC2A/s640/8-31-2013+5-58-09+AM.png"/>
<h3>How it work</h3>

<b>indexing</b><br/>

1. when page loaded.
2. <i>IndexSearch</i> will bring your information to create an index then keep into <i>IndexStore</i>, by default is <i>InMemoryIndexStore</i>.
3. which it will separate keywords from sentence that you needed make an index (you can define by yourself), 
by default use the white space for separate keywords (you can custom it).
4. it will create dictionary from separate keywords of 3. for keep position of sentence.
5. put position of sentence into dictionary, which called <i>index</i>.

<b>searching</b><br/>

1. when you type a keyword into input box. 
2. <i>IndexSearch</i> will find dictionary in <i>IndexStore</i> follow you typed.
3. then get index list of that dictionary. 
4. next, it will retrieve information by index position that it found. 
5. then show results.


<h3>How to use</h3>
1) <b>define repositories or information for searching</b><br/>

node pattern
```js
var node = {
    
    //custom your attributes...
    
    nodes : [] //require this attribute    
};
```
example : repositories.js
```js
var rootNode = {
    nodes: [
        {
            name: "AI(Artificial Intelligence)", //custom your attribute
            link: "http://na5cent.blogspot.com/search/label/AI%28Artificial%20Intelligence%29", //custom your attribute
            nodes: [ 
                {
                    name: "Back Propagation Algorithm",
                    link: "http://na5cent.blogspot.com/2011/03/back-propagation-algorithm.html",
                    nodes:[
                        {
                            name: "how to train an algorithm",
                            link: "http://na5cent.blogspot.com/2011/05/how-to-train-an-algorithm.html"
                        }
                    ]
                }
            ]
        },
        {
            name: "algorithm",
            link: "http://na5cent.blogspot.com/search/label/algorithm",
            nodes: [
                {
                    name: "การคำนวณระยะห่าง ของตำแหน่ง GPS 2 จุด (javaScript)",
                    link: "http://na5cent.blogspot.com/2011/07/gps-2-javascript.html"
                },
                {
                    name: "mysql search around [Haversine formula algorithm (finding locations nearby)]",
                    link: "http://na5cent.blogspot.com/2012/03/mysql-search-around-algorithm-finding.html"
                }
            ]
        },
        
        ...
        ...
        ...
}
```
2) <b>create <i>IndexSearch</i> instance and set require <i>settings</i></b>

```js
var settings = {
	repository: rootNode, //require
	indexOnFields: ['name'], //require
	maximumDictionaryKeySize: 5, 
	additionalDictionaries: additionalDictionaries,
	//indexSeparator : default is '/'
	//indexStore : instance of class which implement an interface IndexStore,
	//postfixFieldNameHighlight : defualt is 'Highlight',
	//percentSuggest : default is 60,
	//suggestionsSize : default is 10,
	//highlightClass : default is 'keyword-highlgiht', css class for html highlight,
	//stopword : function(sentence){  by default use white space for stop word 
	//    return array of keyword such as 
	//    sentence = 'which implement an interface IndexStore' --> ['which', 'implement', 'an', 'interface', 'IndexStore']	
	//}
};

var indexSearch__ = new IndexSearch(settings);
```
<b>settings attribute</b>:<br/>
- <i>repository</i> (require) : the repository that you define following above example.

- <i>indexOnFields</i> (require) : an array of strings for tell <i>IndexSearch</i> that you need make an index on the field name in your node.

- <i>maximumDictionaryKeySize</i> (optional) : default is 3, for define key size of dictionary. following above example define is 5, if keyword your as 'javascript'
<i>IndexSearch</i> will create dictionary 5 patterns are 'j' 'ja' 'jav', 'java' and 'javas' for keep an index.

- <i>additionalDictionaries</i> (optional) : an array of strings for add additional keywords from external into dictionary. 
you can define following as : <br/>

```js
﻿var additionalDictionaries = [
    'circle',
    'system',
    'time',
    'problem',
    'level',
    'share',
    'plus',
    'additional'
];
```
- <i>indexSeparator</i> (optionary) : notation for separate an index level like path file system, default is '/'. 

```js
{
    ...
    /*
        pattern for keep an index
        dictionary keyword : [array of index which are the position of keyword, default pattern is 'node-level-0/node-level1/node-level2/..' ]
    */
    
    java : ['1/2', '1/3', '4/16/2', '30/1', ...],
    javasc : ['4/2', '4/5', '4/10/1', ...]
    javase : ['5/15', '5/20', '6/5', '6/10', ...]
    
    ...
}
```
- <i>indexStore</i> (optional) : store for keep an index, default is <i>InMemeryIndexStore</i><br/>
you can custom your index store by implement an interface <i>IndexStore</i> which define the following methods :

```js
/**
 * define IndexStore interface
 */
var IndexStore = new Interface('IndexStore', ['writeIndex', 'readIndex', 'addDictionary', 'getDictionary', 'getIndexs']);


var MyIndexStore = function(maximumDictionaryKeySize){

    var indexs__ = [];
    
    this.writeIndex = function(index, sentence){
    
    };
    
    this.readIndex = function(keyword){
        var indexList = [];
    
        //...
         
        return indexList;
    };
    
    this.addDictionary = function(){
    
    };
    
    this.getDictionary = function(keyword) {
        var dictionary = {};
        
        //...
        
        return dictionary;
    };
    
    this.getIndexs = function(){
    	return indexs__;
    }
};
```
- <i>postfixFieldNameHighlight</i> (optional) : postfix of highlight field name which you make an index, default is 'Highlight'.
such as you need make index on the field 'name', 
when search you will see field 'nameHighligh' (by default) which is html highlight of 'name'.

- <i>percentSuggest</i> (optional) : default is 60 percent, for tell <i>IndexSearch</i> when search not found, 
<i>IndexSearch</i> will find another suggest keywords which same the keyword search following <i>percentSuggest</i>.
such as you search for 'java2' but not found this keyword in dictionary, it's will find another keywords which same 'java2', 
result is 'java' because 'java' same 'java2' 75% > 60%(by default).
algorithm for compute the same percent of 2 strings can see in http://na5cent.blogspot.com/2013/02/algorithm-for-find-difference.html. 

- <i>suggestionsSize</i> (optinal) : number of suggest keywords, default is 10 keywords.

- <i>highlightClass</i> (optional) : css class for keyword highlight, default is 'keyword-highlight'.

- <i>stopword</i> (optional) : the function for separate keyword from sentence. by default use white space for stop word.  

3) <b>search</b>
```js
var result = indexSearch__.search(keyword);
```
4) <b>get result</b>
```js
var keyword = indexSearch__.getKeyword();

//number of keyword that found in resullt search
var totalPostitionKeywordFound = result.getTotalPosition();

//number of sentence or field name an inexing
var totalSentenceKeywordFound = result.getTotalSentence();

//result search repository
var resultRepository = result.getContent();
```
5) <b>show result</b>
```js
showResult(resultRepository);

//use jquery for process DOM
function showResult(rootNode) {
	var $rootDOM = $('<ul>');
	$repositories.html($rootDOM);
	walkRepositoryShowResult(rootNode, $rootDOM);
}

//recursive walk repository (node)
function walkRepositoryShowResult(parentNode, $parentDOM) {
	var nodes = parentNode.nodes;
	if (!nodes || nodes.length === 0) {
		return;
	}

	for (var index in nodes) {
		//get current node
		var childNode = nodes[index];
		
		var $link = $('<a>').attr('href', childNode.link).html(childNode.nameHighlight || childNode.name);
		var $childDOM = $('<ol>');
		var $list = $('<li>').attr('class', childNode.level).append($link).append($childDOM);
		$parentDOM.append($list);

		walkRepositoryShowResult(childNode, $childDOM);
	}
}
```
6) <b>show search summary</b>
```js
$summary.text('');
if (result.getTotalPosition() !== 0) {
	$summary.append('result search \'')
			.append($('<span>').text(indexSearch__.getKeyword()).attr('class', 'summary-highlight'))
			.append('\' found ')
			.append($('<span>').text(result.getTotalPosition()).attr('class', 'summary-highlight'))
			.append(' positions on ')
			.append($('<span>').text(result.getTotalSentence()).attr('class', 'summary-highlight'))
			.append(' sentences.');
} else if (keyword !== '') {
	$summary.append('result search \'')
			.append($('<span>').text(indexSearch__.getKeyword()).attr('class', 'summary-highlight'))
			.append('\' not found.');
}
```
7) <b>get and show suggestions</b>
```js
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

}
```

<b>full code html</b>
```html
﻿<html>
    <head>
        <style>
            .keyword-highlight{
                color : red;
            }

            .level-0 > a{
                font-weight: bold; 
            }

            .summary-highlight{
                color : red;
            }
        </style>
    </head>
    <body>
    
        <!--
            example code for use IndexSearch.js
        
            author : redcrow (jittagorn pitakmetagoon) developer Thailand
            website : na5cent.blogspot.com
            create : 26/08/2013
        -->
        
        <script src="jquery.js"></script>
        <script src="repository.js"></script>
        <script src="additionalDictionaries.js"></script>
        <script src="indexsearch.js"></script>
        <script>
            (function($, repository) {
                $(function() {
                    //==========================================================
                    var indexSearch__ = new IndexSearch({
                        repository: repository, //require
                        indexOnFields: ['name'], //require
                        maximumIndexKeySize: 5,
                        additionalDictionaries: additionalDictionaries
                    });
                    //==========================================================

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
                                    .append($('<span>').text(indexSearch__.getKeyword()).attr('class', 'summary-highlight'))
                                    .append('\' found ')
                                    .append($('<span>').text(result.getTotalPosition()).attr('class', 'summary-highlight'))
                                    .append(' positions on ')
                                    .append($('<span>').text(result.getTotalSentence()).attr('class', 'summary-highlight'))
                                    .append(' sentences.');
                        } else if (keyword !== '') {
                            $summary.append('search \'')
                                    .append($('<span>').text(indexSearch__.getKeyword()).attr('class', 'summary-highlight'))
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
                            var $link = $('<a>').attr('href', childNode.link).html(childNode.nameHighlight || childNode.name);
                            var $childDOM = $('<ol>');
                            var $list = $('<li>').attr('class', childNode.level).append($link).append($childDOM);
                            $parentDOM.append($list);

                            walkRepositoryShowResult(childNode, $childDOM);
                        }
                    }
                });
            })(jQuery, node);
        </script>

        <input id="searchInput"/><button id="clearButton">clear</button>
        <div id="result">
            <div id="summary"></div>
            <div id="suggestions"></div>
            <div id="repositories"></div>
        </div>
    </body>
</html>
```		

<h1>Google Blog Search plug-in</h1>
when you use this library with google blog (blogspot.com) you don't need define repository by yourself.
you can use <i>Blogger</i> class for pull repository from target blog.
<h3>Example</h3>

```js
Blogger.pullRepositoryFromBlog('http://na5cent.blogspot.com', function(repository) {

	var settings = {
		repository: repository, //repository from blogger
		
		...
		...
		...
	};

	var indexSearch__ = new IndexSearch(settings);
});	
```
<h3>Easy to use</h3>
insert this code into your blogspot and change parameters<br/>
<i>{string}</i> <b>blogspotURL</b> (require) - url of your blogspot<br/>
<i>{string}</i> <b>targetElementId</b> (require) - target html element id for search box<br/>
<i>{object}</i> <b>languages</b> - language for show in search box<br/>
<i>{array}</i> <b>additionalDictionaries</b> - additional keywords from external<br/><br/>
<i>{boolean}</i> <b>slideSearch</b> - if is "true" enable left slide search<br/><br/>
<b>basic</b><br/>
html
```html
<script async 
        type="text/javascript" 
        data-blogspot-url="http://na5cent.blogspot.com" 
        data-element-id="mySearch"
        data-slide-search="true"
        class="ns-blogsearch-script"   
        src="https://rawgithub.com/jittagornp/index-search-javascript/master/blogspot/blogspot.js">
</script>
```
javascript
```js
/**
 * blogspot search plugin
 * by index methodology
 * url : https://github.com/jittagornp/index-search-javascript
 * 
 * @author jittagorn pitakmetagoon
 * create 10/12/2013
 */
(function(document, settings) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('class', 'ns-blogsearch-script');
    script.setAttribute('data-blogspot-url', settings.blogspotURL);
    script.setAttribute('data-element-id', settings.targetElementId);
    script.setAttribute('data-slide-search', settings.slideSearch);
    script.async = true;
 
    script.src = 'https://rawgithub.com/jittagornp/index-search-javascript/master/blogspot/blogspot.js';
    document.getElementsByTagName('head')[0].appendChild(script);
})(document, {
    //settings
    blogspotURL: 'http://na5cent.blogspot.com', //url of your blogspot
    targetElementId: 'mySearch', //target html element id for search box
    slideSearch : true //for make left slide search
});
```
<b>additional</b>
```js
/**
 * blogspot search plugin
 * by index search methodology
 * url : https://github.com/jittagornp/index-search-javascript
 * 
 * @author jittagorn pitakmetagoon
 * create 10/12/2013
 */
(function(document, JSON, settings) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('class', 'ns-blogsearch-script');
    script.setAttribute('data-blogspot-url', settings.blogspotURL);
    script.setAttribute('data-element-id', settings.targetElementId);
    script.setAttribute('data-languages', JSON.stringify(settings.languages || {}));
    script.setAttribute('data-additionalDictionaries', (settings.additionalDictionaries || []).join(','));
    script.setAttribute('data-slide-search', settings.slideSearch);
    script.async = true;

    script.src = 'https://rawgithub.com/jittagornp/index-search-javascript/master/blogspot/blogspot.js';
    document.getElementsByTagName('head')[0].appendChild(script);
})(document, JSON, {
    //settings
    blogspotURL: 'http://na5cent.blogspot.com', //url of your blogspot
    targetElementId: 'mySearch', //target html element id for search box
    slideSearch : true, //for make left slide search
    languages: {//language for show in search box
        SEARCH: 'search',
        FOUND: 'found',
        NOT_FOUND: 'not found',
        POSITIONS: 'positions on',
        SENTENCES: 'sentences',
        DO_YOU_MEAN: 'do you mean',
        CLEAR: 'clear',
        PLACE_HOLDER : 'search...'
    },
    additionalDictionaries : [
	//array of string (keywords)
    ]
});
```
