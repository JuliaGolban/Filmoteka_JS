import { getResponse } from '../APIservise/APImovies';
import { removeItem } from '../localStorage/lsService';

/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} totalPages  - all pages for search
 */

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');

function onSubmitForm(event) {
  event.preventDefault();
  removeItem('movies');

  const searchInput = input.value;
  localStorage.setItem('paramsPart', `search/movie?query=${searchInput}`);

  search();
  form.reset();
}

function search() {
  let currentPage = 1;

  let partUrl = localStorage.getItem('paramsPart');

  getResponse(currentPage, partUrl);
}

form.addEventListener('submit', onSubmitForm);
