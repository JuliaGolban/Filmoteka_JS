import axios from 'axios';
import { pag } from '../js/pagination';
import getRefs from './getRefs';
const refs = getRefs();

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';

trending();

async function trending(currentPage) {
  currentPage = 1;

  const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/trending/movie/week?',
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
      page: `${currentPage}`,
    },
  });
  const { data } = await axiosInstance.get();

  totalPages = `${data.total_pages}`;

  // pag(totalPages, currentPage);

  renderingImagesIn(data);
}

function renderingImagesIn(data) {
  const res = data.results;
  console.log(res);
  const markup = res
    .map(({ title, poster_path, release_date, genre_ids }) => {
      return `    
            <li class="gallery__item">
                <a href="#">
                    <img class="gallery__item-image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
                </a>
                <div class="gallery__item-description">
                    <p class="gallery__item-description-title">${title}</p>
                    <p class="gallery__item-description-genres">${genre_ids} | ${release_date.slice(
        0,
        4
      )}</p>
                </div>
            </li>
            `;
    })
    .join('');
  console.log(markup);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export { trending };
