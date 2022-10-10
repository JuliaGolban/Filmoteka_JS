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
  };
}
