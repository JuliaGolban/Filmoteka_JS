import { getResponse } from './api-common';
import { removeItem } from './localeCommon';

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
