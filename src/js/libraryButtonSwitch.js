import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import getRefs from './getRefs';
const refs = getRefs();

refs.btnWatched.addEventListener('click', clickOnWatched);
refs.btnQueue.addEventListener('click', clickOnQueue);

function clickOnWatched() {
  removeMarkupMovieCard();
  refs.btnWatched.classList.add('--active-btn');
  refs.btnQueue.classList.remove('--active-btn');
  let results = getFromStorage('watched');
  renderMarkupMovieCard({ results });
}

function clickOnQueue() {
  removeMarkupMovieCard();
  refs.btnQueue.classList.add('--active-btn');
  refs.btnWatched.classList.remove('--active-btn');
  let results = getFromStorage('queue');
  renderMarkupMovieCard({ results });
}
