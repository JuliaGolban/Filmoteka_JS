import axios from 'axios';
import { default as pagination } from '../js/pagination';
import { getFromStorage, saveToStorage } from './localeCommon';
import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { Pagination } from 'tui-pagination';

/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} totalPages  - all pages for search
 */


const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let totalPages = 0;
let partUrl = localStorage.getItem('paramsPart');

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
    spinner.classList.add('is-hidden');
    return notFound.classList.remove('is-hidden');
  } else {
    pagination(totalPages, currentPage);
  }
  
  removeMarkupMovieCard();
  saveToStorage(data);
  getFromStorage();
  renderMarkupMovieCard(data);
  notFound.classList.add('is-hidden');
  
  spinner.classList.add('is-hidden');
}

export { getResponse };
