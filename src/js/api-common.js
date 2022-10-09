import axios from 'axios';
import { pag } from '../js/pagination';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import getRefs from './getRefs';
const refs = getRefs();

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let currentPage = 0;
let totalPages = 0;

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const notFound = document.querySelector('#p-not');

function onSubmitForm(event) {
  event.preventDefault();
  clearData();

  const searchInput = input.value;
  localStorage.setItem('searchInput', `${searchInput}`);

  currentPage = 1;

  search(currentPage, );
  form.reset();
}

async function getResponse(currentPage) {

  const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie',
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
      query: localStorage.getItem('searchInput'),
      page: `${currentPage}`,
    },
  });

  const { data } = await axiosInstance.get();

  totalPages = `${data.total_pages}`;

  if (data.total_results === 0) {
    //? Where to insert
    return notFound.classList.remove('is-hidden');
  } else {
    pag(totalPages, currentPage);
  }
  //? Whom
  removeMarkupMovieCard();
  saveToStorage(data);
  getFromStorage();
  renderMarkupMovieCard(data);
  notFound.classList.add('is-hidden');
}

form.addEventListener('submit', onSubmitForm);

export { getResponse };
