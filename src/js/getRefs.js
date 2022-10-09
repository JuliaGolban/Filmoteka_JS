export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    openModalTeam: document.querySelector('[data-modal-team-open]'),
    closeModalTeam: document.querySelector('[data-modal-team-close]'),
    modalTeam: document.querySelector('[data-modal-team]'),
    gallery: document.querySelector('div.gallery'),
    galleryList: document.querySelector('.gallery__list'),
    scrollToTop: document.querySelector('.scroll-to-top'),
  };
}
