import { getGenres } from './getGenres';
import getRefs from './getRefs';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';

// console.log(getFromStorage());

const refs = getRefs();

function findCurrentFilm(currentId) {
    let filmSet = getFromStorage();
    // return  filmSet.find(obj => obj.id === currentId);
    console.log(filmSet);
   }

refs.filmListEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        e.target.nodeName !== 'IMG' &&
        e.target.nodeName !== 'P' &&
        e.target.nodeName !== 'A'
      ) {
        return;
      }
     
      const movieId = e.target.closest('.gallery__item').dataset.id;
      //   console.log(movieId);
      findCurrentFilm();
    
     refs.modalEl.classList.remove('is-hidden');

  });

refs.closeBtn.addEventListener('click', () => {

    refs.modalEl.classList.add('is-hidden');
}); 

document.addEventListener('keydown', function(e){
	if(e.key === "Escape"){
        refs.modalEl.classList.add('is-hidden');
    }});



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
  genre,
  overview,
}){ refs.modalContainer.innerHTML = ''
    
   return  ( refs.modalContainer.innerHTML =`<div movie-modal__image-container data-year="${release_date}" data-action="${id}>
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
              <p class="movie-modal__overview">"${overview}"</p>`);
                               
                  
                
               }

