index-search-javascript
=======================

for search repositories tree<br/>
<h3>How to use</h3>
<b> 1) define repositories or data for searching</b><br/>
node pattern
```js
var node = {
    
    //custom your attributes...
    
    nodes : [ ] //require this attribute    
};
```
note : you can define repository as tree that you want<br/><br/>
example : repositories.js
```js
var node = {
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
<b>2) create IndexSearch instance and set require settings</b>
```js
var settings = {
	repository: repository, //require
	indexOnFields: ['name'], //require
	maximumIndexKeySize: 5,
	additionalDictionaries: additionalDictionaries
};

var indexSearch__ = new IndexSearch(settings);
```


