export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    openModalTeam: document.querySelector('[data-modal-team-open]'),
    closeModalTeam: document.querySelector('[data-modal-team-close]'),
    modalTeam: document.querySelector('[data-modal-team]'),
    gallery: document.querySelector('div.gallery'),
    galleryList: document.querySelector('.gallery__list'),
    scrollToTop: document.querySelector('.scroll-to-top'),
    filmListEl: document.querySelector('.gallery'),
    modalEl: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.movie-modal__close-button'),
    addToWatchedBtn: document.querySelector('[data-click="watched"]'),
    addToQueueBtn: document.querySelector('[data-click="queue"]'),
    modalContainer: document.querySelector ('.movie-modal__container'),
    btn: document.querySelector('.genres-nav-button'),
    menuList: document.querySelector('.mobile-menu-list'),
    firstLine: document.querySelector('.genres-nav-button .genres-nav-button__line:nth-of-type(1)'),
    secondLine: document.querySelector('.genres-nav-button .genres-nav-button__line:nth-of-type(2)'),
    thirdLine: document.querySelector('.genres-nav-button .genres-nav-button__line:nth-of-type(3)'),
    menu: document.querySelector('.mobile-menu'),
    genresLink: document.querySelector('.mobile-menu-link')
  };
}
