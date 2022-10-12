import { getGenresLocalStorege } from './api-genres';
import getRefs from './getRefs';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';

// console.log(getFromStorage());

const refs = getRefs();

function getMovieById(id) {
  const movies = getFromStorage('movies');
  const result = movies.results.find(movie => movie.id === Number(id));
  return result;
}

refs.gallery.addEventListener('click', e => {
  e.preventDefault();
  if (
    e.target.nodeName !== 'IMG' &&
    e.target.nodeName !== 'P' &&
    e.target.nodeName !== 'A'
  ) {
    return;
  }

  const movieId = e.target.closest('.gallery__item').dataset.id;
  const movie = getMovieById(movieId);
  refs.modalEl.classList.remove('is-hidden');
  renderMarkupMovieModal(movie);
});

refs.closeBtn.addEventListener('click', closeModal);
refs.modalEl.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onEscPress);

function closeModal() {
  // document.removeEventListener('keydown', onEscPress);
  refs.modalEl.classList.add('is-hidden');
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

// Разметка модалка
function renderMarkupMovieModal({
  id,
  release_date,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genre_ids,
  overview,
}) {
  refs.modalContainer.innerHTML = '';
  let name = getGenresLocalStorege(genre_ids);

  return (refs.modalContainer.innerHTML = `
    <div movie-modal__image-container data-year=${release_date} data-action=${id}>
    ${
      poster_path
        ? `<img src= "https://image.tmdb.org/t/p/w500${poster_path}"`
        : `<img src= "https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
    }
      class="movie-modal__image"
      alt="${title}"
      loading="lazy"
      />
        </div>
        <div class="info">
            <h3 class="movie-modal__title">${title}</h3>
            <table class="movie-modal__description description">
                <tbody>
                  <tr class="description__line">
                    <th class="description__head">Vote / Votes</th>
                    <td class="description__data">
                      <span class="description__vote">${vote_average.toFixed(
                        1
                      )}</span> /
                      <span class="description__votes">${vote_count}</span>
                    </td>
                  </tr>
                  <tr class="description__line">
                    <th class="description__head">Popularity</th>
                    <td class="description__data">${popularity.toFixed(1)}</td>
                  </tr>
                  <tr class="description__line">
                    <th class="description__head">Original title</th>
                    <td class="description__head-titel">${original_title}</td>
                  </tr>
                  <tr class="description__line">
                    <th class="description__head">Genre</th>
                    <td class="description__data">${name}</td>
                  </tr>
                </tbody>
              </table>
              <p class="movie-modal__about">About</p>
              <p class="movie-modal__overview">${overview}</p>
              `);
}
