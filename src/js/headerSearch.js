import { getResponse } from './api-common'
import { clearData } from './localeCommon';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');

function onSubmitForm(event) {
  event.preventDefault();
  clearData();

  const searchInput = input.value;
  localStorage.setItem('paramsPart', `search/movie?query=${searchInput}&`);


  search();
  form.reset();
}

function search() {
    
    let currentPage = 1;

    partUrl = localStorage.getItem('paramsPart');
  
    getResponse(currentPage, partUrl);
}

form.addEventListener('submit', onSubmitForm);
