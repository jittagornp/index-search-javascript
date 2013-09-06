/**
 * IndexSearch.js
 *
 * author     -->  redcrow (jittagorn pitakmetagoon)
 * create on  -->  26/08/2013
 * website    -->  na5cent.blogspot.com
 * version    -->  1.0
 * 
 * License    ---> Apache License
 * Version 2.0, January 2004 (http://www.apache.org/licenses/LICENSE-2.0)
 */

window.IndexSearch=window.IndexSearch||function(){function e(a){return f(a)||0===a.length}function m(a,b){s(b,"String")&&(a=a.toLowerCase(),b=b.toLowerCase());return b.indexOf(a)}function p(a){return a=a.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function s(a,b){return Object.prototype.toString.call(a)==="[object "+b+"]"}function f(a){return s(a,"Undefined")}function t(a){var b=0,c;for(c in a)b+=1;return b}function k(a){var b=parseFloat(a),c=parseInt(a);
return 0===b-c?c:(new Number(a)).toFixed(2)}var q=function(){function a(a,b){if(!s(a,"String"))throw Error("constructor of Interface class require first argument is 'string', but is '"+typeof a+"'.");if(!s(b,"Array"))throw Error("constructor of Interface class require second argument is 'array of string', but is '"+typeof b+"'.");}function b(a,b){if(!s(a,"String"))throw Error("constructor of Interface class require second argument is 'array of string', but method index "+b+" is not 'string', is '"+
typeof a+"'.");return a}return function(c,l){if(2!==arguments.length)throw Error("constructor of Interface class require 2 arguments : Interface({string} name, {string[]} method names");a(c,l);for(var h=[],d=0;d<l.length;d++){var g=b(l[d],d);h.push(g)}this.getName=function(){return c};this.getMethods=function(){return h}}}();q.ensureImplements=function(a,b){if(2!==arguments.length)throw Error("Interface.ensureImplements require 2 arguments : Interface.ensureImplement({object} obj, {interface[]} interfaces).");
if(!s(a,"Object"))throw Error("first argument of Interface.ensureImplements is not 'object', but is '"+typeof a+"'.");if(!s(b,"Array"))throw Error("second argument of Interface.ensureImplements is not 'array of interface', but is '"+typeof b+"'.");for(var c=0;c<b.length;c++){var l=b[c];if(l.constructor!==q)throw Error("second argument of Interface.ensureImplements index "+c+" is not interface.");var h=l.getMethods(),d;for(d in h){var g=h[d];if(f(a[g]))throw Error("implementation class is not define method '"+
g+"' of Interface '"+l.getName()+"'.");if(!s(a[g],"Function"))throw Error("implementation class define '"+g+"' is not 'method', but is '"+typeof a[g]+"'.");}}};var w=function(a){var b=a.totalPosition||0,c=a.totalSentence||0,l=a.content||{nodes:{}},h=a.suggestions||[];this.getTotalPosition=function(){return b};this.getTotalSentence=function(){return c};this.getContent=function(){return l};this.getSuggestions=function(){return h}},C=function(a){var b=0,c=0;this.getTotalSentence=function(){return b};
this.resetTotalSentence=function(){b=0};this.getTotalHighlight=function(){return c};this.resetTotalHighlight=function(){c=0};this.resetTotal=function(){b=c=0};this.highlight=function(l,h){var d="",g=l.length,n=m(l,h);if(-1===n)return d;for(b+=1;;){c+=1;var f=n+g,B=p(h.substring(0,n)),n=h.substring(n,f),n="<span class="+a+">"+p(n)+"</span>",d=d+B+n;h=h.substring(f);n=m(l,h);if(-1===n){d+=p(h);break}}return d}},x=new q("IndexStore",["writeIndex","readIndex","addDictionary","getDictionary","getIndexs"]),
y=function(a){var b=a;if(f(b)||1>b)b=1;var c=[];for(a=1;a<=b;a++)c[a]={};this.writeIndex=function(a,b){if(!f(b))for(var d in c)for(var g in c[d]){var n=c[d][g],e;for(e in n){var B=n[e];-1!==m(e,b)&&-1===m(a,B)&&B.push(a)}}};this.readIndex=function(a){var b=this.getDictionary(a),c=[],g;for(g in b)if(-1!==m(a,g)){var f=b[g],e;for(e in f)-1!==m(f[e],c)||c.push(f[e])}return c};this.addDictionary=function(a){a=a.trim().toLowerCase();if(!e(a))for(var b in c)if(a.length>=b){var d=a.substring(0,b),g=c[b][d];
f(g)&&(c[b][d]={},g=c[b][d]);f(g[a])&&(g[a]=[])}};this.getDictionary=function(a){if(e(a))return{};var h={},h=a.length<=b?c[a.length][a]:c[b][a.substring(0,b)];f(h)&&(h={});return h};this.getIndexs=function(){return c}},u=function(a){this.writeIndex=function(b,c){a.writeIndex(b,c)};this.addDictionary=function(b){a.addDictionary(b)}},D=function(a){this.readIndex=function(b){return a.readIndex(b)};this.getDictionary=function(b){return a.getDictionary(b)};this.getIndexs=function(){return a.getIndexs()}},
H=function(a){function b(a){for(var b={},c=0;c<a.length;c++){var d=a.charAt(c);f(b[d])&&(b[d]={duplicate:0,position:0});b[d].duplicate+=1;b[d].position+=c}return b}function c(a,b){var c=0,d;for(d in a){f(b[d])&&(b[d]={duplicate:0,position:0});var g=a[d],e=b[d],g=g.duplicate+g.position,e=e.duplicate+e.position;if(0!==g&&0!==e)var h=(e+g)/2,c=g>=e?c+e/h:c+g/h}d=(t(a)+t(b))/2;return 100*(c/d)}function l(a,g){var f=[],l;for(l in d){var u=l;if(a!==l){var r=b(a),v=b(u),r=c(r,v);if(r>=g&&(v=h(a,u),e(v)&&
(v=u),f.push({word:u,highlight:v,percent:k(r)}),f.length===n))break}}return f=f.sort(function(a,b){return b.percent-a.percent})}function h(a,b){for(var c="",d=0;d<b.length;d++){for(var g=b.charAt(d),e=!1,f=0;f<a.length;f++)if(a.charAt(f)===g){e=!0;break}c=e?c+"<span class="+u+">"+g+"</span>":c+g}return c}var d=a.dictionary,g=a.percentSuggest||60,n=a.suggestionsSize||10,u=a.highlightClass||"keyword-highlight";this.getSuggestionsWhenSearchFound=function(a){return l(a,0)};this.getSuggestionsWhenSearchNotFound=
function(a){return l(a,g)}};return function(a){function b(){for(var a in G)k.addDictionary(G[a]);c(d);for(var b in d.nodes)l(0,b,d.nodes[b]);for(var g in v)delete v[g]}function c(a){for(var b in g){var d=a[g[b]];if(!e(d)){var d=L(d),f=void 0;for(f in d)k.addDictionary(d[f])}}a=a.nodes;if(!e(a))for(var h in a)c(a[h])}function l(a,b,d){h(d,function(a){k.writeIndex(b,a)});d.level="level-"+a;d.index=b+"";d=d.nodes;if(!e(d))for(var c in d)l(a+1,b+F+c,d[c])}function h(a,b){for(var d in g){var c=g[d],e=
v[c];f(e)&&(e={},v[c]=e);var h=e[a[c]];f(h)&&(h=!0,e[a[c]]=h,b(a[c]))}}if(f(a))throw Error("require {object} settings");var d=a.repository;if(f(d))throw Error("require {repository} settings.repository");if(!s(d,"Object"))throw Error("require {repository} settings.repository is root node object");var g=a.indexOnFields||[];if(e(g))throw Error("require index field on {string[]} : settings.indexOnFields");if(-1!==m("nodes",g))throw Error("field name 'nodes' in {string[]} : settings.indexOnFields is reserved word");
var n=new C(a.highlightClass||"keyword-highlight"),p=a.indexStore||new y(a.maximumDictionaryKeySize||3);q.ensureImplements(p,[x]);var k=new u(p),t=new D(p),F=a.indexSeparator||"/",K=a.postfixFieldNameHighlight||"Highlight",z,r="",v={},G=a.additionalDictionaries||[],A=[],E=0,I=a.suggestionsSize,J=a.percentSuggest,L=a.stopword||function(a){a=f(a)?"":a.replace(/\(/g," ").replace(/\)/g," ").replace(/\,/g," ").replace(/\//g," ").replace(/\\/g," ").replace(/\:/g," ").replace(/\./g," ").replace(/\>/g," ").replace(/\</g,
" ").replace(/\[/g," ").replace(/\]/g," ").replace(/\+/g," ").replace(/\=/g," ").replace(/\;/g," ");return a.split(" ")};b();this.reIndex=function(a){d=a;b()};this.getKeyword=function(){return r};this.getRepository=function(){return d};this.getIndexs=function(){return t.getIndexs()};this.clear=function(){r="";return new w({content:d})};this.search=function(a){if(e(a))return new w({content:d});a=a.trim().toLowerCase();if(r===a)return new w({totalPosition:n.getTotalHighlight(),totalSentence:n.getTotalSentence(),
content:z,suggestions:A});n.resetTotal();z={nodes:[]};A=[];r=a;a=t.readIndex(r);for(var b in a){var c=a[b].split(F),h=d,l=z,u=void 0;for(u in c){var p=c[u];if(e(p))break;var h=h.nodes[p],k=l.nodes[p];if(f(k)){var k=h,q={},m=void 0;for(m in k)if("nodes"!==m){q[m]=k[m];for(var s in g)if(m===g[s]){var D=n.highlight(r,q[m]);e(D)||(q[m+K]=D)}}k=q;l.nodes[p]=k}f(k.nodes)&&(k.nodes=[]);l=k}}e(z.nodes)?(E+=1,b=r.substring(0,r.length-E),A=(new H({dictionary:t.getDictionary(b),suggestionsSize:I,percentSuggest:J})).getSuggestionsWhenSearchNotFound(r)):
(E=0,A=(new H({dictionary:t.getDictionary(r),suggestionsSize:I,percentSuggest:J})).getSuggestionsWhenSearchFound(r));return new w({totalPosition:n.getTotalHighlight(),totalSentence:n.getTotalSentence(),content:z,suggestions:A})}}}();window.Blogger=window.Blogger||{};
window.Blogger.pullRepositoryFromBlog=function(e,m){var p=document.createElement("script");p.type="text/javascript";p.src=e+"/feeds/posts/default?max-results=10000&alt=json-in-script&callback=blogFeedCallback";p.onload=function(){m(window.blogFeedRepository)};document.getElementsByTagName("head")[0].appendChild(p)};
function blogFeedCallback(e){function m(e){e=e.sort(function(e,f){return e.published>f.published})}function p(e){var k=f.nodes,m;for(m in k){var a=k[m];if(a.name===e)return a}return null}function s(e){e=e.link;for(var f in e)if("alternate"===e[f].rel)return e[f].href;return""}var f={nodes:[]},t=e.feed,k=t.category,q;for(q in k)e=k[q],f.nodes.push({name:e.term,link:"/search/label/"+encodeURIComponent(e.term)});t=t.entry;for(q in t){k=t[q];k.title.$t;var w=k.category,C;for(C in w){e=p(w[C].term);var x=
e.nodes;x||(x=[]);var y={name:k.title.$t,published:new Date(k.published.$t),link:s(k),nodes:[]};5>q&&(y.newPost=!0);x.push(y);e.nodes=x}}(function(e){e=e.sort(function(e,f){return e.name.localeCompare(f.name)})})(f.nodes);for(q in f.nodes)y=f.nodes[q],m(y.nodes);window.blogFeedRepository=f};