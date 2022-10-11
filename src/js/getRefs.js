export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),

    gallery: document.querySelector('div.gallery'),
    galleryList: document.querySelector('.gallery__list'),

    modalEl: document.querySelector('.backdrop'),
    modalContainer: document.querySelector('.movie-modal__image-container'),
    closeBtn: document.querySelector('.movie-modal__close-button'),
    addToWatchedBtn: document.querySelector('[data-click="watched"]'),
    addToQueueBtn: document.querySelector('[data-click="queue"]'),

    openModalTeam: document.querySelector('[data-modal-team-open]'),
    closeModalTeam: document.querySelector('[data-modal-team-close]'),
    modalTeam: document.querySelector('[data-modal-team]'),

    scrollToTop: document.querySelector('.scroll-to-top'),
  };
}
