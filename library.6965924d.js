!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("94krt"),i=n("iMXa0"),o=(0,n("l1RgP").default)();o.btnWatched.addEventListener("click",(function(){(0,a.removeMarkupMovieCard)(),o.btnWatched.classList.add("--active-btn"),o.btnQueue.classList.remove("--active-btn");var e=(0,i.getFromStorage)("watched");(0,a.renderMarkupMovieCard)({results:e})})),o.btnQueue.addEventListener("click",(function(){(0,a.removeMarkupMovieCard)(),o.btnQueue.classList.add("--active-btn"),o.btnWatched.classList.remove("--active-btn");var e=(0,i.getFromStorage)("queue");(0,a.renderMarkupMovieCard)({results:e})})),n("5xtVg"),n("15Ogw"),n("5JnJR"),n("lSt1Q"),n("iNWLi")}();
//# sourceMappingURL=library.6965924d.js.map
