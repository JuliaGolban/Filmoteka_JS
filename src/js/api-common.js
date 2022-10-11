import axios from 'axios';
import { pag, pagRight } from '../js/pagination';
import { getFromStorage, saveToStorage } from './localeCommon';
import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let currentPage = 1;
let totalPages = 0;

// ?why img not found src=

// document.querySelector('body').insertAdjacentHTML('afterbegin', '<img src="./image/cinemaCamera.gif" alt="Spinner" width="50" class="spinner is-hidden" />');
const spinner = document.querySelector('.spinner');


const notFound = document.querySelector('#p-not');

async function getResponse(currentPage, partUrl) {
  spinner.classList.remove('is-hidden');

  const axiosInstance = axios.create({
    baseURL: `https://api.themoviedb.org/3/${partUrl}`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
      page: `${currentPage}`,
    },
  });

  const { data } = await axiosInstance.get();

  totalPages = `${data.total_pages}`;

  if (!data.total_results) {
    return notFound.classList.remove('is-hidden');
  } else {
    pag(totalPages, currentPage);
  }
  
  removeMarkupMovieCard();
  saveToStorage(data);
  getFromStorage();
  renderMarkupMovieCard(data);
  notFound.classList.add('is-hidden');
  
  spinner.classList.add('is-hidden');
}

export { getResponse };
