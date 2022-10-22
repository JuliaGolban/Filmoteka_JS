import axios from 'axios';
import { pagination } from '../components/pagination';
import { getFromStorage, saveToStorage } from '../localStorage/lsService';
import {
  renderMarkupMovieCard,
  removeMarkupMovieCard,
} from '../layouts/renderMovieCard';
import img from '../../image/cinemaCamera.gif';

/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} totalPages  - all pages for search
 */

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let totalPages = 0;

document
  .querySelector('body')
  .insertAdjacentHTML(
    'afterbegin',
    `<img src="${img}" alt="Spinner" width="50" class="spinner is-hidden" />`
  );
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

  let results = data.results;

  removeMarkupMovieCard();
  saveToStorage('movies', results);
  getFromStorage('movies');
  renderMarkupMovieCard(results);

  notFound.classList.add('is-hidden');
  spinner.classList.add('is-hidden');
}

export { getResponse };
