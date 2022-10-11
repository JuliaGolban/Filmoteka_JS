export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),

    gallery: document.querySelector('div.gallery'),
    galleryList: document.querySelector('.gallery__list'),

    openModalUserBtn: document.querySelector('[data-modal-user-open]'),
    closeModalUserBtn: document.querySelector('[data-modal-user-close]'),
    modalUser: document.querySelector('[data-modal-user]'),

    modalEl: document.querySelector('.backdrop-movie'),
    closeBtn: document.querySelector('.movie-modal__close-button'),
    addToWatchedBtn: document.querySelector('[data-click="watched"]'),
    addToQueueBtn: document.querySelector('[data-click="queue"]'),
    modalContainer: document.querySelector('.movie-modal__render'),

    openModalTeam: document.querySelector('[data-modal-team-open]'),
    closeModalTeam: document.querySelector('[data-modal-team-close]'),
    modalTeam: document.querySelector('[data-modal-team]'),

    scrollToTop: document.querySelector('.scroll-to-top'),
  };
}
