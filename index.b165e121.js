!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("4LOYa");var o=r("4LOYa");(0,(a=r("iMXa0")).clearData)(),function(){localStorage.setItem("paramsPart","trending/movie/week");var e=localStorage.getItem("paramsPart");(0,o.getResponse)(1,e)}(),r("2rpNs");o=r("4LOYa");var a=r("iMXa0"),l=document.querySelector(".search-form"),i=document.querySelector(".search-form__input");l.addEventListener("submit",(function(e){e.preventDefault(),(0,a.removeItem)("movies");var t,n=i.value;localStorage.setItem("paramsPart","search/movie?query=".concat(n)),t=1,partUrl=localStorage.getItem("paramsPart"),(0,o.getResponse)(t,partUrl),l.reset()})),r("5xtVg"),r("15Ogw"),r("5JnJR"),r("7lLYX");var c=document.querySelector(".genres-nav-button"),s=document.querySelector(".mobile-menu"),u=document.querySelector(".mobile-menu-list"),g=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(1)"),m=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(2)"),d=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(3)"),f="genres";c.addEventListener("click",(function(){g.classList.toggle("genres-nav-button__line--1"),m.classList.toggle("genres-nav-button__line--2"),d.classList.toggle("genres-nav-button__line--3"),s.classList.toggle("mobile-menu--open"),function(e){u.innerHTML="";var t=e.map((function(e){var t=e.name;return'<li class="mobile-menu-item"><a data-action="'.concat(t.toLowerCase(),'">').concat(t,"</a></li>")})).join("");u.insertAdjacentHTML("beforeend",t)}(function(){try{return JSON.parse(localStorage.getItem(f))}catch(e){return console.warn("Cannot parse JSON from localStorage"),null}}())})),u.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;e.target.dataset.action;console.log(e.target.dataset.action)})),r("lSt1Q"),r("iNWLi")}();
//# sourceMappingURL=index.b165e121.js.map
