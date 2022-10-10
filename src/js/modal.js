import { getGenres } from './getGenres';
import getRefs from './getRefs';

const refs = getRefs();

refs.filmListEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        e.target.nodeName !== 'IMG' &&
        e.target.nodeName !== 'P' &&
        e.target.nodeName !== 'A'
      ) {
        return;
      }
refs.modalEl.classList.remove('is-hidden');
// const movieId = e.target.dataset.id;

  });

refs.closeBtn.addEventListener('click', () => {

    refs.modalEl.classList.add('is-hidden');
}); 

document.addEventListener('keydown', function(e){
	if(e.key === "Escape"){
        refs.modalEl.classList.add('is-hidden');
    }});


// Разметка модалка
 function renderMarkupMovieModal({ results }) {
    const markup = results.map(({
  id,
  release_date,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genre,
  overview,
}) =>   {let name = getGenres(genre);
            return  `<div movie-modal__image-container data-year="${release_date}" data-action="${id}>
            <img class="movie-modal__image"
            src="${poster_path}"
            alt="${title}"
            width="250"
          />
        </div>
        <div class="info">
            <h3 class="movie-modal__title">"${title}"</h3>
            <table class="movie-modal__description description">
                <tbody>
                  <tr class="description__line">
                    <th class="description__head">Vote / Votes</th>
                    <td class="description__data">
                      <span class="description__vote">${vote_average}</span> /
                      <span class="description__votes">${vote_count}</span>
                    </td>
                  </tr>
                  <tr class="description__line">
                    <th class="description__head">Popularity</th>
                    <td class="description__data">""${popularity}</td>
                  </tr>
                  <tr class="description__line">
                    <th class="description__head">Original title</th>
                    <td class="description__data">"${original_title}"</td>
                  </tr>
                  <tr class="description__line">
                    <th class="description__head">Genre</th>
                    <td class="description__data">"${genre}"</td>
                  </tr>
                </tbody>
              </table>
              <p class="movie-modal__about">About</p>
              <p class="movie-modal__overview">"${overview}"</p>`;
                               })
                  .join('');
                refs.modalContainer.insertAdjacentHTML('beforeend', markup);
               }

