index-search-javascript
=======================

for search repositories tree<br/>
<h3>Example to use</h3>
1) <b>define repositories</b> or data for searching<br/>
node pattern
```js
var node = {
    
    //custom your attribute...
    
    nodes : [ ] //require this attribute    
};
note : you can define repository as tree that you want
```
repositories.js
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
        /* algorithm */
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



