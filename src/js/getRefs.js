export default function getRefs() {
  return {
    // Search form
    searchForm: document.querySelector('#search-form'),

    // Gallery with movies
    gallery: document.querySelector('div.gallery'),
    galleryList: document.querySelector('.gallery__list'),

    // Registration modal window
    openModalUserBtn: document.querySelector('[data-modal-user-open]'),
    closeModalUserBtn: document.querySelector('[data-modal-user-close]'),
    modalUser: document.querySelector('[data-modal-user]'),

    // Firebase
    txtEmail: document.querySelector('#txtEmail'),
    txtPassword: document.querySelector('#txtPassword'),

    // btnLogin: document.querySelector('#btnLogin')
    btnSignup: document.querySelector('#btnSignup'),

    btnLogout: document.querySelector('#btnLogout'),

    // divAuthState: document.querySelector('#divAuthState')
    lblAuthState: document.querySelector('#lblAuthState'),

    divLoginError: document.querySelector('#divLoginError'),
    lblLoginErrorMessage: document.querySelector('#lblLoginErrorMessage'),

    // Modal window with movie
    modalEl: document.querySelector('.backdrop-movie'),
    closeBtn: document.querySelector('.movie-modal__close-button'),
    addToWatchedBtn: document.querySelector('[data-click="watched"]'),
    addToQueueBtn: document.querySelector('[data-click="queue"]'),
    modalContainer: document.querySelector('.movie-modal__render'),
    modal: document.querySelector('.movie-modal__container'),

    // Modal window with developers
    openModalTeam: document.querySelector('[data-modal-team-open]'),
    closeModalTeam: document.querySelector('[data-modal-team-close]'),
    modalTeam: document.querySelector('[data-modal-team]'),

    // Scroll the page
    scrollToTop: document.querySelector('.scroll-to-top'),
  };
}
