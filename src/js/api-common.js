import axios from 'axios';
import { default as pagination } from '../js/pagination';
import { getFromStorage, saveToStorage } from './localeCommon';
import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { Pagination } from 'tui-pagination';

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let currentPage = 1;
let totalPages = 0;
let partUrl = '';




const notFound = document.querySelector('#p-not');

async function getResponse(currentPage, partUrl) {

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
<<<<<<< Updated upstream
    pag(totalPages, currentPage);
    // pagRight(totalPages, currentPage);
=======
    pagination(totalPages, currentPage);
>>>>>>> Stashed changes
  }
  
  removeMarkupMovieCard();
  saveToStorage(data);
  getFromStorage();
  renderMarkupMovieCard(data);
  notFound.classList.add('is-hidden');
}

export { getResponse };
