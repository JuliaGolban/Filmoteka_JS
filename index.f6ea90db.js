var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("84OC6");(0,(a=o("cChFX")).clearData)(),function(){localStorage.setItem("paramsPart","trending/movie/week");let e=localStorage.getItem("paramsPart");(0,r.getResponse)(1,e)}(),o("btlO4");r=o("84OC6");var a=o("cChFX");const l=document.querySelector(".search-form"),s=document.querySelector(".search-form__input");l.addEventListener("submit",(function(e){e.preventDefault(),(0,a.removeItem)("movies");const t=s.value;localStorage.setItem("paramsPart",`search/movie?query=${t}`),function(){let e=1;partUrl=localStorage.getItem("paramsPart"),(0,r.getResponse)(e,partUrl)}(),l.reset()})),o("84OC6"),o("cChFX"),o("9s1Cd"),o("brGcd"),o("iVAra"),o("9s1Cd");const c=document.querySelector(".genres-nav-button"),i=document.querySelector(".mobile-menu"),u=document.querySelector(".mobile-menu-list"),d=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(1)"),g=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(2)"),m=document.querySelector(".genres-nav-button .genres-nav-button__line:nth-of-type(3)");c.addEventListener("click",(function(){d.classList.toggle("genres-nav-button__line--1"),g.classList.toggle("genres-nav-button__line--2"),m.classList.toggle("genres-nav-button__line--3"),i.classList.toggle("mobile-menu--open"),function(e){u.innerHTML="";const t=e.map((({name:e})=>`<li class="mobile-menu-item"><a data-action="${e.toLowerCase()}">${e}</a></li>`)).join("");u.insertAdjacentHTML("beforeend",t)}(function(){try{return JSON.parse(localStorage.getItem("genres"))}catch(e){return console.warn("Cannot parse JSON from localStorage"),null}}())})),u.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;e.target.dataset.action;console.log(e.target.dataset.action)})),o("bTcpz"),o("cfJuj");
//# sourceMappingURL=index.f6ea90db.js.map
