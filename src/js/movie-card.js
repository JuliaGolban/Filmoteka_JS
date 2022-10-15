import { getGenresLocalStorege } from './api-genres';
import getRefs from './getRefs';
const refs = getRefs();
import trailer from '../js/trailers'

function renderMarkupMovieCard({ results }) {
  const markup = results
    .map(({ id, poster_path, genre_ids, title, release_date }) => {
      let name = getGenresLocalStorege(genre_ids);
      return `
                <li class="gallery__item" data-id="${id}">
                <div class="btn-id">
      <button data-id='${id}' class="btn-youtube">
      </div>
                        ${
                          poster_path
                            ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
                            : `<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
                        }
                        class="gallery__item-image" 
                        alt="${title}" width="250"
                        loading="lazy"
                        />
                        <div class="gallery__item-description">
                        <p class="gallery__item-description-title"> ${title}</p>
                        <p class="gallery__item-description-genres"> ${name} | ${release_date?.slice(
        0,
        4
      )}</p>
                    </div>
                </li> `;
    })
    .join('');
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
  trailer.createTrailerLink(document.querySelectorAll('.btn-youtube'));
}

function removeMarkupMovieCard() {
  refs.galleryList.innerHTML = '';
}

export { renderMarkupMovieCard, removeMarkupMovieCard };
