var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,i.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("6CwyP"),i("bTcpz"),i("brGcd"),i("iVAra");var l=i("1DTXP"),o=i("03v4M"),s=i("btlO4");const r=(0,l.default)();r.btn.addEventListener("click",(function(){r.firstLine.classList.toggle("genres-nav-button__line--1"),r.secondLine.classList.toggle("genres-nav-button__line--2"),r.thirdLine.classList.toggle("genres-nav-button__line--3"),r.menu.classList.toggle("mobile-menu--open"),function(e){r.menuList.innerHTML="";const n=e.map((({name:e,id:n})=>`<li class="mobile-menu-item"><a class='mobile-menu-link' data-action="${n}">${e}</a></li>`)).join("");r.menuList.insertAdjacentHTML("beforeend",n)}(function(){try{return JSON.parse(localStorage.getItem("genres"))}catch(e){return console.warn("Cannot parse JSON from localStorage"),null}}())})),window.onscroll=function(){(document.body.scrollTop>200||document.documentElement.scrollTop>200)&&(r.menu.classList.remove("mobile-menu--open"),r.firstLine.classList.remove("genres-nav-button__line--1"),r.secondLine.classList.remove("genres-nav-button__line--2"),r.thirdLine.classList.remove("genres-nav-button__line--3"))};r.menuList.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;const n=function(){try{return JSON.parse(localStorage.getItem("watched"))}catch(e){return console.warn("Cannot parse JSON from localStorage"),null}}(),t=e.target.dataset.action,i=document.querySelectorAll(".mobile-menu-link");console.log("sortByGenre ~ value",t);for(let e=0;e<i.length;e+=1)t===i[e].dataset.action?i[e].classList.add("active"):i[e].classList.remove("active");let l=[];n.forEach((e=>{e.genre_ids.includes(Number(t))?((0,o.removeMarkupMovieCard)(),r.title.classList.add("is-hidden"),l.push(e)):(0,o.removeMarkupMovieCard)()})),function(e){const n=e.map((({id:e,poster_path:n,genre_ids:t,title:i,release_date:l})=>`\n                  <li class="gallery__item" data-id="${e}">\n                          ${n?`<img src="https://image.tmdb.org/t/p/w500${n}"`:'<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"'}\n                          class="gallery__item-image" \n                          alt="${i}" width="250"\n                          loading="lazy"\n                          />\n                          <div class="gallery__item-description">\n                          <p class="gallery__item-description-title"> ${i}</p>\n                          <p class="gallery__item-description-genres"> ${(0,s.getGenresLocalStorege)(t)} | ${null==l?void 0:l.slice(0,4)}</p>\n                      </div>\n                  </li> `)).join("");r.galleryList.insertAdjacentHTML("beforeend",n)}(l),0===l.length&&r.title.classList.remove("is-hidden")})),i("cfJuj"),i("2ix2C"),i("4S0r6"),i("jk2i2");
//# sourceMappingURL=library.7f841974.js.map
