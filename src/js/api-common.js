import axios from 'axios';
import { pag, pagRight } from '../js/pagination';
import { getFromStorage, saveToStorage } from './localeCommon';
import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';

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
    pag(totalPages, currentPage);
    pagRight(totalPages, currentPage);
  }
  
  removeMarkupMovieCard();
  saveToStorage(data);
  getFromStorage();
  renderMarkupMovieCard(data);
  notFound.classList.add('is-hidden');
}

export { getResponse };
