﻿/**
 * blogspot search plugin
 * by index search javascript
 * code : https://github.com/jittagornp/index-search-javascript
 * 
 * @author jittagorn pitakmetagoon
 * create 10/12/2013
 * update 11/12/2013 protect laguages and additionalDictionaries is null
 */





//jquery

if(typeof window.jQuery === 'undefined'){

/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(s,n){function ra(a){return c.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}function sa(a){if(!da[a]){var b=m.body,e=c("<"+a+">").appendTo(b),d=e.css("display");e.remove();if("none"===d||""===d)H||(H=m.createElement("iframe"),H.frameBorder=H.width=H.height=0),b.appendChild(H),K&&H.createElement||(K=(H.contentWindow||H.contentDocument).document,K.write((c.support.boxModel?"<!doctype html>":"")+"<html><body>"),K.close()),e=K.createElement(a),K.body.appendChild(e),d=c.css(e,
"display"),b.removeChild(H);da[a]=d}return da[a]}function P(a,b){var e={};c.each(T.concat.apply([],T.slice(0,b)),function(){e[this]=a});return e}function jb(){X=n}function ta(){setTimeout(jb,0);return X=c.now()}function ua(){try{return new s.XMLHttpRequest}catch(a){}}function ea(a,b,e,d){if(c.isArray(b))c.each(b,function(b,c){e||kb.test(a)?d(a,c):ea(a+"["+("object"==typeof c?b:"")+"]",c,e,d)});else if(e||"object"!==c.type(b))d(a,b);else for(var f in b)ea(a+"["+f+"]",b[f],e,d)}function va(a,b){var e,
d,f=c.ajaxSettings.flatOptions||{};for(e in b)b[e]!==n&&((f[e]?a:d||(d={}))[e]=b[e]);d&&c.extend(!0,a,d)}function Y(a,b,c,d,f,g){f=f||b.dataTypes[0];g=g||{};g[f]=!0;f=a[f];for(var k=0,h=f?f.length:0,l=a===fa,p;k<h&&(l||!p);k++)p=f[k](b,c,d),"string"==typeof p&&(!l||g[p]?p=n:(b.dataTypes.unshift(p),p=Y(a,b,c,d,p,g)));!l&&p||g["*"]||(p=Y(a,b,c,d,"*",g));return p}function wa(a){return function(b,e){"string"!=typeof b&&(e=b,b="*");if(c.isFunction(e))for(var d=b.toLowerCase().split(xa),f=0,g=d.length,
k,h;f<g;f++)k=d[f],(h=/^\+/.test(k))&&(k=k.substr(1)||"*"),k=a[k]=a[k]||[],k[h?"unshift":"push"](e)}}function ya(a,b,e){var d="width"===b?a.offsetWidth:a.offsetHeight,f="width"===b?1:0;if(0<d){if("border"!==e)for(;4>f;f+=2)e||(d-=parseFloat(c.css(a,"padding"+L[f]))||0),"margin"===e?d+=parseFloat(c.css(a,e+L[f]))||0:d-=parseFloat(c.css(a,"border"+L[f]+"Width"))||0;return d+"px"}d=M(a,b);if(0>d||null==d)d=a.style[b];if(ga.test(d))return d;d=parseFloat(d)||0;if(e)for(;4>f;f+=2)d+=parseFloat(c.css(a,
"padding"+L[f]))||0,"padding"!==e&&(d+=parseFloat(c.css(a,"border"+L[f]+"Width"))||0),"margin"===e&&(d+=parseFloat(c.css(a,e+L[f]))||0);return d+"px"}function za(a){var b=(a.nodeName||"").toLowerCase();"input"===b?Aa(a):"script"!==b&&"undefined"!=typeof a.getElementsByTagName&&c.grep(a.getElementsByTagName("input"),Aa)}function Aa(a){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}function Z(a){return"undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!=
typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function Ba(a,b){var e;1===b.nodeType&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),e=b.nodeName.toLowerCase(),"object"===e?b.outerHTML=a.outerHTML:"input"!==e||"checkbox"!==a.type&&"radio"!==a.type?"option"===e?b.selected=a.defaultSelected:"input"===e||"textarea"===e?b.defaultValue=a.defaultValue:"script"===e&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&
(b.value=a.value)),b.removeAttribute(c.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function Ca(a,b){if(1===b.nodeType&&c.hasData(a)){var e,d,f;d=c._data(a);var g=c._data(b,d),k=d.events;if(k)for(e in delete g.handle,g.events={},k)for(d=0,f=k[e].length;d<f;d++)c.event.add(b,e,k[e][d]);g.data&&(g.data=c.extend({},g.data))}}function lb(a,b){return c.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):
a}function Da(a){var b=Ea.split("|");a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function Fa(a,b,e){b=b||0;if(c.isFunction(b))return c.grep(a,function(a,c){return!!b.call(a,c,a)===e});if(b.nodeType)return c.grep(a,function(a,c){return a===b===e});if("string"==typeof b){var d=c.grep(a,function(a){return 1===a.nodeType});if(mb.test(b))return c.filter(b,d,!e);b=c.filter(b,d)}return c.grep(a,function(a,d){return 0<=c.inArray(a,b)===e})}function Ga(a){return!a||
!a.parentNode||11===a.parentNode.nodeType}function $(){return!0}function I(){return!1}function Ha(a,b,e){var d=b+"defer",f=b+"queue",g=b+"mark",k=c._data(a,d);!k||"queue"!==e&&c._data(a,f)||"mark"!==e&&c._data(a,g)||setTimeout(function(){c._data(a,f)||c._data(a,g)||(c.removeData(a,d,!0),k.fire())},0)}function ha(a){for(var b in a)if(("data"!==b||!c.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Ia(a,b,e){if(e===n&&1===a.nodeType)if(e="data-"+b.replace(nb,"-$1").toLowerCase(),e=a.getAttribute(e),
"string"==typeof e){try{e="true"===e?!0:"false"===e?!1:"null"===e?null:c.isNumeric(e)?+e:ob.test(e)?c.parseJSON(e):e}catch(d){}c.data(a,b,e)}else e=n;return e}function pb(a){var b=Ja[a]={},c,d;a=a.split(/\s+/);c=0;for(d=a.length;c<d;c++)b[a[c]]=!0;return b}var m=s.document,qb=s.navigator,rb=s.location,c=function(){function a(){if(!b.isReady){try{m.documentElement.doScroll("left")}catch(c){setTimeout(a,1);return}b.ready()}}var b=function(a,c){return new b.fn.init(a,c,f)},c=s.jQuery,d=s.$,f,g=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
k=/\S/,h=/^\s+/,l=/\s+$/,p=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,x=/^[\],:{}\s]*$/,q=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,U=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,A=/(webkit)[ \/]([\w.]+)/,z=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,B=/-([a-z]|[0-9])/ig,G=/^-ms-/,u=function(a,b){return(b+"").toUpperCase()},C=qb.userAgent,y,D,sb=Object.prototype.toString,ia=Object.prototype.hasOwnProperty,ja=Array.prototype.push,
W=Array.prototype.slice,Ka=String.prototype.trim,La=Array.prototype.indexOf,Ma={};b.fn=b.prototype={constructor:b,init:function(a,c,e){var d,f;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!c&&m.body)return this.context=m,this[0]=m.body,this.selector=a,this.length=1,this;if("string"==typeof a){"<"!==a.charAt(0)||">"!==a.charAt(a.length-1)||3>a.length?d=g.exec(a):d=[null,a,null];if(d&&(d[1]||!c)){if(d[1])return f=(c=c instanceof b?c[0]:c)?c.ownerDocument||
c:m,(e=p.exec(a))?b.isPlainObject(c)?(a=[m.createElement(e[1])],b.fn.attr.call(a,c,!0)):a=[f.createElement(e[1])]:(e=b.buildFragment([d[1]],[f]),a=(e.cacheable?b.clone(e.fragment):e.fragment).childNodes),b.merge(this,a);if((c=m.getElementById(d[2]))&&c.parentNode){if(c.id!==d[2])return e.find(a);this.length=1;this[0]=c}this.context=m;this.selector=a;return this}return!c||c.jquery?(c||e).find(a):this.constructor(c).find(a)}if(b.isFunction(a))return e.ready(a);a.selector!==n&&(this.selector=a.selector,
this.context=a.context);return b.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return W.call(this,0)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a,c,e){var d=this.constructor();b.isArray(a)?ja.apply(d,a):b.merge(d,a);d.prevObject=this;d.context=this.context;"find"===c?d.selector=this.selector+(this.selector?" ":"")+e:c&&(d.selector=this.selector+"."+c+"("+e+")");return d},each:function(a,
c){return b.each(this,a,c)},ready:function(a){b.bindReady();y.add(a);return this},eq:function(a){a=+a;return-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(W.apply(this,arguments),"slice",W.call(arguments).join(","))},map:function(a){return this.pushStack(b.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:ja,sort:[].sort,splice:[].splice};
b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var a,c,e,d,f,y,g=arguments[0]||{},k=1,h=arguments.length,D=!1;"boolean"==typeof g&&(D=g,g=arguments[1]||{},k=2);"object"!=typeof g&&!b.isFunction(g)&&(g={});for(h===k&&(g=this,--k);k<h;k++)if(null!=(a=arguments[k]))for(c in a)e=g[c],d=a[c],g!==d&&(D&&d&&(b.isPlainObject(d)||(f=b.isArray(d)))?(f?(f=!1,y=e&&b.isArray(e)?e:[]):y=e&&b.isPlainObject(e)?e:{},g[c]=b.extend(D,y,d)):d!==n&&(g[c]=d));return g};b.extend({noConflict:function(a){s.$===
b&&(s.$=d);a&&s.jQuery===b&&(s.jQuery=c);return b},isReady:!1,readyWait:1,holdReady:function(a){a?b.readyWait++:b.ready(!0)},ready:function(a){if(!0===a&&!--b.readyWait||!0!==a&&!b.isReady){if(!m.body)return setTimeout(b.ready,1);b.isReady=!0;!0!==a&&0<--b.readyWait||(y.fireWith(m,[b]),b.fn.trigger&&b(m).trigger("ready").off("ready"))}},bindReady:function(){if(!y){y=b.Callbacks("once memory");if("complete"===m.readyState)return setTimeout(b.ready,1);if(m.addEventListener)m.addEventListener("DOMContentLoaded",
D,!1),s.addEventListener("load",b.ready,!1);else if(m.attachEvent){m.attachEvent("onreadystatechange",D);s.attachEvent("onload",b.ready);var c=!1;try{c=null==s.frameElement}catch(e){}m.documentElement.doScroll&&c&&a()}}},isFunction:function(a){return"function"===b.type(a)},isArray:Array.isArray||function(a){return"array"===b.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):Ma[sb.call(a)]||
"object"},isPlainObject:function(a){if(!a||"object"!==b.type(a)||a.nodeType||b.isWindow(a))return!1;try{if(a.constructor&&!ia.call(a,"constructor")&&!ia.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var e in a);return e===n||ia.call(a,e)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseJSON:function(a){if("string"!=typeof a||!a)return null;a=b.trim(a);if(s.JSON&&s.JSON.parse)return s.JSON.parse(a);if(x.test(a.replace(q,
"@").replace(U,"]").replace(r,"")))return(new Function("return "+a))();b.error("Invalid JSON: "+a)},parseXML:function(a){if("string"!=typeof a||!a)return null;var c,e;try{s.DOMParser?(e=new DOMParser,c=e.parseFromString(a,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(a))}catch(d){c=n}c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+a);return c},noop:function(){},globalEval:function(a){a&&k.test(a)&&(s.execScript||function(a){s.eval.call(s,
a)})(a)},camelCase:function(a){return a.replace(G,"ms-").replace(B,u)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var d,f=0,y=a.length,g=y===n||b.isFunction(a);if(e)if(g)for(d in a){if(!1===c.apply(a[d],e))break}else for(;f<y&&!1!==c.apply(a[f++],e););else if(g)for(d in a){if(!1===c.call(a[d],d,a[d]))break}else for(;f<y&&!1!==c.call(a[f],f,a[f++]););return a},trim:Ka?function(a){return null==a?"":Ka.call(a)}:function(a){return null==
a?"":(a+"").replace(h,"").replace(l,"")},makeArray:function(a,c){var e=c||[];if(null!=a){var d=b.type(a);null==a.length||"string"===d||"function"===d||"regexp"===d||b.isWindow(a)?ja.call(e,a):b.merge(e,a)}return e},inArray:function(a,b,c){var e;if(b){if(La)return La.call(b,a,c);e=b.length;for(c=c?0>c?Math.max(0,e+c):c:0;c<e;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=a.length,e=0;if("number"==typeof b.length)for(var d=b.length;e<d;e++)a[c++]=b[e];else for(;b[e]!==n;)a[c++]=
b[e++];a.length=c;return a},grep:function(a,b,c){var e=[],d;c=!!c;for(var f=0,y=a.length;f<y;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,e){var d,f,y=[],g=0,k=a.length;if(a instanceof b||k!==n&&"number"==typeof k&&(0<k&&a[0]&&a[k-1]||0===k||b.isArray(a)))for(;g<k;g++)d=c(a[g],g,e),null!=d&&(y[y.length]=d);else for(f in a)d=c(a[f],f,e),null!=d&&(y[y.length]=d);return y.concat.apply([],y)},guid:1,proxy:function(a,c){if("string"==typeof c){var e=a[c];c=a;a=e}if(!b.isFunction(a))return n;
var d=W.call(arguments,2),e=function(){return a.apply(c,d.concat(W.call(arguments)))};e.guid=a.guid=a.guid||e.guid||b.guid++;return e},access:function(a,c,e,d,f,y,g){var k,h=null==e,D=0,l=a.length;if(e&&"object"==typeof e){for(D in e)b.access(a,c,D,e[D],1,y,d);f=1}else if(d!==n){k=g===n&&b.isFunction(d);h&&(k?(k=c,c=function(a,c,e){return k.call(b(a),e)}):(c.call(a,d),c=null));if(c)for(;D<l;D++)c(a[D],e,k?d.call(a[D],D,c(a[D],e)):d,g);f=1}return f?a:h?c.call(a):l?c(a[0],e):y},now:function(){return(new Date).getTime()},
uaMatch:function(a){a=a.toLowerCase();a=A.exec(a)||z.exec(a)||t.exec(a)||0>a.indexOf("compatible")&&w.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}b.extend(!0,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(e,d){d&&d instanceof b&&!(d instanceof a)&&(d=a(d));return b.fn.init.call(this,e,d,c)};a.fn.init.prototype=a.fn;var c=a(m);return a},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),
function(a,b){Ma["[object "+b+"]"]=b.toLowerCase()});C=b.uaMatch(C);C.browser&&(b.browser[C.browser]=!0,b.browser.version=C.version);b.browser.webkit&&(b.browser.safari=!0);k.test("\u00a0")&&(h=/^[\s\xA0]+/,l=/[\s\xA0]+$/);f=b(m);m.addEventListener?D=function(){m.removeEventListener("DOMContentLoaded",D,!1);b.ready()}:m.attachEvent&&(D=function(){"complete"===m.readyState&&(m.detachEvent("onreadystatechange",D),b.ready())});return b}(),Ja={};c.Callbacks=function(a){a=a?Ja[a]||pb(a):{};var b=[],e=
[],d,f,g,k,h,l,p=function(e){var d,f,g,k;d=0;for(f=e.length;d<f;d++)g=e[d],k=c.type(g),"array"===k?p(g):"function"!==k||a.unique&&q.has(g)||b.push(g)},x=function(c,p){p=p||[];d=!a.memory||[c,p];g=f=!0;l=k||0;k=0;for(h=b.length;b&&l<h;l++)if(!1===b[l].apply(c,p)&&a.stopOnFalse){d=!0;break}g=!1;b&&(a.once?!0===d?q.disable():b=[]:e&&e.length&&(d=e.shift(),q.fireWith(d[0],d[1])))},q={add:function(){if(b){var a=b.length;p(arguments);g?h=b.length:d&&!0!==d&&(k=a,x(d[0],d[1]))}return this},remove:function(){if(b)for(var c=
arguments,e=0,d=c.length;e<d;e++)for(var f=0;f<b.length&&(c[e]!==b[f]||(g&&f<=h&&(h--,f<=l&&l--),b.splice(f--,1),!a.unique));f++);return this},has:function(a){if(b)for(var c=0,e=b.length;c<e;c++)if(a===b[c])return!0;return!1},empty:function(){b=[];return this},disable:function(){b=e=d=n;return this},disabled:function(){return!b},lock:function(){e=n;d&&!0!==d||q.disable();return this},locked:function(){return!e},fireWith:function(b,c){e&&(g?a.once||e.push([b,c]):(!a.once||!d)&&x(b,c));return this},
fire:function(){q.fireWith(this,arguments);return this},fired:function(){return!!f}};return q};var ka=[].slice;c.extend({Deferred:function(a){var b=c.Callbacks("once memory"),e=c.Callbacks("once memory"),d=c.Callbacks("memory"),f="pending",g={resolve:b,reject:e,notify:d},k={done:b.add,fail:e.add,progress:d.add,state:function(){return f},isResolved:b.fired,isRejected:e.fired,then:function(a,b,c){h.done(a).fail(b).progress(c);return this},always:function(){h.done.apply(h,arguments).fail.apply(h,arguments);
return this},pipe:function(a,b,e){return c.Deferred(function(d){c.each({done:[a,"resolve"],fail:[b,"reject"],progress:[e,"notify"]},function(a,b){var e=b[0],f=b[1],g;c.isFunction(e)?h[a](function(){(g=e.apply(this,arguments))&&c.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[f+"With"](this===h?d:this,[g])}):h[a](d[f])})}).promise()},promise:function(a){if(null==a)a=k;else for(var b in k)a[b]=k[b];return a}},h=k.promise({}),l;for(l in g)h[l]=g[l].fire,h[l+"With"]=g[l].fireWith;
h.done(function(){f="resolved"},e.disable,d.lock).fail(function(){f="rejected"},b.disable,d.lock);a&&a.call(h,h);return h},when:function(a){function b(a){return function(b){k[a]=1<arguments.length?ka.call(arguments,0):b;l.notifyWith(p,k)}}function e(a){return function(b){d[a]=1<arguments.length?ka.call(arguments,0):b;--h||l.resolveWith(l,d)}}var d=ka.call(arguments,0),f=0,g=d.length,k=Array(g),h=g,l=1>=g&&a&&c.isFunction(a.promise)?a:c.Deferred(),p=l.promise();if(1<g){for(;f<g;f++)d[f]&&d[f].promise&&
c.isFunction(d[f].promise)?d[f].promise().then(e(f),l.reject,b(f)):--h;h||l.resolveWith(l,d)}else l!==a&&l.resolveWith(l,g?[a]:[]);return p}});c.support=function(){var a,b,e,d,f,g,k,h,l=m.createElement("div");l.setAttribute("className","t");l.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";b=l.getElementsByTagName("*");e=l.getElementsByTagName("a")[0];if(!b||!b.length||!e)return{};d=m.createElement("select");f=d.appendChild(m.createElement("option"));
b=l.getElementsByTagName("input")[0];a={leadingWhitespace:3===l.firstChild.nodeType,tbody:!l.getElementsByTagName("tbody").length,htmlSerialize:!!l.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:"/a"===e.getAttribute("href"),opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:"on"===b.value,optSelected:f.selected,getSetAttribute:"t"!==l.className,enctype:!!m.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==m.createElement("nav").cloneNode(!0).outerHTML,
submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0};c.boxModel=a.boxModel="CSS1Compat"===m.compatMode;b.checked=!0;a.noCloneChecked=b.cloneNode(!0).checked;d.disabled=!0;a.optDisabled=!f.disabled;try{delete l.test}catch(p){a.deleteExpando=!1}!l.addEventListener&&l.attachEvent&&l.fireEvent&&(l.attachEvent("onclick",function(){a.noCloneEvent=!1}),l.cloneNode(!0).fireEvent("onclick"));
b=m.createElement("input");b.value="t";b.setAttribute("type","radio");a.radioValue="t"===b.value;b.setAttribute("checked","checked");b.setAttribute("name","t");l.appendChild(b);e=m.createDocumentFragment();e.appendChild(l.lastChild);a.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked;a.appendChecked=b.checked;e.removeChild(b);e.appendChild(l);if(l.attachEvent)for(k in{submit:1,change:1,focusin:1})b="on"+k,(h=b in l)||(l.setAttribute(b,"return;"),h="function"==typeof l[b]),a[k+"Bubbles"]=
h;e.removeChild(l);e=d=f=l=b=null;c(function(){var b,e,d,f,k,p,n=m.getElementsByTagName("body")[0];!n||(b=m.createElement("div"),b.style.cssText="padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px",n.insertBefore(b,n.firstChild),l=m.createElement("div"),b.appendChild(l),l.innerHTML="<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>",g=l.getElementsByTagName("td"),h=0===g[0].offsetHeight,g[0].style.display=
"",g[1].style.display="none",a.reliableHiddenOffsets=h&&0===g[0].offsetHeight,s.getComputedStyle&&(l.innerHTML="",p=m.createElement("div"),p.style.width="0",p.style.marginRight="0",l.style.width="2px",l.appendChild(p),a.reliableMarginRight=0===(parseInt((s.getComputedStyle(p,null)||{marginRight:0}).marginRight,10)||0)),"undefined"!=typeof l.style.zoom&&(l.innerHTML="",l.style.width=l.style.padding="1px",l.style.border=0,l.style.overflow="hidden",l.style.display="inline",l.style.zoom=1,a.inlineBlockNeedsLayout=
3===l.offsetWidth,l.style.display="block",l.style.overflow="visible",l.innerHTML="<div style='width:5px;'></div>",a.shrinkWrapBlocks=3!==l.offsetWidth),l.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;",l.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
e=l.firstChild,d=e.firstChild,f=e.nextSibling.firstChild.firstChild,k={doesNotAddBorder:5!==d.offsetTop,doesAddBorderForTableAndCells:5===f.offsetTop},d.style.position="fixed",d.style.top="20px",k.fixedPosition=20===d.offsetTop||15===d.offsetTop,d.style.position=d.style.top="",e.style.overflow="hidden",e.style.position="relative",k.subtractsBorderForOverflowNotVisible=-5===d.offsetTop,k.doesNotIncludeMarginInBodyOffset=1!==n.offsetTop,s.getComputedStyle&&(l.style.marginTop="1%",a.pixelMargin="1%"!==
(s.getComputedStyle(l,null)||{marginTop:0}).marginTop),"undefined"!=typeof b.style.zoom&&(b.style.zoom=1),n.removeChild(b),l=null,c.extend(a,k))});return a}();var ob=/^(?:\{.*\}|\[.*\])$/,nb=/([A-Z])/g;c.extend({cache:{},uuid:0,expando:"jQuery"+(c.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?c.cache[a[c.expando]]:a[c.expando];return!!a&&!ha(a)},data:function(a,b,e,d){if(c.acceptData(a)){var f,
g;f=c.expando;var k="string"==typeof b,h=a.nodeType,l=h?c.cache:a,p=h?a[f]:a[f]&&f,x="events"===b;if(p&&l[p]&&(x||d||l[p].data)||!k||e!==n){p||(h?a[f]=p=++c.uuid:p=f);l[p]||(l[p]={},h||(l[p].toJSON=c.noop));if("object"==typeof b||"function"==typeof b)d?l[p]=c.extend(l[p],b):l[p].data=c.extend(l[p].data,b);a=f=l[p];d||(f.data||(f.data={}),f=f.data);e!==n&&(f[c.camelCase(b)]=e);if(x&&!f[b])return a.events;k?(g=f[b],null==g&&(g=f[c.camelCase(b)])):g=f;return g}}},removeData:function(a,b,e){if(c.acceptData(a)){var d,
f,g,k=c.expando,h=a.nodeType,l=h?c.cache:a,p=h?a[k]:k;if(l[p]){if(b&&(d=e?l[p]:l[p].data)){c.isArray(b)||(b in d?b=[b]:(b=c.camelCase(b),b in d?b=[b]:b=b.split(" ")));f=0;for(g=b.length;f<g;f++)delete d[b[f]];if(!(e?ha:c.isEmptyObject)(d))return}if(!e&&(delete l[p].data,!ha(l[p])))return;c.support.deleteExpando||!l.setInterval?delete l[p]:l[p]=null;h&&(c.support.deleteExpando?delete a[k]:a.removeAttribute?a.removeAttribute(k):a[k]=null)}}},_data:function(a,b,e){return c.data(a,b,e,!0)},acceptData:function(a){if(a.nodeName){var b=
c.noData[a.nodeName.toLowerCase()];if(b)return!0!==b&&a.getAttribute("classid")===b}return!0}});c.fn.extend({data:function(a,b){var e,d,f,g,k,h=this[0],l=0,p=null;if(a===n){if(this.length&&(p=c.data(h),1===h.nodeType&&!c._data(h,"parsedAttrs"))){f=h.attributes;for(k=f.length;l<k;l++)g=f[l].name,0===g.indexOf("data-")&&(g=c.camelCase(g.substring(5)),Ia(h,g,p[g]));c._data(h,"parsedAttrs",!0)}return p}if("object"==typeof a)return this.each(function(){c.data(this,a)});e=a.split(".",2);e[1]=e[1]?"."+e[1]:
"";d=e[1]+"!";return c.access(this,function(b){if(b===n)return p=this.triggerHandler("getData"+d,[e[0]]),p===n&&h&&(p=c.data(h,a),p=Ia(h,a,p)),p===n&&e[1]?this.data(e[0]):p;e[1]=b;this.each(function(){var f=c(this);f.triggerHandler("setData"+d,e);c.data(this,a,b);f.triggerHandler("changeData"+d,e)})},null,b,1<arguments.length,null,!1)},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",c._data(a,b,(c._data(a,b)||0)+1))},
_unmark:function(a,b,e){!0!==a&&(e=b,b=a,a=!1);if(b){e=e||"fx";var d=e+"mark";(a=a?0:(c._data(b,d)||1)-1)?c._data(b,d,a):(c.removeData(b,d,!0),Ha(b,e,"mark"))}},queue:function(a,b,e){var d;if(a)return b=(b||"fx")+"queue",d=c._data(a,b),e&&(!d||c.isArray(e)?d=c._data(a,b,c.makeArray(e)):d.push(e)),d||[]},dequeue:function(a,b){b=b||"fx";var e=c.queue(a,b),d=e.shift(),f={};"inprogress"===d&&(d=e.shift());d&&("fx"===b&&e.unshift("inprogress"),c._data(a,b+".run",f),d.call(a,function(){c.dequeue(a,b)},
f));e.length||(c.removeData(a,b+"queue "+b+".run",!0),Ha(a,b,"queue"))}});c.fn.extend({queue:function(a,b){var e=2;"string"!=typeof a&&(b=a,a="fx",e--);return arguments.length<e?c.queue(this[0],a):b===n?this:this.each(function(){var e=c.queue(this,a,b);"fx"===a&&"inprogress"!==e[0]&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;return this.queue(b||"fx",function(b,c){var f=setTimeout(b,a);c.stop=function(){clearTimeout(f)}})},
clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){function e(){--k||d.resolveWith(f,[f])}"string"!=typeof a&&(b=a,a=n);a=a||"fx";for(var d=c.Deferred(),f=this,g=f.length,k=1,h=a+"defer",l=a+"queue",p=a+"mark",x;g--;)if(x=c.data(f[g],h,n,!0)||(c.data(f[g],l,n,!0)||c.data(f[g],p,n,!0))&&c.data(f[g],h,c.Callbacks("once memory"),!0))k++,x.add(e);e();return d.promise(b)}});var Na=/[\n\t\r]/g,aa=/\s+/,tb=/\r/g,ub=/^(?:button|input)$/i,vb=/^(?:button|input|object|select|textarea)$/i,
wb=/^a(?:rea)?$/i,Oa=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Pa=c.support.getSetAttribute,F,Qa,Ra;c.fn.extend({attr:function(a,b){return c.access(this,c.attr,a,b,1<arguments.length)},removeAttr:function(a){return this.each(function(){c.removeAttr(this,a)})},prop:function(a,b){return c.access(this,c.prop,a,b,1<arguments.length)},removeProp:function(a){a=c.propFix[a]||a;return this.each(function(){try{this[a]=n,delete this[a]}catch(b){}})},
addClass:function(a){var b,e,d,f,g,k,h;if(c.isFunction(a))return this.each(function(b){c(this).addClass(a.call(this,b,this.className))});if(a&&"string"==typeof a)for(b=a.split(aa),e=0,d=this.length;e<d;e++)if(f=this[e],1===f.nodeType)if(f.className||1!==b.length){g=" "+f.className+" ";k=0;for(h=b.length;k<h;k++)~g.indexOf(" "+b[k]+" ")||(g+=b[k]+" ");f.className=c.trim(g)}else f.className=a;return this},removeClass:function(a){var b,e,d,f,g,k,h;if(c.isFunction(a))return this.each(function(b){c(this).removeClass(a.call(this,
b,this.className))});if(a&&"string"==typeof a||a===n)for(b=(a||"").split(aa),e=0,d=this.length;e<d;e++)if(f=this[e],1===f.nodeType&&f.className)if(a){g=(" "+f.className+" ").replace(Na," ");k=0;for(h=b.length;k<h;k++)g=g.replace(" "+b[k]+" "," ");f.className=c.trim(g)}else f.className="";return this},toggleClass:function(a,b){var e=typeof a,d="boolean"==typeof b;return c.isFunction(a)?this.each(function(e){c(this).toggleClass(a.call(this,e,this.className,b),b)}):this.each(function(){if("string"===
e)for(var f,g=0,k=c(this),h=b,l=a.split(aa);f=l[g++];)h=d?h:!k.hasClass(f),k[h?"addClass":"removeClass"](f);else if("undefined"===e||"boolean"===e)this.className&&c._data(this,"__className__",this.className),this.className=this.className||!1===a?"":c._data(this,"__className__")||""})},hasClass:function(a){a=" "+a+" ";for(var b=0,c=this.length;b<c;b++)if(1===this[b].nodeType&&-1<(" "+this[b].className+" ").replace(Na," ").indexOf(a))return!0;return!1},val:function(a){var b,e,d,f=this[0];if(arguments.length)return d=
c.isFunction(a),this.each(function(e){var f=c(this),h;1===this.nodeType&&(d?h=a.call(this,e,f.val()):h=a,null==h?h="":"number"==typeof h?h+="":c.isArray(h)&&(h=c.map(h,function(a){return null==a?"":a+""})),b=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&b.set(this,h,"value")!==n||(this.value=h))});if(f){if((b=c.valHooks[f.type]||c.valHooks[f.nodeName.toLowerCase()])&&"get"in b&&(e=b.get(f,"value"))!==n)return e;e=f.value;return"string"==typeof e?e.replace(tb,""):null==
e?"":e}}});c.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,e,d=a.selectedIndex,f=[],g=a.options,k="select-one"===a.type;if(0>d)return null;a=k?d:0;for(e=k?d+1:g.length;a<e;a++)if(b=g[a],b.selected&&!((c.support.optDisabled?b.disabled:null!==b.getAttribute("disabled"))||b.parentNode.disabled&&c.nodeName(b.parentNode,"optgroup"))){b=c(b).val();if(k)return b;f.push(b)}return k&&!f.length&&g.length?c(g[d]).val():
f},set:function(a,b){var e=c.makeArray(b);c(a).find("option").each(function(){this.selected=0<=c.inArray(c(this).val(),e)});e.length||(a.selectedIndex=-1);return e}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,b,e,d){var f,g,k=a.nodeType;if(a&&3!==k&&8!==k&&2!==k){if(d&&b in c.attrFn)return c(a)[b](e);if("undefined"==typeof a.getAttribute)return c.prop(a,b,e);(d=1!==k||!c.isXMLDoc(a))&&(b=b.toLowerCase(),g=c.attrHooks[b]||(Oa.test(b)?Qa:F));if(e!==
n){if(null===e){c.removeAttr(a,b);return}if(g&&"set"in g&&d&&(f=g.set(a,e,b))!==n)return f;a.setAttribute(b,""+e);return e}if(g&&"get"in g&&d&&null!==(f=g.get(a,b)))return f;f=a.getAttribute(b);return null===f?n:f}},removeAttr:function(a,b){var e,d,f,g,k,h=0;if(b&&1===a.nodeType)for(d=b.toLowerCase().split(aa),g=d.length;h<g;h++)(f=d[h])&&(e=c.propFix[f]||f,k=Oa.test(f),k||c.attr(a,f,""),a.removeAttribute(Pa?f:e),k&&e in a&&(a[e]=!1))},attrHooks:{type:{set:function(a,b){if(ub.test(a.nodeName)&&a.parentNode)c.error("type property can't be changed");
else if(!c.support.radioValue&&"radio"===b&&c.nodeName(a,"input")){var e=a.value;a.setAttribute("type",b);e&&(a.value=e);return b}}},value:{get:function(a,b){return F&&c.nodeName(a,"button")?F.get(a,b):b in a?a.value:null},set:function(a,b,e){if(F&&c.nodeName(a,"button"))return F.set(a,b,e);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",
frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,b,e){var d,f,g;g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return(g=1!==g||!c.isXMLDoc(a))&&(b=c.propFix[b]||b,f=c.propHooks[b]),e!==n?f&&"set"in f&&(d=f.set(a,e,b))!==n?d:a[b]=e:f&&"get"in f&&null!==(d=f.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):vb.test(a.nodeName)||wb.test(a.nodeName)&&a.href?0:n}}}});c.attrHooks.tabindex=c.propHooks.tabIndex;
Qa={get:function(a,b){var e,d=c.prop(a,b);return!0===d||"boolean"!=typeof d&&(e=a.getAttributeNode(b))&&!1!==e.nodeValue?b.toLowerCase():n},set:function(a,b,e){var d;!1===b?c.removeAttr(a,e):(d=c.propFix[e]||e,d in a&&(a[d]=!0),a.setAttribute(e,e.toLowerCase()));return e}};Pa||(Ra={name:!0,id:!0,coords:!0},F=c.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&(Ra[b]?""!==c.nodeValue:c.specified)?c.nodeValue:n},set:function(a,b,c){var d=a.getAttributeNode(c);d||(d=m.createAttribute(c),
a.setAttributeNode(d));return d.nodeValue=b+""}},c.attrHooks.tabindex.set=F.set,c.each(["width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],{set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}})}),c.attrHooks.contenteditable={get:F.get,set:function(a,b,c){""===b&&(b="false");F.set(a,b,c)}});c.support.hrefNormalized||c.each(["href","src","width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return null===a?n:a}})});
c.support.style||(c.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||n},set:function(a,b){return a.style.cssText=""+b}});c.support.optSelected||(c.propHooks.selected=c.extend(c.propHooks.selected,{get:function(a){a=a.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex);return null}}));c.support.enctype||(c.propFix.enctype="encoding");c.support.checkOn||c.each(["radio","checkbox"],function(){c.valHooks[this]={get:function(a){return null===a.getAttribute("value")?
"on":a.value}}});c.each(["radio","checkbox"],function(){c.valHooks[this]=c.extend(c.valHooks[this],{set:function(a,b){if(c.isArray(b))return a.checked=0<=c.inArray(c(a).val(),b)}})});var la=/^(?:textarea|input|select)$/i,Sa=/^([^\.]*)?(?:\.(.+))?$/,xb=/(?:^|\s)hover(\.\S+)?\b/,yb=/^key/,zb=/^(?:mouse|contextmenu)|click/,Ta=/^(?:focusinfocus|focusoutblur)$/,Ab=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Bb=function(a){(a=Ab.exec(a))&&(a[1]=(a[1]||"").toLowerCase(),a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)"));
return a},Ua=function(a){return c.event.special.hover?a:a.replace(xb,"mouseenter$1 mouseleave$1")};c.event={add:function(a,b,e,d,f){var g,k,h,l,p,x,q,m,r;if(3!==a.nodeType&&8!==a.nodeType&&b&&e&&(g=c._data(a))){e.handler&&(q=e,e=q.handler,f=q.selector);e.guid||(e.guid=c.guid++);(h=g.events)||(g.events=h={});(k=g.handle)||(g.handle=k=function(a){return"undefined"==typeof c||a&&c.event.triggered===a.type?n:c.event.dispatch.apply(k.elem,arguments)},k.elem=a);b=c.trim(Ua(b)).split(" ");for(g=0;g<b.length;g++)l=
Sa.exec(b[g])||[],p=l[1],x=(l[2]||"").split(".").sort(),r=c.event.special[p]||{},p=(f?r.delegateType:r.bindType)||p,r=c.event.special[p]||{},l=c.extend({type:p,origType:l[1],data:d,handler:e,guid:e.guid,selector:f,quick:f&&Bb(f),namespace:x.join(".")},q),m=h[p],m||(m=h[p]=[],m.delegateCount=0,r.setup&&!1!==r.setup.call(a,d,x,k)||(a.addEventListener?a.addEventListener(p,k,!1):a.attachEvent&&a.attachEvent("on"+p,k))),r.add&&(r.add.call(a,l),l.handler.guid||(l.handler.guid=e.guid)),f?m.splice(m.delegateCount++,
0,l):m.push(l),c.event.global[p]=!0;a=null}},global:{},remove:function(a,b,e,d,f){var g=c.hasData(a)&&c._data(a),k,h,l,p,n,q,m,r,s,z,t;if(g&&(m=g.events)){b=c.trim(Ua(b||"")).split(" ");for(k=0;k<b.length;k++)if(h=Sa.exec(b[k])||[],l=p=h[1],h=h[2],l){r=c.event.special[l]||{};l=(d?r.delegateType:r.bindType)||l;z=m[l]||[];n=z.length;h=h?RegExp("(^|\\.)"+h.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(q=0;q<z.length;q++)t=z[q],!f&&p!==t.origType||e&&e.guid!==t.guid||h&&!h.test(t.namespace)||
d&&!(d===t.selector||"**"===d&&t.selector)||(z.splice(q--,1),t.selector&&z.delegateCount--,!r.remove||r.remove.call(a,t));0===z.length&&n!==z.length&&((!r.teardown||!1===r.teardown.call(a,h))&&c.removeEvent(a,l,g.handle),delete m[l])}else for(l in m)c.event.remove(a,l+b[k],e,d,!0);c.isEmptyObject(m)&&(s=g.handle,s&&(s.elem=null),c.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(a,b,e,d){if(!e||3!==e.nodeType&&8!==e.nodeType){var f=a.type||
a,g=[],k,h,l,p,m,q;if(!Ta.test(f+c.event.triggered)&&(0<=f.indexOf("!")&&(f=f.slice(0,-1),k=!0),0<=f.indexOf(".")&&(g=f.split("."),f=g.shift(),g.sort()),e&&!c.event.customEvent[f]||c.event.global[f]))if(a="object"==typeof a?a[c.expando]?a:new c.Event(f,a):new c.Event(f),a.type=f,a.isTrigger=!0,a.exclusive=k,a.namespace=g.join("."),a.namespace_re=a.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,k=0>f.indexOf(":")?"on"+f:"",e){if(a.result=n,a.target||(a.target=e),b=null!=b?c.makeArray(b):
[],b.unshift(a),p=c.event.special[f]||{},!p.trigger||!1!==p.trigger.apply(e,b)){q=[[e,p.bindType||f]];if(!d&&!p.noBubble&&!c.isWindow(e)){h=p.delegateType||f;g=Ta.test(h+f)?e:e.parentNode;for(l=null;g;g=g.parentNode)q.push([g,h]),l=g;l&&l===e.ownerDocument&&q.push([l.defaultView||l.parentWindow||s,h])}for(h=0;h<q.length&&!a.isPropagationStopped();h++)g=q[h][0],a.type=q[h][1],(m=(c._data(g,"events")||{})[a.type]&&c._data(g,"handle"))&&m.apply(g,b),(m=k&&g[k])&&c.acceptData(g)&&!1===m.apply(g,b)&&a.preventDefault();
a.type=f;d||a.isDefaultPrevented()||p._default&&!1!==p._default.apply(e.ownerDocument,b)||"click"===f&&c.nodeName(e,"a")||c.acceptData(e)&&k&&e[f]&&("focus"!==f&&"blur"!==f||0!==a.target.offsetWidth)&&!c.isWindow(e)&&(l=e[k],l&&(e[k]=null),c.event.triggered=f,e[f](),c.event.triggered=n,l&&(e[k]=l));return a.result}}else for(h in e=c.cache,e)e[h].events&&e[h].events[f]&&c.event.trigger(a,b,e[h].handle.elem,!0)}},dispatch:function(a){a=c.event.fix(a||s.event);var b=(c._data(this,"events")||{})[a.type]||
[],e=b.delegateCount,d=[].slice.call(arguments,0),f=!a.exclusive&&!a.namespace,g=c.event.special[a.type]||{},k=[],h,l,p,m,q,U,r;d[0]=a;a.delegateTarget=this;if(!g.preDispatch||!1!==g.preDispatch.call(this,a)){if(e&&(!a.button||"click"!==a.type))for(p=c(this),p.context=this.ownerDocument||this,l=a.target;l!=this;l=l.parentNode||this)if(!0!==l.disabled){q={};U=[];p[0]=l;for(h=0;h<e;h++){m=b[h];r=m.selector;if(q[r]===n){var A=q,z=r,t;if(m.quick){t=m.quick;var w=l.attributes||{};t=(!t[1]||l.nodeName.toLowerCase()===
t[1])&&(!t[2]||(w.id||{}).value===t[2])&&(!t[3]||t[3].test((w["class"]||{}).value))}else t=p.is(r);A[z]=t}q[r]&&U.push(m)}U.length&&k.push({elem:l,matches:U})}b.length>e&&k.push({elem:this,matches:b.slice(e)});for(h=0;h<k.length&&!a.isPropagationStopped();h++)for(e=k[h],a.currentTarget=e.elem,b=0;b<e.matches.length&&!a.isImmediatePropagationStopped();b++)if(m=e.matches[b],f||!a.namespace&&!m.namespace||a.namespace_re&&a.namespace_re.test(m.namespace))a.data=m.data,a.handleObj=m,m=((c.event.special[m.origType]||
{}).handle||m.handler).apply(e.elem,d),m!==n&&(a.result=m,!1===m&&(a.preventDefault(),a.stopPropagation()));g.postDispatch&&g.postDispatch.call(this,a);return a.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(a,b){null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode);return a}},
mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,f,g=b.button,k=b.fromElement;null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,f=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||f&&f.scrollLeft||0)-(d&&d.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||f&&f.scrollTop||0)-(d&&d.clientTop||f&&f.clientTop||0));!a.relatedTarget&&k&&(a.relatedTarget=k===
a.target?b.toElement:k);!a.which&&g!==n&&(a.which=g&1?1:g&2?3:g&4?2:0);return a}},fix:function(a){if(a[c.expando])return a;var b,e,d=a,f=c.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=c.Event(d);for(b=g.length;b;)e=g[--b],a[e]=d[e];a.target||(a.target=d.srcElement||m);3===a.target.nodeType&&(a.target=a.target.parentNode);a.metaKey===n&&(a.metaKey=a.ctrlKey);return f.filter?f.filter(a,d):a},special:{ready:{setup:c.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},
blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,e){c.isWindow(this)&&(this.onbeforeunload=e)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,e,d){a=c.extend(new c.Event,e,{type:a,isSimulated:!0,originalEvent:{}});d?c.event.trigger(a,null,b):c.event.dispatch.call(b,a);a.isDefaultPrevented()&&e.preventDefault()}};c.event.handle=c.event.dispatch;c.removeEvent=m.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,
c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};c.Event=function(a,b){if(!(this instanceof c.Event))return new c.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||!1===a.returnValue||a.getPreventDefault&&a.getPreventDefault()?$:I):this.type=a;b&&c.extend(this,b);this.timeStamp=a&&a.timeStamp||c.now();this[c.expando]=!0};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=$;var a=this.originalEvent;!a||(a.preventDefault?
a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=$;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=$;this.stopPropagation()},isDefaultPrevented:I,isPropagationStopped:I,isImmediatePropagationStopped:I};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={delegateType:b,bindType:b,handle:function(a){var d=a.relatedTarget,
f=a.handleObj,g;if(!d||d!==this&&!c.contains(this,d))a.type=f.origType,g=f.handler.apply(this,arguments),a.type=b;return g}}});c.support.submitBubbles||(c.event.special.submit={setup:function(){if(c.nodeName(this,"form"))return!1;c.event.add(this,"click._submit keypress._submit",function(a){a=a.target;(a=c.nodeName(a,"input")||c.nodeName(a,"button")?a.form:n)&&!a._submit_attached&&(c.event.add(a,"submit._submit",function(a){a._submit_bubble=!0}),a._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&
(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&c.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(c.nodeName(this,"form"))return!1;c.event.remove(this,"._submit")}});c.support.changeBubbles||(c.event.special.change={setup:function(){if(la.test(this.nodeName)){if("checkbox"===this.type||"radio"===this.type)c.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),c.event.add(this,"click._change",function(a){this._just_changed&&
!a.isTrigger&&(this._just_changed=!1,c.event.simulate("change",this,a,!0))});return!1}c.event.add(this,"beforeactivate._change",function(a){a=a.target;la.test(a.nodeName)&&!a._change_attached&&(c.event.add(a,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&c.event.simulate("change",this.parentNode,a,!0)}),a._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,
arguments)},teardown:function(){c.event.remove(this,"._change");return la.test(this.nodeName)}});c.support.focusinBubbles||c.each({focus:"focusin",blur:"focusout"},function(a,b){var e=0,d=function(a){c.event.simulate(b,a.target,c.event.fix(a),!0)};c.event.special[b]={setup:function(){0===e++&&m.addEventListener(a,d,!0)},teardown:function(){0===--e&&m.removeEventListener(a,d,!0)}}});c.fn.extend({on:function(a,b,e,d,f){var g,k;if("object"==typeof a){"string"!=typeof b&&(e=e||b,b=n);for(k in a)this.on(k,
b,e,a[k],f);return this}null==e&&null==d?(d=b,e=b=n):null==d&&("string"==typeof b?(d=e,e=n):(d=e,e=b,b=n));if(!1===d)d=I;else if(!d)return this;1===f&&(g=d,d=function(a){c().off(a);return g.apply(this,arguments)},d.guid=g.guid||(g.guid=c.guid++));return this.each(function(){c.event.add(this,a,d,e,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,e){if(a&&a.preventDefault&&a.handleObj){var d=a.handleObj;c(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,
d.selector,d.handler);return this}if("object"==typeof a){for(d in a)this.off(d,b,a[d]);return this}if(!1===b||"function"==typeof b)e=b,b=n;!1===e&&(e=I);return this.each(function(){c.event.remove(this,a,e,b)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,e){c(this.context).on(a,this.selector,b,e);return this},die:function(a,b){c(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,
a,c,d)},undelegate:function(a,b,c){return 1==arguments.length?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return c.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,e=a.guid||c.guid++,d=0,f=function(e){var f=(c._data(this,"lastToggle"+a.guid)||0)%d;c._data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||!1};for(f.guid=e;d<b.length;)b[d++].guid=
e;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){c.fn[b]=function(a,c){null==c&&(c=a,a=null);return 0<arguments.length?this.on(b,null,a,c):this.trigger(b)};c.attrFn&&(c.attrFn[b]=!0);yb.test(b)&&(c.event.fixHooks[b]=c.event.keyHooks);
zb.test(b)&&(c.event.fixHooks[b]=c.event.mouseHooks)});(function(){function a(a,b,c,e,f,g){f=0;for(var k=e.length;f<k;f++){var h=e[f];if(h){for(var l=!1,h=h[a];h;){if(h[d]===c){l=e[h.sizset];break}if(1===h.nodeType)if(g||(h[d]=c,h.sizset=f),"string"!=typeof b){if(h===b){l=!0;break}}else if(0<q.filter(b,[h]).length){l=h;break}h=h[a]}e[f]=l}}}function b(a,b,c,e,f,g){f=0;for(var k=e.length;f<k;f++){var h=e[f];if(h){for(var l=!1,h=h[a];h;){if(h[d]===c){l=e[h.sizset];break}1===h.nodeType&&!g&&(h[d]=c,
h.sizset=f);if(h.nodeName.toLowerCase()===b){l=h;break}h=h[a]}e[f]=l}}}var e=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),f=0,g=Object.prototype.toString,k=!1,h=!0,l=/\\/g,p=/\r\n/g,x=/\W/;[0,0].sort(function(){h=!1;return 0});var q=function(a,b,c,d){c=c||[];var f=b=b||m;if(1!==b.nodeType&&9!==b.nodeType)return[];if(!a||"string"!=typeof a)return c;var k,h,l,p,n,
x,s=!0,t=q.isXML(b),v=[],u=a;do if(e.exec(""),k=e.exec(u))if(u=k[3],v.push(k[1]),k[2]){p=k[3];break}while(k);if(1<v.length&&A.exec(a))if(2===v.length&&r.relative[v[0]])h=C(v[0]+v[1],b,d);else for(h=r.relative[v[0]]?[b]:q(v.shift(),b);v.length;)a=v.shift(),r.relative[a]&&(a+=v.shift()),h=C(a,h,d);else if(!d&&1<v.length&&9===b.nodeType&&!t&&r.match.ID.test(v[0])&&!r.match.ID.test(v[v.length-1])&&(n=q.find(v.shift(),b,t),b=n.expr?q.filter(n.expr,n.set)[0]:n.set[0]),b)for(n=d?{expr:v.pop(),set:w(d)}:
q.find(v.pop(),1!==v.length||"~"!==v[0]&&"+"!==v[0]||!b.parentNode?b:b.parentNode,t),h=n.expr?q.filter(n.expr,n.set):n.set,0<v.length?l=w(h):s=!1;v.length;)k=x=v.pop(),r.relative[x]?k=v.pop():x="",null==k&&(k=b),r.relative[x](l,k,t);else l=[];l||(l=h);l||q.error(x||a);if("[object Array]"===g.call(l))if(s)if(b&&1===b.nodeType)for(a=0;null!=l[a];a++)l[a]&&(!0===l[a]||1===l[a].nodeType&&q.contains(b,l[a]))&&c.push(h[a]);else for(a=0;null!=l[a];a++)l[a]&&1===l[a].nodeType&&c.push(h[a]);else c.push.apply(c,
l);else w(l,c);p&&(q(p,f,c,d),q.uniqueSort(c));return c};q.uniqueSort=function(a){if(G&&(k=h,a.sort(G),k))for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1);return a};q.matches=function(a,b){return q(a,null,null,b)};q.matchesSelector=function(a,b){return 0<q(b,null,null,[a]).length};q.find=function(a,b,c){var e,d,f,g,k,h;if(!a)return[];d=0;for(f=r.order.length;d<f;d++)if(k=r.order[d],g=r.leftMatch[k].exec(a))if(h=g[1],g.splice(1,1),"\\"!==h.substr(h.length-1)&&(g[1]=(g[1]||"").replace(l,""),
e=r.find[k](g,b,c),null!=e)){a=a.replace(r.match[k],"");break}e||(e="undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName("*"):[]);return{set:e,expr:a}};q.filter=function(a,b,c,e){for(var d,f,g,k,h,l,p,m,x=a,t=[],s=b,u=b&&b[0]&&q.isXML(b[0]);a&&b.length;){for(g in r.filter)if(null!=(d=r.leftMatch[g].exec(a))&&d[2]&&(l=r.filter[g],h=d[1],f=!1,d.splice(1,1),"\\"!==h.substr(h.length-1))){s===t&&(t=[]);if(r.preFilter[g])if(d=r.preFilter[g](d,s,c,t,e,u),!d)f=k=!0;else if(!0===d)continue;if(d)for(p=
0;null!=(h=s[p]);p++)h&&(k=l(h,d,p,s),m=e^k,c&&null!=k?m?f=!0:s[p]=!1:m&&(t.push(h),f=!0));if(k!==n){c||(s=t);a=a.replace(r.match[g],"");if(!f)return[];break}}if(a===x)if(null==f)q.error(a);else break;x=a}return s};q.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};var s=q.getText=function(a){var b,c;b=a.nodeType;var d="";if(b)if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;if("string"==typeof a.innerText)return a.innerText.replace(p,"");
for(a=a.firstChild;a;a=a.nextSibling)d+=s(a)}else{if(3===b||4===b)return a.nodeValue}else for(b=0;c=a[b];b++)8!==c.nodeType&&(d+=s(c));return d},r=q.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c="string"==typeof b,d=c&&!x.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,e=a.length,f;d<e;d++)if(f=a[d]){for(;(f=f.previousSibling)&&1!==f.nodeType;);
a[d]=c||f&&f.nodeName.toLowerCase()===b?f||!1:f===b}c&&q.filter(b,a,!0)},">":function(a,b){var c,d="string"==typeof b,e=0,f=a.length;if(d&&!x.test(b))for(b=b.toLowerCase();e<f;e++){if(c=a[e])c=c.parentNode,a[e]=c.nodeName.toLowerCase()===b?c:!1}else{for(;e<f;e++)(c=a[e])&&(a[e]=d?c.parentNode:c.parentNode===b);d&&q.filter(b,a,!0)}},"":function(c,d,e){var g,k=f++,h=a;"string"==typeof d&&!x.test(d)&&(d=d.toLowerCase(),g=d,h=b);h("parentNode",d,k,c,g,e)},"~":function(c,d,e){var g,k=f++,h=a;"string"==
typeof d&&!x.test(d)&&(d=d.toLowerCase(),g=d,h=b);h("previousSibling",d,k,c,g,e)}},find:{ID:function(a,b,c){if("undefined"!=typeof b.getElementById&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if("undefined"!=typeof b.getElementsByName){for(var c=[],d=b.getElementsByName(a[1]),e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return 0===c.length?null:c}},TAG:function(a,b){if("undefined"!=typeof b.getElementsByTagName)return b.getElementsByTagName(a[1])}},
preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(l,"")+" ";if(f)return a;f=0;for(var g;null!=(g=b[f]);f++)g&&(e^(g.className&&0<=(" "+g.className+" ").replace(/[\t\n\r]/g," ").indexOf(a))?c||d.push(g):c&&(b[f]=!1));return!1},ID:function(a){return a[1].replace(l,"")},TAG:function(a,b){return a[1].replace(l,"").toLowerCase()},CHILD:function(a){if("nth"===a[1]){a[2]||q.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===a[2]&&"2n"||"odd"===a[2]&&"2n+1"||
!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}else a[2]&&q.error(a[0]);a[0]=f++;return a},ATTR:function(a,b,c,d,e,f){b=a[1]=a[1].replace(l,"");!f&&r.attrMap[b]&&(a[1]=r.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(l,"");"~="===a[2]&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,c,d,f){if("not"===a[1])if(1<(e.exec(a[3])||"").length||/^\w/.test(a[3]))a[3]=q(a[3],null,null,b);else return a=q.filter(a[3],b,c,1^f),c||d.push.apply(d,a),!1;else if(r.match.POS.test(a[0])||r.match.CHILD.test(a[0]))return!0;
return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return!1===a.disabled&&"hidden"!==a.type},disabled:function(a){return!0===a.disabled},checked:function(a){return!0===a.checked},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return!0===a.selected},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!q(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),
c=a.type;return"input"===a.nodeName.toLowerCase()&&"text"===c&&(b===c||null===b)},radio:function(a){return"input"===a.nodeName.toLowerCase()&&"radio"===a.type},checkbox:function(a){return"input"===a.nodeName.toLowerCase()&&"checkbox"===a.type},file:function(a){return"input"===a.nodeName.toLowerCase()&&"file"===a.type},password:function(a){return"input"===a.nodeName.toLowerCase()&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"submit"===a.type},
image:function(a){return"input"===a.nodeName.toLowerCase()&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return 0===b},last:function(a,b,c,d){return b===d.length-
1},even:function(a,b){return 0===b%2},odd:function(a,b){return 1===b%2},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=r.filters[e];if(f)return f(a,c,b,d);if("contains"===e)return 0<=(a.textContent||a.innerText||s([a])||"").indexOf(b[3]);if("not"===e){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}q.error(e)},CHILD:function(a,b){var c,
e,f,g,k,h;c=b[1];h=a;switch(c){case "only":case "first":for(;h=h.previousSibling;)if(1===h.nodeType)return!1;if("first"===c)return!0;h=a;case "last":for(;h=h.nextSibling;)if(1===h.nodeType)return!1;return!0;case "nth":c=b[2];e=b[3];if(1===c&&0===e)return!0;f=b[0];if((g=a.parentNode)&&(g[d]!==f||!a.nodeIndex)){k=0;for(h=g.firstChild;h;h=h.nextSibling)1===h.nodeType&&(h.nodeIndex=++k);g[d]=f}h=a.nodeIndex-e;return 0===c?0===h:0===h%c&&0<=h/c}},ID:function(a,b){return 1===a.nodeType&&a.getAttribute("id")===
b},TAG:function(a,b){return"*"===b&&1===a.nodeType||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return-1<(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)},ATTR:function(a,b){var c=b[1],c=q.attr?q.attr(a,c):r.attrHandle[c]?r.attrHandle[c](a):null!=a[c]?a[c]:a.getAttribute(c),d=c+"",e=b[2],f=b[4];return null==c?"!="===e:!e&&q.attr?null!=c:"="===e?d===f:"*="===e?0<=d.indexOf(f):"~="===e?0<=(" "+d+" ").indexOf(f):f?"!="===e?d!==f:"^="===e?0===d.indexOf(f):"$="===e?d.substr(d.length-
f.length)===f:"|="===e?d===f||d.substr(0,f.length+1)===f+"-":!1:d&&!1!==c},POS:function(a,b,c,d){var e=r.setFilters[b[2]];if(e)return e(a,c,b,d)}}},A=r.match.POS,z=function(a,b){return"\\"+(b-0+1)},t;for(t in r.match)r.match[t]=RegExp(r.match[t].source+/(?![^\[]*\])(?![^\(]*\))/.source),r.leftMatch[t]=RegExp(/(^(?:.|\r|\n)*?)/.source+r.match[t].source.replace(/\\(\d+)/g,z));r.match.globalPOS=A;var w=function(a,b){a=Array.prototype.slice.call(a,0);return b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(m.documentElement.childNodes,
0)[0].nodeType}catch(B){w=function(a,b){var c=0,d=b||[];if("[object Array]"===g.call(a))Array.prototype.push.apply(d,a);else if("number"==typeof a.length)for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var G,u;m.documentElement.compareDocumentPosition?G=function(a,b){return a===b?(k=!0,0):a.compareDocumentPosition&&b.compareDocumentPosition?a.compareDocumentPosition(b)&4?-1:1:a.compareDocumentPosition?-1:1}:(G=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&
b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[];c=a.parentNode;d=b.parentNode;var g=c;if(c===d)return u(a,b);if(!c)return-1;if(!d)return 1;for(;g;)e.unshift(g),g=g.parentNode;for(g=d;g;)f.unshift(g),g=g.parentNode;c=e.length;d=f.length;for(g=0;g<c&&g<d;g++)if(e[g]!==f[g])return u(e[g],f[g]);return g===c?u(a,f[g],-1):u(e[g],b,1)},u=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});(function(){var a=m.createElement("div"),b="script"+
(new Date).getTime(),c=m.documentElement;a.innerHTML="<a name='"+b+"'/>";c.insertBefore(a,c.firstChild);m.getElementById(b)&&(r.find.ID=function(a,b,c){if("undefined"!=typeof b.getElementById&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||"undefined"!=typeof b.getAttributeNode&&b.getAttributeNode("id").nodeValue===a[1]?[b]:n:[]},r.filter.ID=function(a,b){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return 1===a.nodeType&&c&&c.nodeValue===b});c.removeChild(a);c=a=null})();
(function(){var a=m.createElement("div");a.appendChild(m.createComment(""));0<a.getElementsByTagName("*").length&&(r.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if("*"===a[1]){for(var d=[],e=0;c[e];e++)1===c[e].nodeType&&d.push(c[e]);c=d}return c});a.innerHTML="<a href='#'></a>";a.firstChild&&"undefined"!=typeof a.firstChild.getAttribute&&"#"!==a.firstChild.getAttribute("href")&&(r.attrHandle.href=function(a){return a.getAttribute("href",2)});a=null})();m.querySelectorAll&&function(){var a=
q,b=m.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||0!==b.querySelectorAll(".TEST").length){q=function(b,c,d,e){c=c||m;if(!e&&!q.isXML(c)){var f=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(f&&(1===c.nodeType||9===c.nodeType)){if(f[1])return w(c.getElementsByTagName(b),d);if(f[2]&&r.find.CLASS&&c.getElementsByClassName)return w(c.getElementsByClassName(f[2]),d)}if(9===c.nodeType){if("body"===b&&c.body)return w([c.body],d);if(f&&f[3]){var g=c.getElementById(f[3]);
if(!g||!g.parentNode)return w([],d);if(g.id===f[3])return w([g],d)}try{return w(c.querySelectorAll(b),d)}catch(k){}}else if(1===c.nodeType&&"object"!==c.nodeName.toLowerCase()){var f=c,h=(g=c.getAttribute("id"))||"__sizzle__",l=c.parentNode,p=/^\s*[+~]/.test(b);g?h=h.replace(/'/g,"\\$&"):c.setAttribute("id",h);p&&l&&(c=c.parentNode);try{if(!p||l)return w(c.querySelectorAll("[id='"+h+"'] "+b),d)}catch(n){}finally{g||f.removeAttribute("id")}}}return a(b,c,d,e)};for(var c in a)q[c]=a[c];b=null}}();(function(){var a=
m.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(m.createElement("div"),"div"),d=!1;try{b.call(m.documentElement,"[test!='']:sizzle")}catch(e){d=!0}q.matchesSelector=function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!q.isXML(a))try{if(d||!r.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&11!==a.document.nodeType)return f}}catch(g){}return 0<q(e,null,null,[a]).length}}})();(function(){var a=
m.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";a.getElementsByClassName&&0!==a.getElementsByClassName("e").length&&(a.lastChild.className="e",1!==a.getElementsByClassName("e").length&&(r.order.splice(1,0,"CLASS"),r.find.CLASS=function(a,b,c){if("undefined"!=typeof b.getElementsByClassName&&!c)return b.getElementsByClassName(a[1])},a=null))})();m.documentElement.contains?q.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:m.documentElement.compareDocumentPosition?
q.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:q.contains=function(){return!1};q.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1};var C=function(a,b,c){var d,e=[],f="";for(b=b.nodeType?[b]:b;d=r.match.PSEUDO.exec(a);)f+=d[0],a=a.replace(r.match.PSEUDO,"");a=r.relative[a]?a+"*":a;d=0;for(var g=b.length;d<g;d++)q(a,b[d],e,c);return q.filter(f,e)};q.attr=c.attr;q.selectors.attrMap={};c.find=q;c.expr=q.selectors;c.expr[":"]=c.expr.filters;
c.unique=q.uniqueSort;c.text=q.getText;c.isXMLDoc=q.isXML;c.contains=q.contains})();var Cb=/Until$/,Db=/^(?:parents|prevUntil|prevAll)/,Eb=/,/,mb=/^.[^:#\[\.,]*$/,Fb=Array.prototype.slice,Va=c.expr.match.globalPOS,Gb={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({find:function(a){var b=this,e,d;if("string"!=typeof a)return c(a).filter(function(){e=0;for(d=b.length;e<d;e++)if(c.contains(b[e],this))return!0});var f=this.pushStack("","find",a),g,k,h;e=0;for(d=this.length;e<d;e++)if(g=f.length,
c.find(a,this[e],f),0<e)for(k=g;k<f.length;k++)for(h=0;h<g;h++)if(f[h]===f[k]){f.splice(k--,1);break}return f},has:function(a){var b=c(a);return this.filter(function(){for(var a=0,d=b.length;a<d;a++)if(c.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(Fa(this,a,!1),"not",a)},filter:function(a){return this.pushStack(Fa(this,a,!0),"filter",a)},is:function(a){return!!a&&("string"==typeof a?Va.test(a)?0<=c(a,this.context).index(this[0]):0<c.filter(a,this).length:0<this.filter(a).length)},
closest:function(a,b){var e=[],d,f,g=this[0];if(c.isArray(a)){for(f=1;g&&g.ownerDocument&&g!==b;){for(d=0;d<a.length;d++)c(g).is(a[d])&&e.push({selector:a[d],elem:g,level:f});g=g.parentNode;f++}return e}var k=Va.test(a)||"string"!=typeof a?c(a,b||this.context):0;d=0;for(f=this.length;d<f;d++)for(g=this[d];g;){if(k?-1<k.index(g):c.find.matchesSelector(g,a)){e.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||11===g.nodeType)break}e=1<e.length?c.unique(e):e;return this.pushStack(e,"closest",
a)},index:function(a){return a?"string"==typeof a?c.inArray(this[0],c(a)):c.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var e="string"==typeof a?c(a,b):c.makeArray(a&&a.nodeType?[a]:a),d=c.merge(this.get(),e);return this.pushStack(Ga(e[0])||Ga(d[0])?d:c.unique(d))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},parents:function(a){return c.dir(a,"parentNode")},
parentsUntil:function(a,b,e){return c.dir(a,"parentNode",e)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,e){return c.dir(a,"nextSibling",e)},prevUntil:function(a,b,e){return c.dir(a,"previousSibling",e)},siblings:function(a){return c.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return c.sibling(a.firstChild)},
contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(e,d){var f=c.map(this,b,e);Cb.test(a)||(d=e);d&&"string"==typeof d&&(f=c.filter(d,f));f=1<this.length&&!Gb[a]?c.unique(f):f;(1<this.length||Eb.test(d))&&Db.test(a)&&(f=f.reverse());return this.pushStack(f,a,Fb.call(arguments).join(","))}});c.extend({filter:function(a,b,e){e&&(a=":not("+a+")");return 1===b.length?c.find.matchesSelector(b[0],a)?[b[0]]:
[]:c.find.matches(a,b)},dir:function(a,b,e){var d=[];for(a=a[b];a&&9!==a.nodeType&&(e===n||1!==a.nodeType||!c(a).is(e));)1===a.nodeType&&d.push(a),a=a[b];return d},nth:function(a,b,c,d){b=b||1;for(d=0;a&&(1!==a.nodeType||++d!==b);a=a[c]);return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
Hb=/ jQuery\d+="(?:\d+|null)"/g,ma=/^\s+/,Wa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Xa=/<([\w:]+)/,Ib=/<tbody/i,Jb=/<|&#?\w+;/,Kb=/<(?:script|style)/i,Lb=/<(?:script|object|embed|option|style)/i,Ya=RegExp("<(?:"+Ea+")[\\s/>]","i"),Za=/checked\s*(?:[^=]|=\s*.checked.)/i,$a=/\/(java|ecma)script/i,Mb=/^\s*<!(?:\[CDATA\[|\-\-)/,B={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>",
"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},na=Da(m);B.optgroup=B.option;B.tbody=B.tfoot=B.colgroup=B.caption=B.thead;B.th=B.td;c.support.htmlSerialize||(B._default=[1,"div<div>","</div>"]);c.fn.extend({text:function(a){return c.access(this,function(a){return a===n?c.text(this):this.empty().append((this[0]&&this[0].ownerDocument||m).createTextNode(a))},null,a,
arguments.length)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapAll(a.call(this,b))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return c.isFunction(a)?this.each(function(b){c(this).wrapInner(a.call(this,b))}):this.each(function(){var b=c(this),e=b.contents();
e.length?e.wrapAll(a):b.append(a)})},wrap:function(a){var b=c.isFunction(a);return this.each(function(e){c(this).wrapAll(b?a.call(this,e):a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&
this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=c.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c.clean(arguments));return a}},remove:function(a,
b){for(var e=0,d;null!=(d=this[e]);e++)if(!a||c.filter(a,[d]).length)!b&&1===d.nodeType&&(c.cleanData(d.getElementsByTagName("*")),c.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;null!=(b=this[a]);a++)for(1===b.nodeType&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=null==a?!1:a;b=null==b?a:b;return this.map(function(){return c.clone(this,a,b)})},html:function(a){return c.access(this,
function(a){var e=this[0]||{},d=0,f=this.length;if(a===n)return 1===e.nodeType?e.innerHTML.replace(Hb,""):null;if("string"==typeof a&&!(Kb.test(a)||!c.support.leadingWhitespace&&ma.test(a)||B[(Xa.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(Wa,"<$1></$2>");try{for(;d<f;d++)e=this[d]||{},1===e.nodeType&&(c.cleanData(e.getElementsByTagName("*")),e.innerHTML=a);e=0}catch(g){}}e&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var e=
c(this),d=e.html();e.replaceWith(a.call(this,b,d))});"string"!=typeof a&&(a=c(a).detach());return this.each(function(){var b=this.nextSibling,e=this.parentNode;c(this).remove();b?c(b).before(a):c(e).append(a)})}return this.length?this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,b,e){var d,f,g,k=a[0],h=[];if(!c.support.checkClone&&3===arguments.length&&"string"==typeof k&&Za.test(k))return this.each(function(){c(this).domManip(a,
b,e,!0)});if(c.isFunction(k))return this.each(function(d){var f=c(this);a[0]=k.call(this,d,b?f.html():n);f.domManip(a,b,e)});if(this[0]){g=k&&k.parentNode;c.support.parentNode&&g&&11===g.nodeType&&g.childNodes.length===this.length?d={fragment:g}:d=c.buildFragment(a,this,h);g=d.fragment;1===g.childNodes.length?f=g=g.firstChild:f=g.firstChild;if(f){b=b&&c.nodeName(f,"tr");for(var l=0,p=this.length,m=p-1;l<p;l++)e.call(b?lb(this[l],f):this[l],d.cacheable||1<p&&l<m?c.clone(g,!0,!0):g)}h.length&&c.each(h,
function(a,b){b.src?c.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):c.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Mb,"/*$0*/"));b.parentNode&&b.parentNode.removeChild(b)})}return this}});c.buildFragment=function(a,b,e){var d,f,g,k,h=a[0];b&&b[0]&&(k=b[0].ownerDocument||b[0]);k.createDocumentFragment||(k=m);1===a.length&&"string"==typeof h&&512>h.length&&k===m&&"<"===h.charAt(0)&&!(Lb.test(h)||!c.support.checkClone&&Za.test(h)||!c.support.html5Clone&&Ya.test(h))&&
(f=!0,g=c.fragments[h],g&&1!==g&&(d=g));d||(d=k.createDocumentFragment(),c.clean(a,k,d,e));f&&(c.fragments[h]=g?d:1);return{fragment:d,cacheable:f}};c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(e){var d=[];e=c(e);var f=1===this.length&&this[0].parentNode;if(f&&11===f.nodeType&&1===f.childNodes.length&&1===e.length)return e[b](this[0]),this;for(var f=0,g=e.length;f<g;f++){var k=(0<f?this.clone(!0):
this).get();c(e[f])[b](k);d=d.concat(k)}return this.pushStack(d,a,e.selector)}});c.extend({clone:function(a,b,e){var d,f,g;c.support.html5Clone||c.isXMLDoc(a)||!Ya.test("<"+a.nodeName+">")?d=a.cloneNode(!0):(d=m.createElement("div"),na.appendChild(d),d.innerHTML=a.outerHTML,d=d.firstChild);var k=d;if(!(c.support.noCloneEvent&&c.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||c.isXMLDoc(a)))for(Ba(a,k),d=Z(a),f=Z(k),g=0;d[g];++g)f[g]&&Ba(d[g],f[g]);if(b&&(Ca(a,k),e))for(d=Z(a),f=Z(k),g=0;d[g];++g)Ca(d[g],
f[g]);return k},clean:function(a,b,e,d){var f,g=[];b=b||m;"undefined"==typeof b.createElement&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||m);for(var k=0,h;null!=(h=a[k]);k++)if("number"==typeof h&&(h+=""),h){if("string"==typeof h)if(Jb.test(h)){h=h.replace(Wa,"<$1></$2>");f=(Xa.exec(h)||["",""])[1].toLowerCase();var l=B[f]||B._default,p=l[0],n=b.createElement("div"),q=na.childNodes,s;b===m?na.appendChild(n):Da(b).appendChild(n);for(n.innerHTML=l[1]+h+l[2];p--;)n=n.lastChild;if(!c.support.tbody)for(p=
Ib.test(h),l="table"!==f||p?"<table>"!==l[1]||p?[]:n.childNodes:n.firstChild&&n.firstChild.childNodes,f=l.length-1;0<=f;--f)c.nodeName(l[f],"tbody")&&!l[f].childNodes.length&&l[f].parentNode.removeChild(l[f]);!c.support.leadingWhitespace&&ma.test(h)&&n.insertBefore(b.createTextNode(ma.exec(h)[0]),n.firstChild);h=n.childNodes;n&&(n.parentNode.removeChild(n),0<q.length&&(s=q[q.length-1],s&&s.parentNode&&s.parentNode.removeChild(s)))}else h=b.createTextNode(h);var r;if(!c.support.appendChecked)if(h[0]&&
"number"==typeof(r=h.length))for(f=0;f<r;f++)za(h[f]);else za(h);h.nodeType?g.push(h):g=c.merge(g,h)}if(e)for(a=function(a){return!a.type||$a.test(a.type)},k=0;g[k];k++)b=g[k],d&&c.nodeName(b,"script")&&(!b.type||$a.test(b.type))?d.push(b.parentNode?b.parentNode.removeChild(b):b):(1===b.nodeType&&(h=c.grep(b.getElementsByTagName("script"),a),g.splice.apply(g,[k+1,0].concat(h))),e.appendChild(b));return g},cleanData:function(a){for(var b,e,d=c.cache,f=c.event.special,g=c.support.deleteExpando,k=0,
h;null!=(h=a[k]);k++)if(!h.nodeName||!c.noData[h.nodeName.toLowerCase()])if(e=h[c.expando]){if((b=d[e])&&b.events){for(var l in b.events)f[l]?c.event.remove(h,l):c.removeEvent(h,l,b.handle);b.handle&&(b.handle.elem=null)}g?delete h[c.expando]:h.removeAttribute&&h.removeAttribute(c.expando);delete d[e]}}});var oa=/alpha\([^)]*\)/i,Nb=/opacity=([^)]*)/,Ob=/([A-Z]|^ms)/g,Pb=/^[\-+]?(?:\d*\.)?\d+$/i,ga=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Qb=/^([\-+])=([\-+.\de]+)/,Rb=/^margin/,Sb={position:"absolute",
visibility:"hidden",display:"block"},L=["Top","Right","Bottom","Left"],M,ab,bb;c.fn.css=function(a,b){return c.access(this,function(a,b,f){return f!==n?c.style(a,b,f):c.css(a,b)},a,b,1<arguments.length)};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=M(a,"opacity");return""===c?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,
b,e,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g=c.camelCase(b),k=a.style,h=c.cssHooks[g];b=c.cssProps[g]||g;if(e===n)return h&&"get"in h&&(f=h.get(a,!1,d))!==n?f:k[b];d=typeof e;"string"===d&&(f=Qb.exec(e))&&(e=+(f[1]+1)*+f[2]+parseFloat(c.css(a,b)),d="number");if(!(null==e||"number"===d&&isNaN(e)||("number"===d&&!c.cssNumber[g]&&(e+="px"),h&&"set"in h&&(e=h.set(a,e))===n)))try{k[b]=e}catch(l){}}},css:function(a,b,e){var d,f;b=c.camelCase(b);f=c.cssHooks[b];b=c.cssProps[b]||b;"cssFloat"===
b&&(b="float");if(f&&"get"in f&&(d=f.get(a,!0,e))!==n)return d;if(M)return M(a,b)},swap:function(a,b,c){var d={},f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];c=c.call(a);for(f in b)a.style[f]=d[f];return c}});c.curCSS=c.css;m.defaultView&&m.defaultView.getComputedStyle&&(ab=function(a,b){var e,d,f,g,k=a.style;b=b.replace(Ob,"-$1").toLowerCase();(d=a.ownerDocument.defaultView)&&(f=d.getComputedStyle(a,null))&&(e=f.getPropertyValue(b),""===e&&!c.contains(a.ownerDocument.documentElement,a)&&(e=c.style(a,
b)));!c.support.pixelMargin&&f&&Rb.test(b)&&ga.test(e)&&(g=k.width,k.width=e,e=f.width,k.width=g);return e});m.documentElement.currentStyle&&(bb=function(a,b){var c,d,f,g=a.currentStyle&&a.currentStyle[b],k=a.style;null==g&&k&&(f=k[b])&&(g=f);ga.test(g)&&(c=k.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),k.left="fontSize"===b?"1em":g,g=k.pixelLeft+"px",k.left=c,d&&(a.runtimeStyle.left=d));return""===g?"auto":g});M=ab||bb;c.each(["height","width"],function(a,
b){c.cssHooks[b]={get:function(a,d,f){if(d)return 0!==a.offsetWidth?ya(a,b,f):c.swap(a,Sb,function(){return ya(a,b,f)})},set:function(a,b){return Pb.test(b)?b+"px":b}}});c.support.opacity||(c.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var e=a.style,d=a.currentStyle,f=c.isNumeric(b)?"alpha(opacity="+100*b+")":"",g=d&&d.filter||e.filter||"";e.zoom=1;if(1<=b&&""===c.trim(g.replace(oa,
""))&&(e.removeAttribute("filter"),d&&!d.filter))return;e.filter=oa.test(g)?g.replace(oa,f):g+" "+f}});c(function(){c.support.reliableMarginRight||(c.cssHooks.marginRight={get:function(a,b){return c.swap(a,{display:"inline-block"},function(){return b?M(a,"margin-right"):a.style.marginRight})}})});c.expr&&c.expr.filters&&(c.expr.filters.hidden=function(a){var b=a.offsetHeight;return 0===a.offsetWidth&&0===b||!c.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||c.css(a,"display"))},
c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)});c.each({margin:"",padding:"",border:"Width"},function(a,b){c.cssHooks[a+b]={expand:function(c){var d="string"==typeof c?c.split(" "):[c],f={};for(c=0;4>c;c++)f[a+L[c]+b]=d[c]||d[c-2]||d[0];return f}}});var Tb=/%20/g,kb=/\[\]$/,cb=/\r?\n/g,Ub=/#.*$/,Vb=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Wb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Xb=/^(?:GET|HEAD)$/,Yb=/^\/\//,
db=/\?/,Zb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,$b=/^(?:select|textarea)/i,xa=/\s+/,ac=/([?&])_=[^&]*/,eb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,fb=c.fn.load,fa={},gb={},N,J,hb=["*/"]+["*"];try{N=rb.href}catch(gc){N=m.createElement("a"),N.href="",N=N.href}J=eb.exec(N.toLowerCase())||[];c.fn.extend({load:function(a,b,e){if("string"!=typeof a&&fb)return fb.apply(this,arguments);if(!this.length)return this;var d=a.indexOf(" ");if(0<=d){var f=a.slice(d,a.length);a=a.slice(0,
d)}d="GET";b&&(c.isFunction(b)?(e=b,b=n):"object"==typeof b&&(b=c.param(b,c.ajaxSettings.traditional),d="POST"));var g=this;c.ajax({url:a,type:d,dataType:"html",data:b,complete:function(a,b,d){d=a.responseText;a.isResolved()&&(a.done(function(a){d=a}),g.html(f?c("<div>").append(d.replace(Zb,"")).find(f):d));e&&g.each(e,[d,b,a])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):
this}).filter(function(){return this.name&&!this.disabled&&(this.checked||$b.test(this.nodeName)||Wb.test(this.type))}).map(function(a,b){var e=c(this).val();return null==e?null:c.isArray(e)?c.map(e,function(a,c){return{name:b.name,value:a.replace(cb,"\r\n")}}):{name:b.name,value:e.replace(cb,"\r\n")}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(a){return this.on(b,a)}});c.each(["get","post"],function(a,b){c[b]=function(a,
d,f,g){c.isFunction(d)&&(g=g||f,f=d,d=n);return c.ajax({type:b,url:a,data:d,success:f,dataType:g})}});c.extend({getScript:function(a,b){return c.get(a,n,b,"script")},getJSON:function(a,b,e){return c.get(a,b,e,"json")},ajaxSetup:function(a,b){b?va(a,c.ajaxSettings):(b=a,a=c.ajaxSettings);va(a,b);return a},ajaxSettings:{url:N,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(J[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,
async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":hb},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":s.String,"text html":!0,"text json":c.parseJSON,"text xml":c.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:wa(fa),ajaxTransport:wa(gb),ajax:function(a,b){function e(a,b,e,m){if(2!==w){w=2;z&&clearTimeout(z);A=n;s=m||"";u.readyState=0<a?
4:0;var q,r,x;m=b;if(e){var t=d,y=u,G=t.contents,C=t.dataTypes,H=t.responseFields,v,E,F,L;for(E in H)E in e&&(y[H[E]]=e[E]);for(;"*"===C[0];)C.shift(),v===n&&(v=t.mimeType||y.getResponseHeader("content-type"));if(v)for(E in G)if(G[E]&&G[E].test(v)){C.unshift(E);break}if(C[0]in e)F=C[0];else{for(E in e){if(!C[0]||t.converters[E+" "+C[0]]){F=E;break}L||(L=E)}F=F||L}F?(F!==C[0]&&C.unshift(F),e=e[F]):e=void 0}else e=n;if(200<=a&&300>a||304===a){if(d.ifModified){if(v=u.getResponseHeader("Last-Modified"))c.lastModified[p]=
v;if(v=u.getResponseHeader("Etag"))c.etag[p]=v}if(304===a)m="notmodified",q=!0;else try{v=d;v.dataFilter&&(e=v.dataFilter(e,v.dataType));var N=v.dataTypes;E={};var J,K,P=N.length,M,Q=N[0],I,O,R,S,V;for(J=1;J<P;J++){if(1===J)for(K in v.converters)"string"==typeof K&&(E[K.toLowerCase()]=v.converters[K]);I=Q;Q=N[J];if("*"===Q)Q=I;else if("*"!==I&&I!==Q){O=I+" "+Q;R=E[O]||E["* "+Q];if(!R)for(S in V=n,E)if(M=S.split(" "),M[0]===I||"*"===M[0])if(V=E[M[1]+" "+Q]){S=E[S];!0===S?R=V:!0===V&&(R=S);break}R||
V||c.error("No conversion from "+O.replace(" "," to "));!0!==R&&(e=R?R(e):V(S(e)))}}r=e;m="success";q=!0}catch(T){m="parsererror",x=T}}else if(x=m,!m||a)m="error",0>a&&(a=0);u.status=a;u.statusText=""+(b||m);q?k.resolveWith(f,[r,m,u]):k.rejectWith(f,[u,m,x]);u.statusCode(l);l=n;B&&g.trigger("ajax"+(q?"Success":"Error"),[u,d,q?r:x]);h.fireWith(f,[u,m]);B&&(g.trigger("ajaxComplete",[u,d]),--c.active||c.event.trigger("ajaxStop"))}}"object"==typeof a&&(b=a,a=n);b=b||{};var d=c.ajaxSetup({},b),f=d.context||
d,g=f!==d&&(f.nodeType||f instanceof c)?c(f):c.event,k=c.Deferred(),h=c.Callbacks("once memory"),l=d.statusCode||{},p,m={},q={},s,r,A,z,t,w=0,B,G,u={readyState:0,setRequestHeader:function(a,b){if(!w){var c=a.toLowerCase();a=q[c]=q[c]||a;m[a]=b}return this},getAllResponseHeaders:function(){return 2===w?s:null},getResponseHeader:function(a){var b;if(2===w){if(!r)for(r={};b=Vb.exec(s);)r[b[1].toLowerCase()]=b[2];b=r[a.toLowerCase()]}return b===n?null:b},overrideMimeType:function(a){w||(d.mimeType=a);
return this},abort:function(a){a=a||"abort";A&&A.abort(a);e(0,a);return this}};k.promise(u);u.success=u.done;u.error=u.fail;u.complete=h.add;u.statusCode=function(a){if(a){var b;if(2>w)for(b in a)l[b]=[l[b],a[b]];else b=a[u.status],u.then(b,b)}return this};d.url=((a||d.url)+"").replace(Ub,"").replace(Yb,J[1]+"//");d.dataTypes=c.trim(d.dataType||"*").toLowerCase().split(xa);null==d.crossDomain&&(t=eb.exec(d.url.toLowerCase()),d.crossDomain=!(!t||t[1]==J[1]&&t[2]==J[2]&&(t[3]||("http:"===t[1]?80:443))==
(J[3]||("http:"===J[1]?80:443))));d.data&&d.processData&&"string"!=typeof d.data&&(d.data=c.param(d.data,d.traditional));Y(fa,d,b,u);if(2===w)return!1;B=d.global;d.type=d.type.toUpperCase();d.hasContent=!Xb.test(d.type);B&&0===c.active++&&c.event.trigger("ajaxStart");if(!d.hasContent&&(d.data&&(d.url+=(db.test(d.url)?"&":"?")+d.data,delete d.data),p=d.url,!1===d.cache)){t=c.now();var C=d.url.replace(ac,"$1_="+t);d.url=C+(C===d.url?(db.test(d.url)?"&":"?")+"_="+t:"")}(d.data&&d.hasContent&&!1!==d.contentType||
b.contentType)&&u.setRequestHeader("Content-Type",d.contentType);d.ifModified&&(p=p||d.url,c.lastModified[p]&&u.setRequestHeader("If-Modified-Since",c.lastModified[p]),c.etag[p]&&u.setRequestHeader("If-None-Match",c.etag[p]));u.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+hb+"; q=0.01":""):d.accepts["*"]);for(G in d.headers)u.setRequestHeader(G,d.headers[G]);if(d.beforeSend&&(!1===d.beforeSend.call(f,u,d)||2===w))return u.abort(),
!1;for(G in{success:1,error:1,complete:1})u[G](d[G]);if(A=Y(gb,d,b,u)){u.readyState=1;B&&g.trigger("ajaxSend",[u,d]);d.async&&0<d.timeout&&(z=setTimeout(function(){u.abort("timeout")},d.timeout));try{w=1,A.send(m,e)}catch(y){if(2>w)e(-1,y);else throw y;}}else e(-1,"No Transport");return u},param:function(a,b){var e=[],d=function(a,b){b=c.isFunction(b)?b():b;e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};b===n&&(b=c.ajaxSettings.traditional);if(c.isArray(a)||a.jquery&&!c.isPlainObject(a))c.each(a,
function(){d(this.name,this.value)});else for(var f in a)ea(f,a[f],b,d);return e.join("&").replace(Tb,"+")}});c.extend({active:0,lastModified:{},etag:{}});var bc=c.now(),ba=/(\=)\?(&|$)|\?\?/i;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return c.expando+"_"+bc++}});c.ajaxPrefilter("json jsonp",function(a,b,e){b="string"==typeof a.data&&/^application\/x\-www\-form\-urlencoded/.test(a.contentType);if("jsonp"===a.dataTypes[0]||!1!==a.jsonp&&(ba.test(a.url)||b&&ba.test(a.data))){var d,f=a.jsonpCallback=
c.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,g=s[f],k=a.url,h=a.data,l="$1"+f+"$2";!1!==a.jsonp&&(k=k.replace(ba,l),a.url===k&&(b&&(h=h.replace(ba,l)),a.data===h&&(k+=(/\?/.test(k)?"&":"?")+a.jsonp+"="+f)));a.url=k;a.data=h;s[f]=function(a){d=[a]};e.always(function(){s[f]=g;d&&c.isFunction(g)&&s[f](d[0])});a.converters["script json"]=function(){d||c.error(f+" was not called");return d[0]};a.dataTypes[0]="json";return"script"}});c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){c.globalEval(a);return a}}});c.ajaxPrefilter("script",function(a){a.cache===n&&(a.cache=!1);a.crossDomain&&(a.type="GET",a.global=!1)});c.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=m.head||m.getElementsByTagName("head")[0]||m.documentElement;return{send:function(d,f){b=m.createElement("script");b.async="async";a.scriptCharset&&(b.charset=a.scriptCharset);b.src=a.url;b.onload=b.onreadystatechange=function(a,
d){if(d||!b.readyState||/loaded|complete/.test(b.readyState))b.onload=b.onreadystatechange=null,c&&b.parentNode&&c.removeChild(b),b=n,d||f(200,"success")};c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(0,1)}}}});var pa=s.ActiveXObject?function(){for(var a in O)O[a](0,1)}:!1,cc=0,O;c.ajaxSettings.xhr=s.ActiveXObject?function(){var a;if(!(a=!this.isLocal&&ua()))a:{try{a=new s.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:ua;(function(a){c.extend(c.support,{ajax:!!a,
cors:!!a&&"withCredentials"in a})})(c.ajaxSettings.xhr());c.support.ajax&&c.ajaxTransport(function(a){if(!a.crossDomain||c.support.cors){var b;return{send:function(e,d){var f=a.xhr(),g,k;a.username?f.open(a.type,a.url,a.async,a.username,a.password):f.open(a.type,a.url,a.async);if(a.xhrFields)for(k in a.xhrFields)f[k]=a.xhrFields[k];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType);a.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");try{for(k in e)f.setRequestHeader(k,
e[k])}catch(h){}f.send(a.hasContent&&a.data||null);b=function(e,k){var h,m,s,r,A;try{if(b&&(k||4===f.readyState))if(b=n,g&&(f.onreadystatechange=c.noop,pa&&delete O[g]),k)4!==f.readyState&&f.abort();else{h=f.status;s=f.getAllResponseHeaders();r={};(A=f.responseXML)&&A.documentElement&&(r.xml=A);try{r.text=f.responseText}catch(z){}try{m=f.statusText}catch(t){m=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=r.text?200:404}}catch(w){k||d(-1,w)}r&&d(h,m,r,s)};a.async&&4!==f.readyState?(g=++cc,pa&&
(O||(O={},c(s).unload(pa)),O[g]=b),f.onreadystatechange=b):b()},abort:function(){b&&b(0,1)}}}});var da={},H,K,dc=/^(?:toggle|show|hide)$/,ec=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ca,T=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],X;c.fn.extend({show:function(a,b,e){var d;if(a||0===a)return this.animate(P("show",3),a,b,e);b=0;for(e=this.length;b<e;b++)a=this[b],a.style&&(d=a.style.display,!c._data(a,"olddisplay")&&
"none"===d&&(d=a.style.display=""),(""===d&&"none"===c.css(a,"display")||!c.contains(a.ownerDocument.documentElement,a))&&c._data(a,"olddisplay",sa(a.nodeName)));for(b=0;b<e;b++)if(a=this[b],a.style&&(d=a.style.display,""===d||"none"===d))a.style.display=c._data(a,"olddisplay")||"";return this},hide:function(a,b,e){if(a||0===a)return this.animate(P("hide",3),a,b,e);var d;b=0;for(e=this.length;b<e;b++)a=this[b],a.style&&(d=c.css(a,"display"),"none"!==d&&!c._data(a,"olddisplay")&&c._data(a,"olddisplay",
d));for(b=0;b<e;b++)this[b].style&&(this[b].style.display="none");return this},_toggle:c.fn.toggle,toggle:function(a,b,e){var d="boolean"==typeof a;c.isFunction(a)&&c.isFunction(b)?this._toggle.apply(this,arguments):null==a||d?this.each(function(){var b=d?a:c(this).is(":hidden");c(this)[b?"show":"hide"]()}):this.animate(P("toggle",3),a,b,e);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,e,d){function f(){!1===
g.queue&&c._mark(this);var b=c.extend({},g),d=1===this.nodeType,e=d&&c(this).is(":hidden"),f,m,n,s,r,A,z,t,w;b.animatedProperties={};for(n in a)if(f=c.camelCase(n),n!==f&&(a[f]=a[n],delete a[n]),(m=c.cssHooks[f])&&"expand"in m)for(n in s=m.expand(a[f]),delete a[f],s)n in a||(a[n]=s[n]);for(f in a){m=a[f];c.isArray(m)?(b.animatedProperties[f]=m[1],m=a[f]=m[0]):b.animatedProperties[f]=b.specialEasing&&b.specialEasing[f]||b.easing||"swing";if("hide"===m&&e||"show"===m&&!e)return b.complete.call(this);
d&&("height"===f||"width"===f)&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===c.css(this,"display")&&"none"===c.css(this,"float")&&(c.support.inlineBlockNeedsLayout&&"inline"!==sa(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"))}null!=b.overflow&&(this.style.overflow="hidden");for(n in a)d=new c.fx(this,b,n),m=a[n],dc.test(m)?(w=c._data(this,"toggle"+n)||("toggle"===m?e?"show":"hide":0),w?(c._data(this,"toggle"+n,"show"===w?"hide":"show"),
d[w]()):d[m]()):(r=ec.exec(m),A=d.cur(),r?(z=parseFloat(r[2]),t=r[3]||(c.cssNumber[n]?"":"px"),"px"!==t&&(c.style(this,n,(z||1)+t),A*=(z||1)/d.cur(),c.style(this,n,A+t)),r[1]&&(z=("-="===r[1]?-1:1)*z+A),d.custom(A,z,t)):d.custom(A,m,""));return!0}var g=c.speed(b,e,d);if(c.isEmptyObject(a))return this.each(g.complete,[!1]);a=c.extend({},a);return!1===g.queue?this.each(f):this.queue(g.queue,f)},stop:function(a,b,e){"string"!=typeof a&&(e=b,b=a,a=n);b&&!1!==a&&this.queue(a||"fx",[]);return this.each(function(){var b,
f=!1,g=c.timers,k=c._data(this);e||c._unmark(!0,this);if(null==a)for(b in k){if(k[b]&&k[b].stop&&b.indexOf(".run")===b.length-4){var h=k[b];c.removeData(this,b,!0);h.stop(e)}}else k[b=a+".run"]&&k[b].stop&&(k=k[b],c.removeData(this,b,!0),k.stop(e));for(b=g.length;b--;)g[b].elem!==this||null!=a&&g[b].queue!==a||(e?g[b](!0):g[b].saveState(),f=!0,g.splice(b,1));e&&f||c.dequeue(this,a)})}});c.each({slideDown:P("show",1),slideUp:P("hide",1),slideToggle:P("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(a,c,f){return this.animate(b,a,c,f)}});c.extend({speed:function(a,b,e){var d=a&&"object"==typeof a?c.extend({},a):{complete:e||!e&&b||c.isFunction(a)&&a,duration:a,easing:e&&b||b&&!c.isFunction(b)&&b};d.duration=c.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in c.fx.speeds?c.fx.speeds[d.duration]:c.fx.speeds._default;if(null==d.queue||!0===d.queue)d.queue="fx";d.old=d.complete;d.complete=function(a){c.isFunction(d.old)&&d.old.call(this);
d.queue?c.dequeue(this,d.queue):!1!==a&&c._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+0.5}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];
var a,b=c.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?b&&"auto"!==b?b:0:a},custom:function(a,b,e){function d(a){return f.step(a)}var f=this,g=c.fx;this.startTime=X||ta();this.end=b;this.now=this.start=a;this.pos=this.state=0;this.unit=e||this.unit||(c.cssNumber[this.prop]?"":"px");d.queue=this.options.queue;d.elem=this.elem;d.saveState=function(){c._data(f.elem,"fxshow"+f.prop)===n&&(f.options.hide?c._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&c._data(f.elem,"fxshow"+f.prop,f.end))};
d()&&c.timers.push(d)&&!ca&&(ca=setInterval(g.tick,g.interval))},show:function(){var a=c._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||c.style(this.elem,this.prop);this.options.show=!0;a!==n?this.custom(this.cur(),a):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c._data(this.elem,"fxshow"+this.prop)||c.style(this.elem,this.prop);this.options.hide=!0;this.custom(this.cur(),0)},step:function(a){var b,
e,d=X||ta(),f=!0,g=this.elem,k=this.options;if(a||d>=k.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();k.animatedProperties[this.prop]=!0;for(b in k.animatedProperties)!0!==k.animatedProperties[b]&&(f=!1);if(f){null!=k.overflow&&!c.support.shrinkWrapBlocks&&c.each(["","X","Y"],function(a,b){g.style["overflow"+b]=k.overflow[a]});k.hide&&c(g).hide();if(k.hide||k.show)for(b in k.animatedProperties)c.style(g,b,k.orig[b]),c.removeData(g,"fxshow"+b,!0),c.removeData(g,"toggle"+
b,!0);(a=k.complete)&&(k.complete=!1,a.call(g))}return!1}Infinity==k.duration?this.now=d:(e=d-this.startTime,this.state=e/k.duration,this.pos=c.easing[k.animatedProperties[this.prop]](this.state,e,0,1,k.duration),this.now=this.start+(this.end-this.start)*this.pos);this.update();return!0}};c.extend(c.fx,{tick:function(){for(var a,b=c.timers,e=0;e<b.length;e++)a=b[e],!a()&&b[e]===a&&b.splice(e--,1);b.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ca);ca=null},speeds:{slow:600,fast:200,
_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&null!=a.elem.style[a.prop]?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}});c.each(T.concat.apply([],T),function(a,b){b.indexOf("margin")&&(c.fx.step[b]=function(a){c.style(a.elem,b,Math.max(0,a.now)+a.unit)})});c.expr&&c.expr.filters&&(c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length});var qa,fc=/^t(?:able|d|h)$/i,ib=/^(?:body|html)$/i;
"getBoundingClientRect"in m.documentElement?qa=function(a,b,e,d){try{d=a.getBoundingClientRect()}catch(f){}if(!d||!c.contains(e,a))return d?{top:d.top,left:d.left}:{top:0,left:0};a=b.body;b=ra(b);return{top:d.top+(b.pageYOffset||c.support.boxModel&&e.scrollTop||a.scrollTop)-(e.clientTop||a.clientTop||0),left:d.left+(b.pageXOffset||c.support.boxModel&&e.scrollLeft||a.scrollLeft)-(e.clientLeft||a.clientLeft||0)}}:qa=function(a,b,e){var d,f=a.offsetParent,g=b.body;d=(b=b.defaultView)?b.getComputedStyle(a,
null):a.currentStyle;for(var k=a.offsetTop,h=a.offsetLeft;(a=a.parentNode)&&a!==g&&a!==e&&(!c.support.fixedPosition||"fixed"!==d.position);)d=b?b.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,h-=a.scrollLeft,a===f&&(k+=a.offsetTop,h+=a.offsetLeft,c.support.doesNotAddBorder&&(!c.support.doesAddBorderForTableAndCells||!fc.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,h+=parseFloat(d.borderLeftWidth)||0),f=a.offsetParent),c.support.subtractsBorderForOverflowNotVisible&&"visible"!==
d.overflow&&(k+=parseFloat(d.borderTopWidth)||0,h+=parseFloat(d.borderLeftWidth)||0);if("relative"===d.position||"static"===d.position)k+=g.offsetTop,h+=g.offsetLeft;c.support.fixedPosition&&"fixed"===d.position&&(k+=Math.max(e.scrollTop,g.scrollTop),h+=Math.max(e.scrollLeft,g.scrollLeft));return{top:k,left:h}};c.fn.offset=function(a){if(arguments.length)return a===n?this:this.each(function(b){c.offset.setOffset(this,a,b)});var b=this[0],e=b&&b.ownerDocument;return e?b===e.body?c.offset.bodyOffset(b):
qa(b,e,e.documentElement):null};c.offset={bodyOffset:function(a){var b=a.offsetTop,e=a.offsetLeft;c.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(c.css(a,"marginTop"))||0,e+=parseFloat(c.css(a,"marginLeft"))||0);return{top:b,left:e}},setOffset:function(a,b,e){var d=c.css(a,"position");"static"===d&&(a.style.position="relative");var f=c(a),g=f.offset(),k=c.css(a,"top"),h=c.css(a,"left"),l={},m={},n,q;("absolute"===d||"fixed"===d)&&-1<c.inArray("auto",[k,h])?(m=f.position(),n=m.top,q=m.left):
(n=parseFloat(k)||0,q=parseFloat(h)||0);c.isFunction(b)&&(b=b.call(a,e,g));null!=b.top&&(l.top=b.top-g.top+n);null!=b.left&&(l.left=b.left-g.left+q);"using"in b?b.using.call(a,l):f.css(l)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),e=this.offset(),d=ib.test(b[0].nodeName)?{top:0,left:0}:b.offset();e.top-=parseFloat(c.css(a,"marginTop"))||0;e.left-=parseFloat(c.css(a,"marginLeft"))||0;d.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;d.left+=parseFloat(c.css(b[0],
"borderLeftWidth"))||0;return{top:e.top-d.top,left:e.left-d.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||m.body;a&&!ib.test(a.nodeName)&&"static"===c.css(a,"position");)a=a.offsetParent;return a})}});c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var e=/Y/.test(b);c.fn[a]=function(d){return c.access(this,function(a,d,k){var h=ra(a);if(k===n)return h?b in h?h[b]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:
a[d];h?h.scrollTo(e?c(h).scrollLeft():k,e?k:c(h).scrollTop()):a[d]=k},a,d,arguments.length,null)}});c.each({Height:"height",Width:"width"},function(a,b){var e="client"+a,d="scroll"+a,f="offset"+a;c.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(c.css(a,b,"padding")):this[b]():null};c.fn["outer"+a]=function(a){var d=this[0];return d?d.style?parseFloat(c.css(d,b,a?"margin":"border")):this[b]():null};c.fn[b]=function(a){return c.access(this,function(a,b,g){if(c.isWindow(a))return b=
a.document,a=b.documentElement[e],c.support.boxModel&&a||b.body&&b.body[e]||a;if(9===a.nodeType)return b=a.documentElement,b[e]>=b[d]?b[e]:Math.max(a.body[d],b[d],a.body[f],b[f]);if(g===n)return a=c.css(a,b),b=parseFloat(a),c.isNumeric(b)?b:a;c(a).css(b,g)},b,a,arguments.length,null)}});s.jQuery=s.$=c;"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return c})})(window);

} //end check jQuery




//mouse wheel
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0;a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;void 0!==b.axis&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);void 0!==b.wheelDeltaY&&(g=b.wheelDeltaY/120);void 0!==b.wheelDeltaX&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,!1);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
window.define&&define("mousewheel",[],function(){return jQuery});





//jscrollpan
(function(b,ra,s){b.fn.jScrollPane=function(q){function Ba(c,q){function la(a){var d,z,r,ma,w,R=!1,S=!1;e=a;if(f===s)ma=c.scrollTop(),w=c.scrollLeft(),c.css({overflow:"hidden",padding:0}),j=c.innerWidth()+O,h=c.innerHeight(),c.width(j),f=b('<div class="jspPane" />').css("padding",ta).append(c.children()),g=b('<div class="jspContainer" />').css({width:j+"px",height:h+"px"}).append(f).appendTo(c);else{c.css("width","");if(R=e.stickToBottom)R=p-h,R=20<R&&10>R-D();if(S=e.stickToRight)S=n-j,S=20<S&&10>
S-E();if(r=c.innerWidth()+O!=j||c.outerHeight()!=h)j=c.innerWidth()+O,h=c.innerHeight(),g.css({width:j+"px",height:h+"px"});if(!r&&ua==n&&f.outerHeight()==p){c.width(j);return}ua=n;f.css("width","");c.width(j);g.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}f.css("overflow","auto");n=a.contentWidth?a.contentWidth:f[0].scrollWidth;p=f[0].scrollHeight;f.css("overflow","");na=n/j;da=p/h;x=1<da;v=1<na;if(!v&&!x)c.removeClass("jspScrollable"),f.css({top:0,width:g.width()-O}),g.unbind(oa),
f.find(":input,a").unbind("focus.jsp"),c.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),va();else{c.addClass("jspScrollable");if(a=e.maintainPosition&&(m||k))d=E(),z=D();x&&(g.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />'))),ea=g.find(">.jspVerticalBar"),
A=ea.find(">.jspTrack"),t=A.find(">.jspDrag"),e.showArrows&&(Z=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",F(0,-1)).bind("click.jsp",T),$=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",F(0,1)).bind("click.jsp",T),e.arrowScrollOnHover&&(Z.bind("mouseover.jsp",F(0,-1,Z)),$.bind("mouseover.jsp",F(0,1,$))),wa(A,e.verticalArrowPositions,Z,$)),G=h,g.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){G-=b(this).outerHeight()}),t.hover(function(){t.addClass("jspHover")},
function(){t.removeClass("jspHover")}).bind("mousedown.jsp",function(a){b("html").bind("dragstart.jsp selectstart.jsp",T);t.addClass("jspActive");var d=a.pageY-t.position().top;b("html").bind("mousemove.jsp",function(a){P(a.pageY-d,!1)}).bind("mouseup.jsp mouseleave.jsp",xa);return!1}),ya());v&&(g.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),
b('<div class="jspCap jspCapRight" />'))),fa=g.find(">.jspHorizontalBar"),B=fa.find(">.jspTrack"),u=B.find(">.jspDrag"),e.showArrows&&(aa=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",F(-1,0)).bind("click.jsp",T),ba=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",F(1,0)).bind("click.jsp",T),e.arrowScrollOnHover&&(aa.bind("mouseover.jsp",F(-1,0,aa)),ba.bind("mouseover.jsp",F(1,0,ba))),wa(B,e.horizontalArrowPositions,aa,ba)),u.hover(function(){u.addClass("jspHover")},
function(){u.removeClass("jspHover")}).bind("mousedown.jsp",function(a){b("html").bind("dragstart.jsp selectstart.jsp",T);u.addClass("jspActive");var d=a.pageX-u.position().left;b("html").bind("mousemove.jsp",function(a){U(a.pageX-d,!1)}).bind("mouseup.jsp mouseleave.jsp",xa);return!1}),y=g.innerWidth(),za());if(v&&x){r=B.outerHeight();var Aa=A.outerWidth();G-=r;b(fa).find(">.jspCap:visible,>.jspArrow").each(function(){y+=b(this).outerWidth()});y-=Aa;h-=Aa;j-=r;B.parent().append(b('<div class="jspCorner" />').css("width",
r+"px"));ya();za()}v&&f.width(g.outerWidth()-O+"px");p=f.outerHeight();da=p/h;v&&(H=Math.ceil(1/na*y),H>e.horizontalDragMaxWidth?H=e.horizontalDragMaxWidth:H<e.horizontalDragMinWidth&&(H=e.horizontalDragMinWidth),u.width(H+"px"),I=y-H,pa(k));x&&(J=Math.ceil(1/da*G),J>e.verticalDragMaxHeight?J=e.verticalDragMaxHeight:J<e.verticalDragMinHeight&&(J=e.verticalDragMinHeight),t.height(J+"px"),C=G-J,qa(m));a&&(V(S?n-j:d,!1),K(R?p-h:z,!1));f.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){ga(a.target,
!1)});g.unbind(oa).bind(oa,function(a,d,b,c){a=k;d=m;l.scrollBy(b*e.mouseWheelSpeed,-c*e.mouseWheelSpeed,!1);return a==k&&d==m});var q,sa,L,M,ca,N=!1;g.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(a){a=a.originalEvent.touches[0];q=E();sa=D();L=a.pageX;M=a.pageY;ca=!1;N=!0}).bind("touchmove.jsp",function(a){if(N){a=a.originalEvent.touches[0];var d=k,b=m;l.scrollTo(q+L-a.pageX,sa+M-a.pageY);ca=ca||5<Math.abs(L-a.pageX)||5<Math.abs(M-a.pageY);
return d==k&&b==m}}).bind("touchend.jsp",function(){N=!1}).bind("click.jsp-touchclick",function(){if(ca)return ca=!1});if(e.enableKeyboardNavigation){var Q=function(){var a=k,d=m;switch(W){case 40:l.scrollByY(e.keyboardSpeed,!1);break;case 38:l.scrollByY(-e.keyboardSpeed,!1);break;case 34:case 32:l.scrollByY(h*e.scrollPagePercent,!1);break;case 33:l.scrollByY(-h*e.scrollPagePercent,!1);break;case 39:l.scrollByX(e.keyboardSpeed,!1);break;case 37:l.scrollByX(-e.keyboardSpeed,!1)}return ha=a!=k||d!=
m},W,ha,ia=[];v&&ia.push(fa[0]);x&&ia.push(ea[0]);f.focus(function(){c.focus()});c.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(a){if(!(a.target!==this&&(!ia.length||!b(a.target).closest(ia).length))){var d=k,e=m;switch(a.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:W=a.keyCode;Q();break;case 35:K(p-h);W=null;break;case 36:K(0),W=null}ha=a.keyCode==W&&d!=k||e!=m;return!ha}}).bind("keypress.jsp",function(a){a.keyCode==W&&Q();return!ha});e.hideFocus?
(c.css("outline","none"),"hideFocus"in g[0]&&c.attr("hideFocus",!0)):(c.css("outline",""),"hideFocus"in g[0]&&c.attr("hideFocus",!1))}e.clickOnTrack&&(va(),x&&A.bind("mousedown.jsp",function(a){if(a.originalTarget===s||a.originalTarget==a.currentTarget){var d=b(this),c=d.offset(),z=a.pageY-c.top-m,r,g=!0,f=function(){var b=d.offset(),b=a.pageY-b.top-J/2,c=h*e.scrollPagePercent,w=C*c/(p-h);if(0>z)m-w>b?l.scrollByY(-c):P(b);else if(0<z)m+w<b?l.scrollByY(c):P(b);else{j();return}r=setTimeout(f,g?e.initialDelay:
e.trackClickRepeatFreq);g=!1},j=function(){r&&clearTimeout(r);r=null;b(document).unbind("mouseup.jsp",j)};f();b(document).bind("mouseup.jsp",j);return!1}}),v&&B.bind("mousedown.jsp",function(a){if(a.originalTarget===s||a.originalTarget==a.currentTarget){var d=b(this),c=d.offset(),z=a.pageX-c.left-k,r,g=!0,f=function(){var b=d.offset(),b=a.pageX-b.left-H/2,c=j*e.scrollPagePercent,h=I*c/(n-j);if(0>z)k-h>b?l.scrollByX(-c):U(b);else if(0<z)k+h<b?l.scrollByX(c):U(b);else{w();return}r=setTimeout(f,g?e.initialDelay:
e.trackClickRepeatFreq);g=!1},w=function(){r&&clearTimeout(r);r=null;b(document).unbind("mouseup.jsp",w)};f();b(document).bind("mouseup.jsp",w);return!1}}));a:if(location.hash&&1<location.hash.length){var ja,Y;d=escape(location.hash.substr(1));try{ja=b("#"+d+', a[name="'+d+'"]')}catch(ka){break a}ja.length&&f.find(d)&&(0===g.scrollTop()?Y=setInterval(function(){0<g.scrollTop()&&(ga(ja,!0),b(document).scrollTop(g.position().top),clearInterval(Y))},50):(ga(ja,!0),b(document).scrollTop(g.position().top)))}e.hijackInternalLinks&&
(b(document.body).data("jspHijack")||(b(document.body).data("jspHijack",!0),b(document.body).delegate("a[href*=#]","click",function(a){var d=this.href.substr(0,this.href.indexOf("#")),c=location.href,e;-1!==location.href.indexOf("#")&&(c=location.href.substr(0,location.href.indexOf("#")));if(d===c){d=escape(this.href.substr(this.href.indexOf("#")+1));e;try{e=b("#"+d+', a[name="'+d+'"]')}catch(z){return}e.length&&(d=e.closest(".jspScrollable"),c=d.data("jsp"),c.scrollToElement(e,!0),d[0].scrollIntoView&&
(c=b(ra).scrollTop(),e=e.offset().top,(e<c||e>c+b(ra).height())&&d[0].scrollIntoView()),a.preventDefault())}})))}e.autoReinitialise&&!X?X=setInterval(function(){la(e)},e.autoReinitialiseDelay):!e.autoReinitialise&&X&&clearInterval(X);ma&&c.scrollTop(0)&&K(ma,!1);w&&c.scrollLeft(0)&&V(w,!1);c.trigger("jsp-initialised",[v||x])}function ya(){A.height(G+"px");m=0;Y=e.verticalGutter+A.outerWidth();f.width(j-Y-O);try{0===ea.position().left&&f.css("margin-left",Y+"px")}catch(a){}}function za(){g.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){y-=
b(this).outerWidth()});B.width(y+"px");k=0}function wa(a,d,b,e){var c="before",g="after";"os"==d&&(d=/Mac/.test(navigator.platform)?"after":"split");d==c?g=d:d==g&&(c=d,d=b,b=e,e=d);a[c](b)[g](e)}function F(a,d,c){return function(){var g=this,f=c,g=b(g).addClass("jspActive"),j,h,m=!0,k=function(){0!==a&&l.scrollByX(a*e.arrowButtonSpeed);0!==d&&l.scrollByY(d*e.arrowButtonSpeed);h=setTimeout(k,m?e.initialDelay:e.arrowRepeatFreq);m=!1};k();j=f?"mouseout.jsp":"mouseup.jsp";f=f||b("html");f.bind(j,function(){g.removeClass("jspActive");
h&&clearTimeout(h);h=null;f.unbind(j)});this.blur();return!1}}function va(){B&&B.unbind("mousedown.jsp");A&&A.unbind("mousedown.jsp")}function xa(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");t&&t.removeClass("jspActive");u&&u.removeClass("jspActive")}function P(a,d){x&&(0>a?a=0:a>C&&(a=C),d===s&&(d=e.animateScroll),d?l.animate(t,"top",a,qa):(t.css("top",a),qa(a)))}function qa(a){a===s&&(a=t.position().top);g.scrollTop(0);m=a;var d=0===m,b=m==C;a=-(a/
C)*(p-h);if(L!=d||M!=b)L=d,M=b,c.trigger("jsp-arrow-change",[L,M,N,Q]);e.showArrows&&(Z[d?"addClass":"removeClass"]("jspDisabled"),$[b?"addClass":"removeClass"]("jspDisabled"));f.css("top",a);c.trigger("jsp-scroll-y",[-a,d,b]).trigger("scroll")}function U(a,d){v&&(0>a?a=0:a>I&&(a=I),d===s&&(d=e.animateScroll),d?l.animate(u,"left",a,pa):(u.css("left",a),pa(a)))}function pa(a){a===s&&(a=u.position().left);g.scrollTop(0);k=a;var d=0===k,b=k==I;a=-(a/I)*(n-j);if(N!=d||Q!=b)N=d,Q=b,c.trigger("jsp-arrow-change",
[L,M,N,Q]);e.showArrows&&(aa[d?"addClass":"removeClass"]("jspDisabled"),ba[b?"addClass":"removeClass"]("jspDisabled"));f.css("left",a);c.trigger("jsp-scroll-x",[-a,d,b]).trigger("scroll")}function K(a,d){P(a/(p-h)*C,d)}function V(a,d){U(a/(n-j)*I,d)}function ga(a,d,c){var f,m,k=0,l=0,p,n,q;try{f=b(a)}catch(t){return}m=f.outerHeight();a=f.outerWidth();g.scrollTop(0);for(g.scrollLeft(0);!f.is(".jspPane");)if(k+=f.position().top,l+=f.position().left,f=f.offsetParent(),/^body|html$/i.test(f[0].nodeName))return;
f=D();p=f+h;k<f||d?n=k-e.verticalGutter:k+m>p&&(n=k-h+m+e.verticalGutter);n&&K(n,c);k=E();n=k+j;l<k||d?q=l-e.horizontalGutter:l+a>n&&(q=l-j+a+e.horizontalGutter);q&&V(q,c)}function E(){return-f.position().left}function D(){return-f.position().top}function T(){return!1}var e,l=this,f,j,h,g,n,p,na,da,x,v,t,C,m,u,I,k,ea,A,Y,G,J,Z,$,fa,B,y,H,aa,ba,X,ta,O,ua,L=!0,N=!0,M=!1,Q=!1,ka=c.clone(!1,!1).empty(),oa=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";ta=c.css("paddingTop")+" "+c.css("paddingRight")+
" "+c.css("paddingBottom")+" "+c.css("paddingLeft");O=(parseInt(c.css("paddingLeft"),10)||0)+(parseInt(c.css("paddingRight"),10)||0);b.extend(l,{reinitialise:function(a){a=b.extend({},e,a);la(a)},scrollToElement:function(a,d,b){ga(a,d,b)},scrollTo:function(a,d,b){V(a,b);K(d,b)},scrollToX:function(a,b){V(a,b)},scrollToY:function(a,b){K(a,b)},scrollToPercentX:function(a,b){V(a*(n-j),b)},scrollToPercentY:function(a,b){K(a*(p-h),b)},scrollBy:function(a,b,c){l.scrollByX(a,c);l.scrollByY(b,c)},scrollByX:function(a,
b){var c=(E()+Math[0>a?"floor":"ceil"](a))/(n-j);U(c*I,b)},scrollByY:function(a,b){var c=(D()+Math[0>a?"floor":"ceil"](a))/(p-h);P(c*C,b)},positionDragX:function(a,b){U(a,b)},positionDragY:function(a,b){P(a,b)},animate:function(a,b,c,f){var g={};g[b]=c;a.animate(g,{duration:e.animateDuration,easing:e.animateEase,queue:!1,step:f})},getContentPositionX:function(){return E()},getContentPositionY:function(){return D()},getContentWidth:function(){return n},getContentHeight:function(){return p},getPercentScrolledX:function(){return E()/
(n-j)},getPercentScrolledY:function(){return D()/(p-h)},getIsScrollableH:function(){return v},getIsScrollableV:function(){return x},getContentPane:function(){return f},scrollToBottom:function(a){P(C,a)},hijackInternalLinks:b.noop,destroy:function(){var a=D(),b=E();c.removeClass("jspScrollable").unbind(".jsp");c.replaceWith(ka.append(f.children()));ka.scrollTop(a);ka.scrollLeft(b);X&&clearInterval(X)}});la(q)}q=b.extend({},b.fn.jScrollPane.defaults,q);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed",
"keyboardSpeed"],function(){q[this]=q[this]||q.speed});return this.each(function(){var c=b(this),s=c.data("jsp");s?s.reinitialise(q):(b("script",c).filter('[type="text/javascript"],:not([type])').remove(),s=new Ba(c,q),c.data("jsp",s))})};b.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:0,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:s,
animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);





//momentjs
// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com
!function(t){function e(t,e){return function(n){return u(t.call(this,n),e)}}function n(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function s(){}function i(t){a(this,t)}function r(t){var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,i=t.days||t.day||t.d||0,r=t.hours||t.hour||t.h||0,a=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,u=t.milliseconds||t.millisecond||t.ms||0;this._input=t,this._milliseconds=u+1e3*o+6e4*a+36e5*r,this._days=i+7*s,this._months=n+12*e,this._data={},this._bubble()}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function h(t,e,n,s){var i,r,a=e._milliseconds,o=e._days,u=e._months;a&&t._d.setTime(+t._d+a*n),(o||u)&&(i=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),u&&t.month(t.month()+u*n),a&&!s&&H.updateOffset(t),(o||u)&&(t.minute(i),t.hour(r))}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){var n,s=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0;for(n=0;s>n;n++)~~t[n]!==~~e[n]&&r++;return r+i}function f(t){return t?ie[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function l(t,e){return e.abbr=t,x[t]||(x[t]=new s),x[t].set(e),x[t]}function _(t){if(!t)return H.fn._lang;if(!x[t]&&A)try{require("./lang/"+t)}catch(e){return H.fn._lang}return x[t]}function m(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function y(t){var e,n,s=t.match(E);for(e=0,n=s.length;n>e;e++)s[e]=ue[s[e]]?ue[s[e]]:m(s[e]);return function(i){var r="";for(e=0;n>e;e++)r+=s[e]instanceof Function?s[e].call(i,t):s[e];return r}}function M(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var s=5;s--&&N.test(e);)e=e.replace(N,n);return re[e]||(re[e]=y(e)),re[e](t)}function g(t,e){switch(t){case"DDDD":return V;case"YYYY":return X;case"YYYYY":return $;case"S":case"SS":case"SSS":case"DDD":return I;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return R;case"a":case"A":return _(e._l)._meridiemParse;case"X":return B;case"Z":case"ZZ":return j;case"T":return q;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return J;default:return new RegExp(t.replace("\\",""))}}function p(t){var e=(j.exec(t)||[])[0],n=(e+"").match(ee)||["-",0,0],s=+(60*n[1])+~~n[2];return"+"===n[0]?-s:s}function D(t,e,n){var s,i=n._a;switch(t){case"M":case"MM":i[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":s=_(n._l).monthsParse(e),null!=s?i[1]=s:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(i[2]=~~e);break;case"YY":i[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":i[0]=~~e;break;case"a":case"A":n._isPm=_(n._l).isPM(e);break;case"H":case"HH":case"h":case"hh":i[3]=~~e;break;case"m":case"mm":i[4]=~~e;break;case"s":case"ss":i[5]=~~e;break;case"S":case"SS":case"SSS":i[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=p(e)}null==e&&(n._isValid=!1)}function Y(t){var e,n,s=[];if(!t._d){for(e=0;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];s[3]+=~~((t._tzm||0)/60),s[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(s[0],s[1],s[2]),n.setUTCHours(s[3],s[4],s[5],s[6])):(n.setFullYear(s[0],s[1],s[2]),n.setHours(s[3],s[4],s[5],s[6])),t._d=n}}function w(t){var e,n,s=t._f.match(E),i=t._i;for(t._a=[],e=0;e<s.length;e++)n=(g(s[e],t).exec(i)||[])[0],n&&(i=i.slice(i.indexOf(n)+n.length)),ue[s[e]]&&D(s[e],n,t);i&&(t._il=i),t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),Y(t)}function k(t){var e,n,s,r,o,u=99;for(r=0;r<t._f.length;r++)e=a({},t),e._f=t._f[r],w(e),n=new i(e),o=c(e._a,n.toArray()),n._il&&(o+=n._il.length),u>o&&(u=o,s=n);a(t,s)}function v(t){var e,n=t._i,s=K.exec(n);if(s){for(t._f="YYYY-MM-DD"+(s[2]||" "),e=0;4>e;e++)if(te[e][1].exec(n)){t._f+=te[e][0];break}j.exec(n)&&(t._f+=" Z"),w(t)}else t._d=new Date(n)}function T(e){var n=e._i,s=G.exec(n);n===t?e._d=new Date:s?e._d=new Date(+s[1]):"string"==typeof n?v(e):d(n)?(e._a=n.slice(0),Y(e)):e._d=n instanceof Date?new Date(+n):new Date(n)}function b(t,e,n,s,i){return i.relativeTime(e||1,!!n,t,s)}function S(t,e,n){var s=W(Math.abs(t)/1e3),i=W(s/60),r=W(i/60),a=W(r/24),o=W(a/365),u=45>s&&["s",s]||1===i&&["m"]||45>i&&["mm",i]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",W(a/30)]||1===o&&["y"]||["yy",o];return u[2]=e,u[3]=t>0,u[4]=n,b.apply({},u)}function F(t,e,n){var s,i=n-e,r=n-t.day();return r>i&&(r-=7),i-7>r&&(r+=7),s=H(t).add("d",r),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function O(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=_().preparse(e)),H.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?d(n)?k(t):w(t):T(t),new i(t))}function z(t,e){H.fn[t]=H.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),H.updateOffset(this),this):this._d["get"+n+e]()}}function C(t){H.duration.fn[t]=function(){return this._data[t]}}function L(t,e){H.duration.fn["as"+t]=function(){return+this/e}}for(var H,P,U="2.1.0",W=Math.round,x={},A="undefined"!=typeof module&&module.exports,G=/^\/?Date\((\-?\d+)/i,Z=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,N=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,J=/\d\d?/,I=/\d{1,3}/,V=/\d{3}/,X=/\d{1,4}/,$=/[+\-]?\d{1,6}/,R=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,j=/Z|[\+\-]\d\d:?\d\d/i,q=/T/i,B=/[\+\-]?\d+(\.\d{1,3})?/,K=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,Q="YYYY-MM-DDTHH:mm:ssZ",te=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ee=/([\+\-]|\d\d)/gi,ne="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),se={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},ie={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},re={},ae="DDD w W M D d".split(" "),oe="M D H h m s w W".split(" "),ue={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},gg:function(){return u(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return u(this.weekYear(),5)},GG:function(){return u(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return u(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};ae.length;)P=ae.pop(),ue[P+"o"]=n(ue[P],P);for(;oe.length;)P=oe.pop(),ue[P+P]=e(ue[P],2);for(ue.DDDD=e(ue.DDD,3),s.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,s;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=H([2e3,e]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=H([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,s){var i=this._relativeTime[n];return"function"==typeof i?i(t,e,n,s):i.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return F(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},H=function(t,e,n){return O({_i:t,_f:e,_l:n,_isUTC:!1})},H.utc=function(t,e,n){return O({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},H.unix=function(t){return H(1e3*t)},H.duration=function(t,e){var n,s,i=H.isDuration(t),a="number"==typeof t,o=i?t._input:a?{}:t,u=Z.exec(t);return a?e?o[e]=t:o.milliseconds=t:u&&(n="-"===u[1]?-1:1,o={y:0,d:~~u[2]*n,h:~~u[3]*n,m:~~u[4]*n,s:~~u[5]*n,ms:~~u[6]*n}),s=new r(o),i&&t.hasOwnProperty("_lang")&&(s._lang=t._lang),s},H.version=U,H.defaultFormat=Q,H.updateOffset=function(){},H.lang=function(t,e){return t?(e?l(t,e):x[t]||_(t),H.duration.fn._lang=H.fn._lang=_(t),void 0):H.fn._lang._abbr},H.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),_(t)},H.isMoment=function(t){return t instanceof i},H.isDuration=function(t){return t instanceof r},H.fn=i.prototype={clone:function(){return H(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return M(H(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!c(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){var e=M(this,t||H.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,-1),this},diff:function(t,e,n){var s,i,r=this._isUTC?H(t).zone(this._offset||0):H(t).local(),a=6e4*(this.zone()-r.zone());return e=f(e),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+r.daysInMonth()),i=12*(this.year()-r.year())+(this.month()-r.month()),i+=(this-H(this).startOf("month")-(r-H(r).startOf("month")))/s,i-=6e4*(this.zone()-H(this).startOf("month").zone()-(r.zone()-H(r).startOf("month").zone()))/s,"year"===e&&(i/=12)):(s=this-r,i="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-a)/864e5:"week"===e?(s-a)/6048e5:s),n?i:o(i)},from:function(t,e){return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(H(),t)},calendar:function(){var t=this.diff(H().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({d:t-e}):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),H.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=f(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),this},endOf:function(t){return this.startOf(t).add(t,1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+H(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+H(t).startOf(e)},isSame:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+H(t).startOf(e)},min:function(t){return t=H.apply(null,arguments),this>t?this:t},max:function(t){return t=H.apply(null,arguments),t>this?this:t},zone:function(t){var e=this._offset||0;return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=p(t)),Math.abs(t)<16&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&h(this,H.duration(e-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return H.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=W((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},weekYear:function(t){var e=F(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=F(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=F(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},lang:function(e){return e===t?this._lang:(this._lang=_(e),this)}},P=0;P<ne.length;P++)z(ne[P].toLowerCase().replace(/s$/,""),ne[P]);z("year","FullYear"),H.fn.days=H.fn.day,H.fn.months=H.fn.month,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.fn.toJSON=H.fn.toISOString,H.duration.fn=r.prototype={_bubble:function(){var t,e,n,s,i=this._milliseconds,r=this._days,a=this._months,u=this._data;u.milliseconds=i%1e3,t=o(i/1e3),u.seconds=t%60,e=o(t/60),u.minutes=e%60,n=o(e/60),u.hours=n%24,r+=o(n/24),u.days=r%30,a+=o(r/30),u.months=a%12,s=o(a/12),u.years=s},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(t){var e=+this,n=S(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},add:function(t,e){var n=H.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=H.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=f(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=f(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:H.fn.lang};for(P in se)se.hasOwnProperty(P)&&(L(P,se[P]),C(P.toLowerCase()));L("Weeks",6048e5),H.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},H.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),A&&(module.exports=H),"undefined"==typeof ender&&(this.moment=H),"function"==typeof define&&define.amd&&define("moment",[],function(){return H})}.call(this);





//index search
/**
 * IndexSearch.js
 *
 * author     -->  redcrow (jittagorn pitakmetagoon)
 * create on  -->  26/08/2013
 * website    -->  na5cent.blogspot.com
 * 
 * version    -->  1.0
 * version    -->  2.0 (multiple search keyword : AND search operation)
 * 
 * License    ---> Apache License
 * Version 2.0, January 2004 (http://www.apache.org/licenses/LICENSE-2.0)
 * 
 * 
 * 
 * update 13/12/2013 : add integrate period algorithm (document : http://na5cent.blogspot.com/2013/12/integrate-period-algorithm-javascript.html)
 */

window.IndexSearch = window.IndexSearch || (function() {

    function defined(object) {
        return !isUndefined(object);
    }

    function notDefined(object) {
        return isUndefined(object);
    }

    function empty(list) {
        return notDefined(list) || list.length === 0;
    }

    function notEmpty(list) {
        return !empty(list);
    }

    function trim(string) {
        return string.replace(/^\s+|\s+$/g, '');  //for old browser
    }

    function findIndex(element, list, startPoint) {
        if (notDefined(element)) {
            return -1;
        }

        if (isString(list)) {
            element = element.toLowerCase();
            list = list.toLowerCase();
        }

        return list.indexOf(element, defined(startPoint) ? startPoint : 0);
    }

    function foundIn(element, list) {
        return findIndex(element, list) !== -1;
    }

    function notFoundIn(element, list) {
        return !foundIn(element, list);
    }

    function escapseString(text) {
        text = text.replace(/&/g, '&amp;')
                .replace(/>/g, '&gt;')
                .replace(/</g, '&lt;')
                .replace(/"/g, '&quot;');

        return text;
    }

    function copyObject(source, destination) {
        for (var key in source) {
            destination[key] = source[key];
        }
    }

    function forEachObject(obj, callback, context_opt) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = callback.call(context_opt, obj[key], key, obj);
                if (value === false) {
                    return false;
                }
            }
        }

        return true;
    }

    function forEachArray(array, callback, context_opt) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            var value = callback.call(context_opt, array[i], i, array);
            if (value === false) {
                return false;
            }
        }

        return true;
    }

    function forEach(obj, callback, context_opt) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = callback.call(context_opt, obj[key], key, obj);
                if (value === false) {
                    return false;
                }
            }
        }

        return true;
    }

    function object2Array(obj) {
        var newObj = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj.push(key);
            }
        }

        return newObj;
    }

    function replaceNotation(text) {
        if (notDefined(text)) {
            return '';
        }

        text = text.replace(/\(/g, ' ')
                .replace(/\)/g, ' ')
                .replace(/\,/g, ' ')
                .replace(/\//g, ' ')
                .replace(/\\/g, ' ')
                .replace(/\:/g, ' ')
                .replace(/\./g, ' ')
                .replace(/\>/g, ' ')
                .replace(/\</g, ' ')
                .replace(/\[/g, ' ')
                .replace(/\]/g, ' ')
                .replace(/\+/g, ' ')
                .replace(/\=/g, ' ')
                .replace(/\;/g, ' ');

        return text;
    }

    function is(data, type) {
        return Object.prototype.toString.call(data) === '[object ' + type + ']';
    }

    function isFunction(data) {
        return is(data, 'Function');
    }

    function isArray(data) {
        return is(data, 'Array');
    }

    function isString(data) {
        return is(data, 'String');
    }

    function isNumber(data) {
        return is(data, 'Number');
    }

    function isObject(data) {
        return is(data, 'Object');
    }

    function isRegExp(data) {
        return is(data, 'RegExp');
    }

    function isUndefined(data) {
        return is(data, 'Undefined');
    }

    function totalProperties(object) {
        var total = 0;
        for (var property in object) {
            total = total + 1;
        }

        return total;
    }

    function numberFormat(number) {
        var floatNumber = parseFloat(number);
        var integerNumber = parseInt(number);
        if ((floatNumber - integerNumber) === 0) {
            return integerNumber;
        } else {
            return new Number(number).toFixed(2);
        }
    }

    /**
     * class Interface
     * @author redcrow
     * @create on 25/02/2013
     * @website na5cent.blogspot.com
     */
    var Interface = (function() {

        /**
         * for ensure constructor input type require
         */
        function ensureConstructorRequire(name, methods) {
            if (!isString(name)) {
                throw new Error('constructor of Interface class require first argument is \'string\', but is \'' + (typeof name) + '\'.');
            }

            if (!isArray(methods)) {
                throw new Error('constructor of Interface class require second argument is \'array of string\', but is \'' + (typeof methods) + '\'.');
            }
        }

        /**
         * for ensure method type require
         */
        function ensureMethodType(method, index) {
            if (!isString(method)) {
                throw new Error('constructor of Interface class require second argument is \'array of string\', but method index ' + index + ' is not \'string\', is \'' + (typeof method) + '\'.');
            }

            return method;
        }

        /**
         * Interface constructor
         * {string} name
         * {string[]} method names 
         */
        return function(name, methods) {
            if (arguments.length !== 2) {
                throw new Error("constructor of Interface class require 2 arguments : Interface({string} name, {string[]} method names");
            }
            ensureConstructorRequire(name, methods);

            var name__ = name;
            var methods__ = [];

            for (var index = 0; index < methods.length; index++) {
                var method = ensureMethodType(methods[index], index);
                methods__.push(method);
            }

            this.getName = function() {
                return name__;
            };

            this.getMethods = function() {
                return methods__;
            };
        };
    })();

    /**
     * static method Interface.ensureImplements
     * for ensure class implements an interfaces.
     */
    Interface.ensureImplements = function(clazz, interfacs) {
        if (arguments.length !== 2) {
            throw new Error('Interface.ensureImplements require 2 arguments : Interface.ensureImplement({object} obj, {interface[]} interfaces).');
        }

        if (!isObject(clazz)) {
            throw new Error('first argument of Interface.ensureImplements is not \'object\', but is \'' + (typeof clazz) + '\'.');
        }

        if (!isArray(interfacs)) {
            throw new Error('second argument of Interface.ensureImplements is not \'array of interface\', but is \'' + (typeof interfacs) + '\'.');
        }

        for (var index = 0; index < interfacs.length; index++) {
            var interf = interfacs[index];
            if (interf.constructor !== Interface) {
                throw new Error('second argument of Interface.ensureImplements index ' + index + ' is not interface.');
            }

            var methods = interf.getMethods();
            for (var property in methods) {
                var method = methods[property];

                if (notDefined(clazz[method])) {
                    throw new Error('implementation class is not define method \'' + method + '\' of Interface \'' + interf.getName() + '\'.');
                }

                if (!isFunction(clazz[method])) {
                    throw new Error('implementation class define \'' + method + '\' is not \'method\', but is \'' + (typeof clazz[method]) + '\'.');
                }
            }
        }
    };

    /**
     * class ResultSearch 
     * bean for keep result after searching
     */
    var ResultSearch = function(result) {
        var totalPosition__ = result.totalPosition || 0;
        var totalSentence__ = result.totalSentence || 0;
        var content__ = result.content || {nodes: {}};
        var suggestions__ = result.suggestions || [];

        this.getTotalPosition = function() {
            return totalPosition__;
        };

        this.getTotalSentence = function() {
            return totalSentence__;
        };

        this.getContent = function() {
            return content__;
        };

        this.getSuggestions = function() {
            return suggestions__;
        };
    };

    /**
     * class Period
     * for keep period information
     */
    var Period = function(start, end) {
        var start__ = start;
        var end__ = end;

        this.getStart = function() {
            return start__;
        };

        this.getEnd = function() {
            return end__;
        };

        this.setStart = function(start) {
            start__ = start;
        };

        this.setEnd = function(end) {
            end__ = end;
        };

        this.equals = function(object) {
            if (object.getStart() === start__ && object.getEnd() === end__) {
                return true;
            }

            return false;
        };

        this.toString = function() {
            return 'period {' + start__ + ', ' + end__ + '}';
        };
    };

    /**
     * class PeriodIntegrator
     * for integrate period in timeline
     * 
     * document : http://na5cent.blogspot.com/2013/12/integrate-period-algorithm-java.html
     */
    var PeriodIntegrator = function() {

        var periodSet__ = {};
        var periodList__;

        function getPeriodKey(period) {
            return period.getStart() + ':' + period.getEnd();
        }

        this.addPeriod = function(period) {
            var periodKey = getPeriodKey(period);
            if (notDefined(periodSet__[periodKey])) {
                periodSet__[periodKey] = period;
            }

            return this;
        };

        this.addAllPeriods = function(periodList) {
            if (notEmpty(periodList)) {
                forEach(periodList, function(period) {
                    this.addPeriod(period);
                }, this);
            }

            return this;
        };

        function toPeriodList() {
            var list = [];
            forEach(periodSet__, function(period) {
                list.push(period);
            });
            return list;
        }

        function sortPeriods() {
            periodList__ = toPeriodList().sort(function(period1, period2) {
                if (period1.getStart() === period2.getStart()) {
                    return period1.getEnd() - period2.getEnd();
                }

                return period1.getStart() - period2.getStart();
            });
        }

        function changeOverlap() {
            if (periodList__.length > 1) {
                for (var i = 1; i < periodList__.length; i++) {
                    var before = periodList__[i - 1];
                    var current = periodList__[i];

                    if (current.getStart() < before.getEnd()) {
                        current.setStart(before.getEnd());
                    }
                }
            }
        }

        function removePeriod(period) {
            for (var index in periodList__) {
                if (periodList__[index].equals(period)) {
                    delete periodList__[index];
                }
            }
        }

        function removeIncorrect() {
            if (periodList__.length > 1) {
                for (var i = 1; i < periodList__.length; i++) {
                    var periodI = periodList__[i];
                    for (var j = i + 1; j < periodList__.length; j++) {
                        var periodJ = periodList__[j];

                        if (defined(periodI) && defined(periodJ) && (isIncorrect(periodJ) || isSubPeriod(periodJ, periodI))) {
                            removePeriod(periodJ);
                        }
                    }
                }
            }
        }

        function isIncorrect(period) {
            return period.getStart() >= period.getEnd();
        }

        function isSubPeriod(period1, period2) {
            return period1.getStart() >= period2.getStart() && period1.getEnd() <= period2.getEnd();
        }

        function integratePeriods() {
            if (periodList__.length > 1) {
                for (var i = 1; i < periodList__.length; i++) {
                    var before = periodList__[i - 1];
                    var current = periodList__[i];

                    if (defined(current) && defined(before) && current.getStart() === before.getEnd()) {
                        current.setStart(before.getStart());
                        removePeriod(before);
                        i--;
                    }
                }
            }
        }

        this.integrate = function() {
            sortPeriods();
            changeOverlap();
            removeIncorrect();
            integratePeriods();

            return periodList__;
        };
    };

    var InputSearchSplitor = function(input) {
        var input__ = input || '';
        var keywordSize__ = 0;

        this.split = function() {
            var result = [];
            var keywordList = input__.split(' ');
            forEach(keywordList, function(keyword) {
                if (notEmpty(keyword)) {
                    result.push(keyword);
                    keywordSize__ = keywordSize__ + 1;
                }
            });

            return result;
        };

        this.getKeywordSize = function() {
            return keywordSize__;
        };

        this.getInput = function() {
            return input__;
        };
    };

    /**
     * class Highlighter
     * for make html highlight result search    				
     */
    var Highlighter = function(cssClass) {
        var cssClass__ = cssClass;
        var totalSentence__ = 0;
        var totalHighlight__ = 0;

        function highlightKeyword(keyword) {
            return '<span class="' + cssClass__ + '">' + keyword + '</span>';
        }

        this.getTotalSentence = function() {
            return totalSentence__;
        };

        this.resetTotalSentence = function() {
            totalSentence__ = 0;
        };

        this.getTotalHighlight = function() {
            return totalHighlight__;
        };

        this.resetTotalHighlight = function() {
            totalHighlight__ = 0;
        };

        this.resetTotal = function() {
            totalHighlight__ = 0;
            totalSentence__ = 0;
        };

        function findPeriodsOfSentenceByKeyword(sentence, keywordString) {
            var integrator = new PeriodIntegrator();
            var splitor = new InputSearchSplitor(keywordString);

            forEach(splitor.split(), function(keyword) {
                if (empty(keyword)) {
                    return true;
                }

                var keywordLength = keyword.length;

                var start = 0;
                var end = 0;
                while (true) {
                    var indexOf = findIndex(keyword, sentence, end);
                    if (indexOf === -1) { //not found
                        break;
                    }

                    start = indexOf;
                    end = indexOf + keywordLength;

                    integrator.addPeriod(new Period(start, end));
                }
            });

            return integrator.integrate();
        }

        this.highlight = function(keywordString, sentence) {
            totalSentence__ = totalSentence__ + 1;
            var newSentence = escapseString(sentence);

            var periods = findPeriodsOfSentenceByKeyword(newSentence, keywordString);
            var highlightSize = 0;

            forEach(periods, function(period) {
                var start = period.getStart() + highlightSize;
                var end = period.getEnd() + highlightSize;

                var infront = newSentence.substring(0, start);
                var word = newSentence.substring(start, end);
                var highlighted = highlightKeyword(word);
                var behind = newSentence.substring(end);

                newSentence = infront + highlighted + behind;

                highlightSize = highlightSize + highlighted.length - (word.length);
                totalHighlight__ = totalHighlight__ + 1;
            });

            return newSentence;
        };
    };

    /**
     * define IndexStore interface
     */
    var IndexStore = new Interface('IndexStore', [
        'writeIndex',
        'readIndex',
        'addDictionary',
        'getDictionaries',
        'getIndexs'
    ]);

    /**
     * class InMemoryIndexStore
     * for store index in memory (array)
     */
    var InMemoryIndexStore = function(maximumDictionaryKeySize) {
        var maximumDictionaryKeySize__ = maximumDictionaryKeySize;

        if (notDefined(maximumDictionaryKeySize__) || maximumDictionaryKeySize__ < 1) {
            maximumDictionaryKeySize__ = 1;
        }

        var indexStore__ = [];
        for (var index = 1; index <= maximumDictionaryKeySize__; index++) {
            indexStore__[index] = {};
        }

        /**
         * for write an index into IndexStore
         * pattern : IndexStore --> stores --> dictionaries --> indexes
         * 
         * @param {string} index
         * @param {string} sentence
         */
        this.writeIndex = function(index, sentence) {
            if (notDefined(sentence)) {
                return;
            }

            forEach(indexStore__, function(store) {
                forEach(store, function(dictionaries) {
                    forEach(dictionaries, function(indexes, keyword) {
                        if (foundIn(keyword, sentence) && notFoundIn(index, indexes)) {
                            indexes.push(index);
                        }
                    });
                });
            });
        };

        /**
         * for read indexes from IndexStore by keyword search parameter
         * 
         * @param {string} keywordString
         * @returns {array} indexs
         */
        this.readIndex = function(keywordString) {
            var keywordMap = {};

            var splitor = new InputSearchSplitor(keywordString);
            forEach(splitor.split(), function(keyword) {
                forEach(this.getDictionaries(keyword), function(indexes, dictionaryKey) {
                    if (foundIn(keyword, dictionaryKey)) {
                        if (notDefined(keywordMap[keyword])) {
                            keywordMap[keyword] = {};
                        }

                        forEach(indexes, function(index) {
                            keywordMap[keyword][index] = index;
                        });
                    }
                });
            }, this);

            return intersecIndexesByKeywordSize(keywordMap, splitor.getKeywordSize());
        };

        function intersecIndexesByKeywordSize(keywordMap, keywordSearchSize) {
            var indexMap = indexCountMapper(keywordMap);
            return indexCountReducer(indexMap, keywordSearchSize);
        }

        function indexCountMapper(keywordMap) {
            var indexMap = {};
            forEach(keywordMap, function(indexes) {
                forEach(indexes, function(index) {
                    if (notDefined(indexMap[index])) {
                        indexMap[index] = 0;
                    }

                    indexMap[index] = indexMap[index] + 1;
                });
            });

            return indexMap;
        }

        function indexCountReducer(indexMap, reduceSize) {
            var indexes = [];
            forEach(indexMap, function(count, index) {
                if (count >= reduceSize) {
                    indexes.push(index);
                }
            });

            return indexes;
        }

        this.addDictionary = function(keyword) {
            keyword = keyword.trim().toLowerCase();

            if (empty(keyword)) {
                return;
            }

            forEach(indexStore__, function(store, dictionaryKeySize) {
                if (keyword.length >= dictionaryKeySize) {
                    var dictionaryKeyword = keyword.substring(0, dictionaryKeySize);

                    if (notDefined(store[dictionaryKeyword])) {
                        store[dictionaryKeyword] = {};
                    }

                    if (notDefined(store[dictionaryKeyword][keyword])) {
                        store[dictionaryKeyword][keyword] = [];
                    }
                }
            });
        };

        /**
         * for read dictionaries from IndexStore which match by keyword search parameter
         * 
         * @param {string} keywordString
         * @returns {object} dictionaries
         */
        this.getDictionaries = function(keywordString) {
            if (empty(keywordString)) {
                return {};
            }

            var splitor = new InputSearchSplitor(keywordString);
            var dictionaries = {};
            forEach(splitor.split(), function(keword) {
                var source;
                var destination = dictionaries;

                if (keword.length <= maximumDictionaryKeySize__) {
                    source = indexStore__[keword.length][keword];
                } else {
                    var patialKeyword = keword.substring(0, maximumDictionaryKeySize__);
                    source = indexStore__[maximumDictionaryKeySize__][patialKeyword];
                }

                copyObject(source, destination);
            });


            if (notDefined(dictionaries)) {
                dictionaries = {};
            }

            return dictionaries;
        };

        this.getIndexs = function() {
            return indexStore__;
        };
    };

    /**
     * class IndexWriter
     * for write index into index store
     */
    var IndexWriter = function(indexStore) {
        var indexStore__ = indexStore;

        this.writeIndex = function(index, sentence) {
            indexStore__.writeIndex(index, sentence);
        };

        this.addDictionary = function(keyword) {
            indexStore__.addDictionary(keyword);
        };
    };

    /**
     * class IndexReader
     * for read index from index store
     */
    var IndexReader = function(indexStore) {
        var indexStore__ = indexStore;

        this.readIndex = function(keyword) {
            return indexStore__.readIndex(keyword);
        };

        this.getDictionaries = function(keyword) {
            return indexStore__.getDictionaries(keyword);
        };

        this.getIndexs = function() {
            return indexStore__.getIndexs();
        };
    };

    /**
     * class Suggession 
     * @description http://na5cent.blogspot.com/2013/02/algorithm-for-find-difference.html
     */
    var Suggestion = function(settings) {
        //require
        var dictionaries__ = settings.dictionary;
        var highlighter__ = settings.highlighter;

        //optional
        var percentSuggest__ = settings.percentSuggest || 60;
        var suggestionsSize__ = settings.suggestionsSize || 10;

        /**
         * for find total character map of string
         */
        function reduceKeywordAndTransformToMap(keyword) {
            var map = {};
            for (var i = 0; i < keyword.length; i++) {
                var character = keyword.charAt(i);
                if (notDefined(map[character])) {
                    map[character] = {
                        duplicate: 0,
                        position: 0
                    };
                }
                map[character].duplicate = map[character].duplicate + 1;
                map[character].position = map[character].position + i;
            }

            return map;
        }

        /**
         * for compute percentage between keyword and word compare
         */
        function computePercentage(keywordMap, compareMap) {
            var percentTotal = 0;

            for (var keywordProperty in keywordMap) {
                if (notDefined(compareMap[keywordProperty])) {
                    compareMap[keywordProperty] = {
                        duplicate: 0,
                        position: 0
                    };
                }

                var keywordObj = keywordMap[keywordProperty];
                var compareObj = compareMap[keywordProperty];

                var keywordPropertyValue = keywordObj.duplicate + keywordObj.position;
                var comparePropertyValue = compareObj.duplicate + compareObj.position;

                if (keywordPropertyValue !== 0 && comparePropertyValue !== 0) {

                    var propertyBase = (comparePropertyValue + keywordPropertyValue) / 2;
                    if (keywordPropertyValue >= comparePropertyValue) {
                        percentTotal = percentTotal + (comparePropertyValue / propertyBase);
                    } else {
                        percentTotal = percentTotal + (keywordPropertyValue / propertyBase);
                    }
                }
            }

            var mapBase = (totalProperties(keywordMap) + totalProperties(compareMap)) / 2;

            return 100 * (percentTotal / mapBase);
        }

        function getSuggestions(keywordString, PERCENT_SUGGEST) {
            var suggestions = [];
            var splitor = new InputSearchSplitor(keywordString);
            var keywordList = splitor.split();

            forEach(keywordList, function(keyword) {
                return forEach(dictionaries__, function(indexes, dictionaryKeyword) {
                    if (!hasSuggest(dictionaryKeyword, suggestions)) {

                        var keywordMap = reduceKeywordAndTransformToMap(keyword);
                        var dictionaryMap = reduceKeywordAndTransformToMap(dictionaryKeyword);
                        var percent = computePercentage(keywordMap, dictionaryMap);

                        if (percent >= PERCENT_SUGGEST) {
                            var highlightText = highlighter__.highlight(keywordString, dictionaryKeyword);
                            if (empty(highlightText)) {
                                highlightText = dictionaryKeyword;
                            }

                            suggestions.push({
                                keywordMatch: keyword,
                                word: dictionaryKeyword,
                                highlight: highlightText,
                                percent: numberFormat(percent)
                            });

                            if (suggestions.length === suggestionsSize__) {
                                return false;
                            }
                        }
                    }
                });
            });

            suggestions = suggestions.sort(function(keyword1, keyword2) {
                return keyword2.percent - keyword1.percent;
            });

            return suggestions;
        }

        function hasKeyword(word, list) {
            for (var index in list) {
                if (list[index] === word) {
                    return true;
                }
            }

            return false;
        }

        function hasSuggest(word, list) {
            for (var index in list) {
                if (list[index].word === word) {
                    return true;
                }
            }

            return false;
        }

        this.getSuggestionsWhenSearchFound = function(keyword) {
            return getSuggestions(keyword, 0);
        };

        this.getSuggestionsWhenSearchNotFound = function(keyword) {
            return getSuggestions(keyword, percentSuggest__);
        };
    };


    /**
     * constructor of IndexSearch
     * @param {object} settings
     */
    var constructor = function(settings) {
        if (notDefined(settings)) {
            throw new Error('require {object} settings');
        }

        var node__ = settings.repository;
        if (notDefined(node__)) {
            throw new Error('require {repository} settings.repository');
        }

        if (!isObject(node__)) {
            throw new Error('require {repository} settings.repository is root node object');
        }

        var indexOnFields__ = settings.indexOnFields || [];
        if (empty(indexOnFields__)) {
            throw new Error('require index field on {string[]} : settings.indexOnFields');
        } else if (foundIn('nodes', indexOnFields__)) {
            throw new Error('field name \'nodes\' in {string[]} : settings.indexOnFields is reserved word');
        }

        var highlighter__ = new Highlighter(settings.highlightClass || 'keyword-highlight');
        var suggestionHighlighter__ = new Highlighter(settings.highlightClass || 'keyword-highlight');

        var indexStoreImpl__ = settings.indexStore || new InMemoryIndexStore(settings.maximumDictionaryKeySize || 3);
        Interface.ensureImplements(indexStoreImpl__, [IndexStore]);

        var indexWriter__ = new IndexWriter(indexStoreImpl__);
        var indexReader__ = new IndexReader(indexStoreImpl__);

        var indexSeparator__ = settings.indexSeparator || '/';
        var postfixFieldNameHighlight__ = settings.postfixFieldNameHighlight || 'Highlight';

        var resultNode__;
        var keyword__ = '';
        var duplicated__ = {};
        var additionalDictionaries__ = settings.additionalDictionaries || [];
        var suggestionList__ = [];
        var suggestionsSize__ = settings.suggestionsSize;
        var percentSuggest__ = settings.percentSuggest;

        /**
         * function stopword
         * use for separate keyword from sentence
         */
        var stopword__ = settings.stopword || function(text) {
            return replaceNotation(text).split(' ');
        };

        //----------------------------------------------------------------------
        createIndex();

        function createIndex() {
            for (var dictionaryIndex in additionalDictionaries__) {
                indexWriter__.addDictionary(additionalDictionaries__[dictionaryIndex]);
            }
            walkRepositoryReadKeyword(node__);

            for (var nodeIndex in node__.nodes) {
                walkRepositoryWriteIndex(0, nodeIndex, node__.nodes[nodeIndex]);
            }

            for (var duplicateType in duplicated__) {
                delete duplicated__[duplicateType];
            }
        }

        function createDictionary(sentence) {
            if (empty(sentence)) {
                return;
            }

            var keywords = stopword__(sentence);
            for (var keywordIndex in keywords) {
                indexWriter__.addDictionary(keywords[keywordIndex]);
            }
        }

        function walkRepositoryReadKeyword(node) {
            for (var field in indexOnFields__) {
                var indexName = indexOnFields__[field];
                createDictionary(node[indexName]);
            }

            var nodes = node.nodes;
            if (empty(nodes)) {
                return;
            }

            for (var nodeIndex in nodes) {
                walkRepositoryReadKeyword(nodes[nodeIndex]);
            }
        }

        function walkRepositoryWriteIndex(level, index, node) {
            reduceIndex(node, function(sentence) {
                indexWriter__.writeIndex(index, sentence);
            });

            // add field
            node.level = 'level-' + level;
            node.index = index + '';

            var nodes = node.nodes;
            if (empty(nodes)) {
                return;
            }

            for (var nodeIndex in nodes) {
                walkRepositoryWriteIndex(level + 1, index + indexSeparator__ + nodeIndex, nodes[nodeIndex]);
            }
        }

        function reduceIndex(node, callback) {
            for (var field in indexOnFields__) {
                var indexName = indexOnFields__[field];
                var duplicatedType = duplicated__[indexName];

                if (notDefined(duplicatedType)) {
                    duplicatedType = {};
                    duplicated__[indexName] = duplicatedType;
                }

                var duplicatedField = duplicatedType[node[indexName]];
                if (notDefined(duplicatedField)) {
                    duplicatedField = true;
                    duplicatedType[node[indexName]] = duplicatedField;
                    callback(node[indexName]);
                }
            }
        }

        this.reIndex = function(node) {
            node__ = node;
            createIndex();
        };

        this.getKeyword = function() {
            return keyword__;
        };

        this.getRepository = function() {
            return node__;
        };

        this.getIndexs = function() {
            return indexReader__.getIndexs();
        };

        this.clear = function() {
            keyword__ = '';
            return new ResultSearch({
                content: node__
            });
        };

        this.search = function(keyword) {
            if (empty(keyword)) {
                return new ResultSearch({
                    content: node__
                });
            }

            keyword = keyword.trim().toLowerCase();

            // keyword not change, such as user try typed an empty keyword
            // return old result
            if (keyword__ === keyword) {
                return getResultSearch();
            }

            //clean results
            highlighter__.resetTotal();
            suggestionHighlighter__.resetTotal();

            resultNode__ = {nodes: []};
            suggestionList__ = [];
            //
            keyword__ = keyword;
            pullSuggestions();
            keyword__ = generateNewKeywrod();
            search();
            keyword__ = keyword;

            return getResultSearch();
        };

        function generateNewKeywrod() {
            var suggestMap = {};

            forEach(suggestionList__, function(suggest) {
                var firstCharactor = suggest.word[0];
                if (notDefined(suggestMap[firstCharactor])) {
                    suggestMap[firstCharactor] = [];
                }

                suggestMap[firstCharactor].push(suggest.word);
            });

            var splitor = new InputSearchSplitor(keyword__);
            var keywordList = splitor.split();
            forEach(suggestMap, function(suggests) {
                getKeyword(suggests[0], keywordList);
            });

            removeSomeSuggests(keywordList);
            return reduceKeyword(keywordList);
        }

        function removeSomeSuggests(keywordList) {
            var newSuggets = [];
            forEach(keywordList, function(keyword) {
                forEach(suggestionList__, function(suggest) {
                    if (keyword !== suggest.word && notFoundIn(suggest, newSuggets)) {
                        newSuggets.push(suggest);
                    }
                });
            });

            suggestionList__ = newSuggets;
        }

        function reduceKeyword(keywordList) {
            var keywordMap = {};
            for (var index in keywordList) {
                keywordMap[keywordList[index]] = keywordList[index];
            }

            return object2Array(keywordMap).join(' ');
        }

        function getKeyword(word, list) {
            for (var index in list) {
                if (matchWord(list[index], word)) {
                    list[index] = word;
                }
            }
        }

        function matchWord(word1, word2) {
            return word1[0] === word2[0] && (word2.length < word1.length || notFoundIn(word1, word2));
        }

        function getResultSearch() {
            var splitor = new InputSearchSplitor(keyword__);
            splitor.split();
            return new ResultSearch({
                totalPosition: splitor.getKeywordSize() > 0 ? parseInt(highlighter__.getTotalHighlight() / splitor.getKeywordSize()) : 0,
                totalSentence: highlighter__.getTotalSentence(),
                content: resultNode__,
                suggestions: suggestionList__
            });
        }

        function search() {
            var indexes = indexReader__.readIndex(keyword__);
            for (var idx in indexes) {
                pullNode(indexes[idx]);
            }
        }

        function pullSuggestions() {
            suggestionList__ = new Suggestion({
                dictionary: indexReader__.getDictionaries(keyword__),
                suggestionsSize: suggestionsSize__,
                percentSuggest: percentSuggest__,
                highlighter: suggestionHighlighter__
            }).getSuggestionsWhenSearchFound(keyword__);
        }

        function pullNode(index) {
            var indexArray = index.split(indexSeparator__);
            var nodePointer = node__;
            var resultNodePointer = resultNode__;

            for (var idx in indexArray) {
                var subIndex = indexArray[idx];

                if (empty(subIndex)) {
                    break;
                }

                nodePointer = nodePointer.nodes[subIndex];
                var nodeTemp = resultNodePointer.nodes[subIndex];
                if (notDefined(nodeTemp)) {
                    nodeTemp = copyNode(nodePointer);
                    resultNodePointer.nodes[subIndex] = nodeTemp;
                }

                if (notDefined(nodeTemp.nodes)) {
                    nodeTemp.nodes = [];
                }

                resultNodePointer = nodeTemp;
            }
        }

        function copyNode(node) {
            var newNode = {};
            for (var fieldName in node) {
                if (fieldName !== 'nodes') {
                    newNode[fieldName] = node[fieldName];
                    for (var indexName in indexOnFields__) {
                        if (fieldName === indexOnFields__[indexName]) {
                            var sentence = newNode[fieldName];
                            var highlightText = highlighter__.highlight(keyword__, sentence);
                            if (notEmpty(highlightText)) {
                                newNode[fieldName + postfixFieldNameHighlight__] = highlightText;
                            }
                        }
                    }
                }
            }

            return newNode;
        }
    };


    /**
     * IndexSearch return
     */
    return constructor;

})();










/**
 * Blogger
 * for pull repository from blogger
 * 
 * @author redcrow (jittagorn pitakmetagoon)
 */

window.Blogger = window.Blogger || {};
window.Blogger.pullRepositoryFromBlog = function(blogUrl, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = blogUrl + '/feeds/posts/default?max-results=10000&alt=json-in-script&callback=blogFeedCallback';
    script.onload = function() {
        callback(window.blogFeedRepository);
    };

    document.getElementsByTagName('head')[0].appendChild(script);
};


function blogFeedCallback(xml) {
    var blogFeedRepository__ = {nodes: []};
    var feed = xml.feed;
    var categories = feed.category;
    for (var index in categories) {
        var category = categories[index];
        blogFeedRepository__.nodes.push({
            name: category.term,
            link: '/search/label/' + encodeURIComponent(category.term)
        });
    }

    var entries = feed.entry;
    for (var index in entries) {
        var entry = entries[index];
        entry.title.$t;
        var entryCategories = entry.category;
        for (var categoryIndex in entryCategories) {
            var entryCategory = entryCategories[categoryIndex];
            var category = getCategory(entryCategory.term);

            var nodes = category.nodes;
            if (!nodes) {
                nodes = [];
            }

            var node = {
                name: entry.title.$t,
                published: new Date(entry.published.$t),
                link: getPostLink(entry),
                nodes: []
            };

            if (index < 5) {
                node.newPost = true;
            }

            nodes.push(node);

            category.nodes = nodes;
        }
    }

    sortNodesByName(blogFeedRepository__.nodes);
    for (var index in blogFeedRepository__.nodes) {
        var node = blogFeedRepository__.nodes[index];
        sortByPublished(node.nodes);
    }

    function sortNodesByName(nodes) {
        nodes = nodes.sort(function(node1, node2) {
            return node1.name.localeCompare(node2.name);
        });
    }

    function sortByPublished(nodes) {
        nodes = nodes.sort(function(node1, node2) {
            return node1.published > node2.published;
        });
    }

    function getCategory(name) {
        var nodes = blogFeedRepository__.nodes;
        for (var index in nodes) {
            var node = nodes[index];
            if (node.name === name) {
                return node;
            }
        }

        return null;
    }

    function getPostLink(entry) {
        var links = entry.link;
        for (var index in links) {
            if (links[index].rel === 'alternate') {
                return links[index].href;
            }
        }

        return '';
    }

    window.blogFeedRepository = blogFeedRepository__;
}
;


//additional dictionaries
var additionalDictionaries="\u0e2b\u0e25\u0e32\u0e22 \u0e14\u0e39\u0e41\u0e25 \u0e23\u0e30\u0e22\u0e30 \u0e27\u0e07\u0e01\u0e25\u0e21 \u0e1b\u0e31\u0e0d\u0e2b\u0e32 \u0e23\u0e30\u0e14\u0e31\u0e1a \u0e41\u0e0a\u0e23\u0e4c \u0e40\u0e2b\u0e21\u0e32\u0e30 \u0e23\u0e31\u0e28\u0e21\u0e35 \u0e42\u0e04\u0e49\u0e07 \u0e15\u0e31\u0e27\u0e40\u0e25\u0e02 \u0e1e\u0e31\u0e12\u0e19\u0e32 \u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 \u0e15\u0e48\u0e32\u0e07 \u0e41\u0e1f\u0e49\u0e21 \u0e40\u0e27\u0e47\u0e1a \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a \u0e0b\u0e39\u0e21 \u0e15\u0e32\u0e21 \u0e04\u0e37\u0e2d \u0e23\u0e2b\u0e31\u0e2a \u0e04\u0e27\u0e32\u0e21 \u0e1b\u0e25\u0e2d\u0e14 \u0e2b\u0e19\u0e49\u0e32 \u0e2d\u0e2d\u0e01 \u0e10\u0e32\u0e19 \u0e41\u0e25\u0e19".split(" ");





var __searchPluginLocale__ = {};

__searchPluginLocale__.en = {
	SEARCH: 'search',
	FOUND: 'found',
	NOT_FOUND: 'not found',
	POSITIONS: 'positions on',
	SENTENCES: 'sentences',
	DO_YOU_MEAN: 'do you mean',
	CLEAR: 'clear',
	PLACE_HOLDER : 'search...',
	SEARCH_BUTTON_TITLE : 'click for search contents of blog',
	NEW : 'New'
};

__searchPluginLocale__.th = {
	SEARCH: 'ค้นหา',
	FOUND: 'พบ',
	NOT_FOUND: 'ไม่พบ',
	POSITIONS: 'ตำแหน่ง บน',
	SENTENCES: 'ประโยค',
	DO_YOU_MEAN: 'คุณหมายถึง',
	CLEAR: 'เคลียร์',
	PLACE_HOLDER : 'พิมพ์สิ่งที่ต้องการค้นหา...',
	SEARCH_BUTTON_TITLE : 'คลิกเพื่อค้นหาบนความของ blog',
	NEW : 'ใหม่'
};


(function(window, document, controller) {
    var SOURCE_ORIGIN = 'https://rawgithub.com/jittagornp/index-search-javascript/master/blogspot/';

    var resourceJS = [
        //
    ];

    var resourceStyle = [
        SOURCE_ORIGIN + 'blogspot.css?time=1'
    ];

    function forEachArray(array, callback, context_opt) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            var value = callback.call(context_opt, array[i], i, array, length);
            if (value === false) {
                return false;
            }
        }

        return true;
    }

    window.addEventListener('load', function() {
        //
        var jscript = getSearchScript();

        var blogspotURL = jscript.getAttribute('data-blogspot-url');
        var langs = jscript.getAttribute('data-languages');
        langs = langs ? JSON.parse(langs) : {};

        var localeName = jscript.getAttribute('data-locale') || 'en';
        var localeObj = __searchPluginLocale__[localeName];
        if (!localeObj) {
            alert('Not support locale (data-locale) "' + localeName + '"');
        }

        var elementId = jscript.getAttribute('data-element-id');
        var adDics = jscript.getAttribute('data-additionalDictionaries') || [];
        var isSlide = jscript.getAttribute('data-slide-search');
        if (!isSlide) {
            isSlide = 'true';
        }

        var theme = jscript.getAttribute('data-theme') || 'facebook'; //default
        if (Boolean(isSlide)) {
            resourceJS.push(SOURCE_ORIGIN + 'slide.js');

            resourceStyle.push(SOURCE_ORIGIN + 'jscrollpane/jscrollpane.css');
            resourceStyle.push(SOURCE_ORIGIN + 'slide.css');
            resourceStyle.push(SOURCE_ORIGIN + 'theme/' + theme + '/css/default.css?time=2');
        }

        var html = [
            '<div class="ns-plugin-search-scroll">',
            /**/'<div class="ns-plugin-search-scroll-content">',
            /******/'<div class="ns-plugin-search-box" style="display : none;">',
            /**********/'<input class="ns-plugin-search-input" placeholder="' + (langs.PLACE_HOLDER || localeObj.PLACE_HOLDER) + '"/>',
            /**********/'<button class="ns-plugin-search-clear-button">' + (langs.CLEAR || localeObj.CLEAR) + '</button>',
            /**********/'<div class="ns-plugin-search-result">',
            /**************/'<div class="ns-plugin-search-summary"></div>',
            /**************/'<div class="ns-plugin-search-suggestions"></div>',
            /**************/'<div class="ns-plugin-search-repositories"></div>',
            /**********/'</div>',
            /******/'</div>',
            /**/'</div>',
            '</div>',
            '<div class="ns-plugin-search-button" title="' + (langs.SEARCH_BUTTON_TITLE || localeObj.SEARCH_BUTTON_TITLE) + '">',
            '</div>'
        ];

        findById(elementId).innerHTML = html.join('');
        findById(elementId).className += 'ns-plugin-slide-search ns-plugin-theme-' + theme;

        forEachArray(resourceStyle, function(css) {
            loadStyle(css);
        });

        var searchContext = {
            url: blogspotURL,
            languages: langs,
            locale: {
                name: localeName,
                lang: localeObj,
                dictionaries: adDics
            }
        };

        if (resourceJS.length === 0) {
            controller && controller(searchContext, window.jQuery);
            return;
        }

        forEachArray(resourceJS, function(js, index, array, size) {
            var isLastest = index === (size - 1);
            loadScript(js, function() {
                isLastest && controller && controller(searchContext, window.jQuery);
            });
        });
    });

    function findById(id) {
        return document.getElementById(id);
    }

    function getSearchScript() {
        return document.querySelectorAll('.ns-blogsearch-script')[0];
    }

    function getHeadElement() {
        return document.getElementsByTagName('head')[0];
    }

    function loadStyle(styleUrl) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', styleUrl);
        getHeadElement().appendChild(link);
    }

    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = callback;
        script.onreadystatechange = function() {
            if (this.readyState === "loaded" || this.readyState === "complete") {
                callback.apply(this);
            }
        };

        script.src = url;
        getHeadElement().appendChild(script);
    }
})(window, document, function(context, $) {
    if (!window.Blogger || !$) {
        return;
    }

    Blogger.pullRepositoryFromBlog(context.url, function(repository) {
        /**/
        var hasDictionary = context.locale.dictionaries && context.locale.dictionaries.length > 0;
        var settings = {
            repository: repository, //require
            indexOnFields: ['name'], //require
            maximumIndexKeySize: 5,
            additionalDictionaries: hasDictionary ? context.locale.dictionaries.split(',') : window.additionalDictionaries
        };

        var indexSearch = new IndexSearch(settings);
        //====================================================================================


        var $searchInput = $('.ns-plugin-search-input');
        var $clearButton = $('.ns-plugin-search-clear-button');
        var $summary = $('.ns-plugin-search-summary');
        var $suggestions = $('.ns-plugin-search-suggestions');
        var $repositories = $('.ns-plugin-search-repositories');
        $('.ns-plugin-search-box').show();

        showResult(repository);
        $searchInput.keyup(function() {
            var keyword = $searchInput.val();
            var result = indexSearch.search(keyword);

            $summary.text('').hide();
            if (result.getTotalPosition() !== 0) {
                $summary.append((context.languages.SEARCH || context.locale.lang.SEARCH) + ' \'')
                        .append($('<span>').text(indexSearch.getKeyword()).addClass('summary-highlight'))
                        .append('\' ' + (context.languages.FOUND || context.locale.lang.FOUND) + ' ')
                        .append($('<span>').text(result.getTotalPosition()).addClass('summary-highlight'))
                        .append(' ' + (context.languages.POSITIONS || context.locale.lang.POSITIONS) + ' ')
                        .append($('<span>').text(result.getTotalSentence()).addClass('summary-highlight'))
                        .append(' ' + (context.languages.SENTENCES || context.locale.lang.SENTENCES))
                        .show();
            } else if (keyword !== '') {
                $summary.append((context.languages.SEARCH || context.locale.lang.SEARCH) + ' \'')
                        .append($('<span>').text(indexSearch.getKeyword()).addClass('summary-highlight'))
                        .append('\' ' + (context.languages.NOT_FOUND || context.locale.lang.NOT_FOUND))
                        .show();
            }


            $suggestions.text('').hide();
            var suggestions = result.getSuggestions();
            if (suggestions.length !== 0) {
                $suggestions.append((context.languages.DO_YOU_MEAN || context.locale.lang.DO_YOU_MEAN) + ' ');
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

                $suggestions.append(' ').append('?').show();
            }

            showResult(result.getContent());
        });

        $clearButton.click(function() {
            $searchInput.val('');
            indexSearch.clear();
            $summary.text('').hide();
            $suggestions.text('').hide();
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
                var $newPost = childNode.newPost ? $('<span>').text(context.locale.lang.NEW + '!').addClass('index-search-new-post') : '';
                var $childDOM = $('<ol>');
                var $list = $('<li>').attr('class', childNode.level)
                        .append($childLink)
                        .append($newPost);

                if (childNode.nodes && childNode.nodes.length > 0) {
                    $list.append($childDOM);
                }

                if (childNode.published) {
                    $list.attr('title', dateFormat(childNode.published));
                }

                $parentDOM.append($list);

                walkRepositoryShowResult(childNode, $childDOM);
            }
        }

        function dateFormat(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        }

        $('.ns-plugin-search-scroll-content').append('<div class="ns-plugin-search-about">Search plugin by <a target="_blank" href="http://search-plugin.blogspot.com/">search-plugin.blogspot.com</a></div>');
    });
});






//end
