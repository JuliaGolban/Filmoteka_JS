!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("jnxsx"),i("5xtVg"),i("15Ogw"),i("5JnJR");var o=i("l1RgP"),r=i("94krt"),a=i("2rpNs"),l=(0,o.default)();l.btn.addEventListener("click",(function(){l.firstLine.classList.toggle("genres-nav-button__line--1"),l.secondLine.classList.toggle("genres-nav-button__line--2"),l.thirdLine.classList.toggle("genres-nav-button__line--3"),l.menu.classList.toggle("mobile-menu--open"),function(e){l.menuList.innerHTML="";var n=e.map((function(e){var n=e.name,t=e.id;return'<li class="mobile-menu-item"><a class=\'mobile-menu-link\' data-action="'.concat(t,'">').concat(n,"</a></li>")})).join("");l.menuList.insertAdjacentHTML("beforeend",n)}(function(){try{return JSON.parse(localStorage.getItem(s))}catch(e){return console.warn("Cannot parse JSON from localStorage"),null}}())})),window.onscroll=function(){(document.body.scrollTop>200||document.documentElement.scrollTop>200)&&(l.menu.classList.remove("mobile-menu--open"),l.firstLine.classList.remove("genres-nav-button__line--1"),l.secondLine.classList.remove("genres-nav-button__line--2"),l.thirdLine.classList.remove("genres-nav-button__line--3"))};var s="genres";l.menuList.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;var n=function(){try{return JSON.parse(localStorage.getItem("watched"))}catch(e){return console.warn("Cannot parse JSON from localStorage"),null}}(),t=e.target.dataset.action,i=document.querySelectorAll(".mobile-menu-link");console.log("sortByGenre ~ value",t);for(var o=0;o<i.length;o+=1)t===i[o].dataset.action?i[o].classList.add("active"):i[o].classList.remove("active");var s=[];n.forEach((function(e){e.genre_ids.includes(Number(t))?((0,r.removeMarkupMovieCard)(),l.title.classList.add("is-hidden"),s.push(e)):(0,r.removeMarkupMovieCard)()})),c=s,d=c.map((function(e){var n=e.id,t=e.poster_path,i=e.genre_ids,o=e.title,r=e.release_date,l=(0,a.getGenresLocalStorege)(i);return'\n                  <li class="gallery__item" data-id="'.concat(n,'">\n                          ').concat(t?'<img src="https://image.tmdb.org/t/p/w500'.concat(t,'"'):'<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"','\n                          class="gallery__item-image" \n                          alt="').concat(o,'" width="250"\n                          loading="lazy"\n                          />\n                          <div class="gallery__item-description">\n                          <p class="gallery__item-description-title"> ').concat(o,'</p>\n                          <p class="gallery__item-description-genres"> ').concat(l," | ").concat(null==r?void 0:r.slice(0,4),"</p>\n                      </div>\n                  </li> ")})).join(""),void l.galleryList.insertAdjacentHTML("beforeend",d),0===s.length&&l.title.classList.remove("is-hidden");var c,d})),i("lSt1Q"),i("iNWLi"),i("9VC5X"),i("lJR4U")}();
//# sourceMappingURL=library.69613c72.js.map
