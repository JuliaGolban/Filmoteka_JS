function o(){return{searchForm:document.querySelector("#search-form"),openModalTeam:document.querySelector("[data-modal-team-open]"),closeModalTeam:document.querySelector("[data-modal-team-close]"),modalTeam:document.querySelector("[data-modal-team]"),gallery:document.querySelector("div.gallery"),galleryList:document.querySelector(".gallery__list"),scrollToTop:document.querySelector(".scroll-to-top")}}const e=o();function l(){document.body.classList.toggle("modal-team-is-open"),e.modalTeam.classList.toggle("is-hidden")}e.openModalTeam.addEventListener("click",l),e.closeModalTeam.addEventListener("click",l);const t=o();const c=new class{scrollBy(){const{height:o}=t.gallery.firstElementChild.getBoundingClientRect();return window.scrollBy({top:2*o,behavior:"smooth"})}scrollToTop(){const o=t.gallery.firstElementChild;return window.scrollTo({top:o,behavior:"smooth"})}showScrollToTop(){t.scrollToTop.classList.remove("is-hidden")}hideScrollToTop(){t.scrollToTop.classList.add("is-hidden")}handleScrollToTop(){document.documentElement.scrollTop>.5?this.showScrollToTop():this.hideScrollToTop()}constructor(){}};t.scrollToTop.addEventListener("click",(()=>{c.scrollToTop()})),document.addEventListener("scroll",(()=>{c.handleScrollToTop()}));
//# sourceMappingURL=library.8e16b642.js.map
