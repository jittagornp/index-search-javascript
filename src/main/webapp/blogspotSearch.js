/**
 * blogspot search plugin
 * by index search javascript
 * code : https://github.com/jittagornp/index-search-javascript
 * 
 * @author jittagorn pitakmetagoon
 * create 10/12/2013
 * update 11/12/2013 protect laguages and additionalDictionaries is null
 */

(function(q,c,f){function a(a){var e=c.createElement("link");e.setAttribute("rel","stylesheet");e.setAttribute("href",a);c.getElementsByTagName("head")[0].appendChild(e)}function h(a,e){var d=c.createElement("script");d.type="text/javascript";d.onload=e;d.src=a;c.getElementsByTagName("head")[0].appendChild(d)}var l=["https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/jquery.js","https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/moment.js",
"https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/additionalDictionaries.js","https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/indexsearch-mini.js"],p=["https://rawgithub.com/jittagornp/index-search-javascript/master/src/main/webapp/blogspotSearch.css"];q.onload=function(){var b=c.getElementsByClassName("ns-blogsearch-script")[0],e=b.getAttribute("data-blogspot-url"),d=b.getAttribute("data-languages")?JSON.parse(b.getAttribute("data-languages")):
{},n=b.getAttribute("data-element-id"),g=b.getAttribute("data-additionalDictionaries")||[],b=['<input id="na5centSearchInput" placeholder="'+(d.PLACE_HOLDER||"search...")+'"/><button id="na5centClearButton">'+(d.CLEAR||"clear")+"</button>",'<div id="na5centResult">','<div id="na5centSummary"></div>','<div id="na5centSuggestions"></div>','<div id="na5centRepositories"></div>',"</div>"];c.getElementById(n).innerHTML=b.join("");for(var m in p)a(p[m]);for(m in l)h(l[m],function(){3==m&&f&&f(e,d,g,q.jQuery)})}})(window,
document,function(q,c,f,a){window.Blogger&&a&&Blogger.pullRepositoryFromBlog(q,function(h){function l(c){var d=a("<ul>");m.html(d);p(c,d)}function p(c,d){var e=c.nodes;if(e&&0!==e.length)for(var b in e){var k=e[b],g=a("<a>").attr("href",k.link).html(k.nameHighlight||k.name),f=k.newPost?a("<span>").text("New!").addClass("index-search-new-post"):"",l=a("<ol>"),g=a("<li>").attr("class",k.level).append(g).append(f).append(l);k.published&&g.attr("title",moment(k.published).format("MMMM Do YYYY, h:mm:ss a"));
d.append(g);p(k,l)}}var b={repository:h,indexOnFields:["name"],maximumIndexKeySize:5,additionalDictionaries:f&&0<f.length?f.split(","):window.additionalDictionaries},e=new IndexSearch(b),d=a("#na5centSearchInput"),b=a("#na5centClearButton"),n=a("#na5centSummary"),g=a("#na5centSuggestions"),m=a("#na5centRepositories");l(h);d.keyup(function(){var b=d.val(),f=e.search(b);n.text("").hide();0!==f.getTotalPosition()?n.append((c.SEARCH||"search")+" '").append(a("<span>").text(e.getKeyword()).addClass("summary-highlight")).append("' "+
(c.FOUND||"found")+" ").append(a("<span>").text(f.getTotalPosition()).addClass("summary-highlight")).append(" "+(c.POSITIONS||"positions on")+" ").append(a("<span>").text(f.getTotalSentence()).addClass("summary-highlight")).append(" "+(c.SENTENCES||"sentences.")).show():""!==b&&n.append((c.SEARCH||"search")+" '").append(a("<span>").text(e.getKeyword()).addClass("summary-highlight")).append("' "+(c.NOT_FOUND||"not found")).show();g.text("").hide();b=f.getSuggestions();if(0!==b.length){g.append((c.DO_YOU_MEAN||
"do you mean")+" ");for(var m in b){var h=b[m],k=h.highlight;0!=m&&g.append(", ");h=a("<a>").attr("href","#"+h.word).attr("data-suggest",h.word).html(k).click(function(b){b.preventDefault();d.val(a(this).attr("data-suggest")).keyup()});g.append(h)}g.append(" ").append("?").show()}l(f.getContent())});b.click(function(){d.val("");e.clear();n.text("");g.text("");l(h)})})});


