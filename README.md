index-search-javascript
=======================

for search repositories tree by index search methodology.<br/><br/>
<b>Demo</b> : left slide search on this web site http://na5cent.blogspot.com/
<h3>How to use</h3>
1) <b>define repositories or data for searching</b><br/>

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
2) <b>create IndexSearch instance and set require settings</b>

```js
var settings = {
	repository: rootNode, //require
	indexOnFields: ['name'], //require
	maximumDictionaryKeySize: 5, 
	additionalDictionaries: additionalDictionaries,
	//indexStore : instance on class which implement interface IndexStore,
	//postfixFieldNameHighlight : defualt is 'Highlight',
	//percentSuggest : default is 60,
	//suggestionsSize : default is 10,
	//highlightClass : default is 'keyword-highlgiht', css class for html highlight,
	//stopword : function(sentence){  by default use white space for stop word 
	//    return array of keyword	
	//}
};

var indexSearch__ = new IndexSearch(settings);
```
<b>settings attribute</b>:<br/>
- <i>repository</i> (require) : the repository that you define following above example.

- <i>indexOnFields</i> (require) : an array of string for tell IndexSearch that you need make index on the field name in your node.

- <i>maximumDictionaryKeySize</i> (optional) : default is 3, for define key size of dictionary. following above example define is 5<br/> if keyword you as 'javascript'
IndexSearch will create dictionary 5 patterns are 'j', 'ja', 'jav', 'java', 'javas'

- <i>additionalDictionaries</i> (optional) : an arry of string for add additional keywords from external into dictionary
<br/>you can define following as : <br/>

```js
﻿var additionalDictionaries = [
    'หลาย',
    'ดูแล',
    'ระยะ',
    'วงกลม',
    'ปัญหา',
    'ระดับ',
    'แชร์',
    'เหมาะ'
];
```
- <i>indexStore</i> (optional) : store for keeping an index, default is MemeryIndexStore<br/>
you can custom your index store by implement an interface IndexStore which define following method :

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
- <i>postfixFieldNameHighlight</i> (optional) : postfix of highlight field name which you make an index.
such as you need make index on field 'name', 
when you search you will see field 'nameHighligh' (by default) which is html highlight of 'name'

- <i>percentSuggest</i> (optional) : default is 60 percent, for tell IndexSearch when you search not found, 
IndexSearch will find other keyword suggestions which same the keyword search following percentSuggest.
such as you search 'java2' but not found this keyword in dictionary, it's will find other keyword which same 'java2', 
result is 'java' because 'java' same 'java2' 75% > 60%(by default).
algorithm for compute the same percent of 2 strings can see in http://na5cent.blogspot.com/2013/02/algorithm-for-find-difference.html. 

- <i>suggestionsSize</i> (optinal) : number of suggestion keyword, default is 10 keywords 

- <i>highlightClass</i> (optional) : default is 'keyword-highlight', is css class for keyword highlight

- <i>stopword</i> (optional) : is the function for separate keyword from sentence. by default use white space for stop word.  

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
6) show search detail
```js
$summary.text('');
if (result.getTotalPosition() !== 0) {
	$summary.append('ผลลัพธ์จากการค้นหา \'')
			.append($('<span>').text(indexSearch__.getKeyword()).attr('class', 'detail-search-highlight'))
			.append('\' พบ ')
			.append($('<span>').text(result.getTotalPosition()).attr('class', 'detail-search-highlight'))
			.append(' ตำแหน่ง บน ')
			.append($('<span>').text(result.getTotalSentence()).attr('class', 'detail-search-highlight'))
			.append(' ประโยค.');
} else if (keyword !== '') {
	$summary.append('ผลลัพธ์จากการค้นหา \'')
			.append($('<span>').text(indexSearch__.getKeyword()).attr('class', 'detail-search-highlight'))
			.append('\' ไม่พบข้อมูล');
}
```
7) <b>get and show suggestions</b>
```js
$suggestions.text('');
var suggestions = result.getSuggestions();

if (suggestions.length !== 0) {
	$suggestions.append('คุณอาจหมายถึง ');
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
