!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequired7c6=r),r.register("iE7OH",(function(t,n){var a,i;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,n){var a;e(t.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var i={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),i[e]=t),t}})),r("iE7OH").register(JSON.parse('{"EVgbq":"index.7c15fbae.js","53s11":"sprite.7e1a1019.svg","39yDM":"cinemaCamera.7e0a12c0.gif","2hvCh":"index.2aec58bc.js"}'));var o,l=r("bpxeT"),s=r("2TvXO"),c=r("dIxxU");o=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("53s11"),document.querySelector("main").insertAdjacentHTML("beforeend",'<ul id="pag-container" class="pagination list"></ul>');var g=document.querySelector(".pagination"),_=0;function u(e,n){var a="",i=n-2,r=n-1,l=n+1,s=n+2;_=n,window.innerWidth>320&&window.innerWidth<767.98?(n>1&&(a+='<li class="pagination__left pagination__elem"><svg id="svg__left" class="icon__arrow icon__arrow--left" width="10px" height="10px"><use id="use__left" href="'.concat(t(o),'#arrow-pag"></use></svg></li>')),n>2&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(i,"</li>")),n>1&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(r,"</li>")),a+='<li class="pagination__currentPage pagination__elem"><b>'.concat(n,"</b></li>"),e>n&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(l,"</li>")),e-1>n&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(s,"</li>")),e>n&&(a+='<li class="pagination__right pagination__elem"><svg id="svg__right" class="icon__arrow icon__arrow--right" width="10px" height="10px"><use id="use__right" href="'.concat(t(o),'#arrow-pag"></use></svg><li>'))):(n>1&&(a+='<li class="pagination__left pagination__elem"><svg id="svg__left" class="icon__arrow icon__arrow--left" width="10px" height="10px"><use id="use__left" class="use" href="'.concat(t(o),'#arrow-pag"></use></svg></li>')),n>1&&(a+='<li class="pagination__elem pagination__elem--page pagination__elem--cutPage">1</li>'),n>4&&(a+='<li class="pagination__elem pagination__elem--dots">...</li>'),n>3&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(i,"</li>")),n>2&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(r,"</li>")),a+='<li class="pagination__currentPage pagination__elem"><b>'.concat(n,"</b></li>"),e-1>n&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(l,"</li>")),e-2>n&&(a+='<li class="pagination__elem pagination__elem--page">'.concat(s,"</li>")),e-3>n&&(a+='<li class="pagination__elem pagination__elem--dots">...</li>'),e>n&&(a+='<li class="pagination__elem pagination__elem--page pagination__elem--cutPage">'.concat(e,"</li>"),a+='<li class="pagination__right pagination__elem"><svg id="svg__right" class="icon__arrow icon__arrow--right" width="10px" height="10px"><use id="use__right" href="'.concat(t(o),'#arrow-pag"></use></svg><li>'))),g.innerHTML=a}g.addEventListener("click",(function(e){if(partUrl=localStorage.getItem("paramsPart"),console.log(partUrl),"LI"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName)return;if("pagination__left pagination__elem"===e.target.className||"svg__left"===e.target.id||"use__left"===e.target.id)return void w(_-=1,partUrl);if("pagination__right pagination__elem"===e.target.className||"svg__right"===e.target.id||"use__right"===e.target.id)return void w(_+=1,partUrl);if("..."===e.target.textContent)return;w(Number(e.target.textContent),partUrl),console.log(_)}));var p,d=r("iMXa0"),m=r("94krt");p=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("39yDM");var f="e32c2b640d0c14cb8349bc85f9ee8b0e",v=0;document.querySelector("body").insertAdjacentHTML("afterbegin",'<img src="'.concat(t(p),'" alt="Spinner" width="50" class="spinner is-hidden" />'));var h=document.querySelector(".spinner"),b=document.querySelector("#p-not");function w(e,t){return y.apply(this,arguments)}function y(){return(y=t(l)(t(s).mark((function e(n,a){var i,r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.classList.remove("is-hidden"),i=c.default.create({baseURL:"https://api.themoviedb.org/3/".concat(a),headers:{"Content-Type":"application/json"},params:{api_key:f,page:"".concat(n)}}),e.next=4,i.get();case 4:if(r=e.sent.data,v="".concat(r.total_pages),r.total_results){e.next=11;break}return h.classList.add("is-hidden"),e.abrupt("return",b.classList.remove("is-hidden"));case 11:u(v,n);case 12:(0,m.removeMarkupMovieCard)(),(0,d.saveToStorage)("movies",r),(0,d.getFromStorage)("movies"),(0,m.renderMarkupMovieCard)(r),b.classList.add("is-hidden"),h.classList.add("is-hidden");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d=r("iMXa0");(0,d.clearData)(),localStorage.setItem("paramsPart","trending/movie/week"),w(1,localStorage.getItem("paramsPart")),r("2rpNs");d=r("iMXa0");var S=document.querySelector(".search-form"),x=document.querySelector(".search-form__input");S.addEventListener("submit",(function(e){e.preventDefault(),(0,d.removeItem)("movies");var t,n=x.value;localStorage.setItem("paramsPart","search/movie?query=".concat(n)),t=1,partUrl=localStorage.getItem("paramsPart"),w(t,partUrl),S.reset()})),r("5xtVg"),r("15Ogw"),r("5JnJR"),r("7lLYX");var L=document.querySelector(".genres-nav-button"),q=document.querySelector(".mobile-menu"),E=document.querySelector(".mobile-menu-list"),H=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(1)"),N=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(2)"),M=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(3)"),C="genres";L.addEventListener("click",(function(){H.classList.toggle("genres-nav-button__line--1"),N.classList.toggle("genres-nav-button__line--2"),M.classList.toggle("genres-nav-button__line--3"),q.classList.toggle("mobile-menu--open"),function(e){E.innerHTML="";var t=e.map((function(e){var t=e.name;return'<li class="mobile-menu-item"><a data-action="'.concat(t.toLowerCase(),'">').concat(t,"</a></li>")})).join("");E.insertAdjacentHTML("beforeend",t)}(function(){try{return JSON.parse(localStorage.getItem(C))}catch(e){return console.warn("Cannot parse JSON from localStorage"),null}}())})),E.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;e.target.dataset.action;console.log(e.target.dataset.action)})),r("lSt1Q"),r("iNWLi")}();
//# sourceMappingURL=index.7c15fbae.js.map
