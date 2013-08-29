index-search-javascript
=======================

for search repositories tree by index search methodology.<br/>
<h3>How to use</h3>
1) <b>define repositories or data for searching</b><br/>

node pattern
```js
var node = {
    
    //custom your attributes...
    
    nodes : [ ] //require this attribute    
};
```
example : repositories.js
```js
var rootNode = {
    nodes: [
        {
            name: "AI(Artificial Intelligence)",
            link: "http://na5cent.blogspot.com/search/label/AI%28Artificial%20Intelligence%29",
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
	//postfixFieldNameHighlight : defualt is 'Highlight'
};

var indexSearch__ = new IndexSearch(settings);
```
<b>settings attribute</b>:<br/>
- <i>repository</i> (require) : the repository that you define following above example (topic 1).
- <i>indexOnFields</i> (require) : an array of string for tell IndexSearch that you need make index on the field name in your node.
- <i>maximumDictionaryKeySize</i> (optional) : default is 3, for define key size of dictionary, following above example define is 5<br/> if keyword you as 'javascript'
IndexSearch will create dictionary 5 pattern is 'j', 'ja', 'jav', 'java', 'javas'
- <i>additionalDictionaries</i> (optional) : an arry of string for add additional keyword from external into dictionary
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
- <i>indexStore</i> (optional) : store of keeping an index, default is MemeryIndexStore<br/>
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
- <i>postfixFieldNameHighlight</i> (optional) : postfix of highlight field name which you make index,
such as you need index on field 'name', 
when you search you will see field 'nameHighligh' (by default) which is html highlight of 'name'

