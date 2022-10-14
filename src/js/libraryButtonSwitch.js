import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import { getCurrentStorage } from './localeStorage';
import getRefs from './getRefs';
const refs = getRefs();

refs.btnWatched.addEventListener('click', clickOnWatched);
refs.btnQueue.addEventListener('click', clickOnQueue);

clickOnWatched();

function clickOnWatched() {
  refs.btnWatched.classList.add('--active-btn');
  refs.btnQueue.classList.remove('--active-btn');
  let stack = getFromStorage('watched');
  if (!stack) {
    return refs.title.classList.remove('is-hidden');
  }
  removeMarkupMovieCard();
  let results = getFromStorage('watched');
  renderMarkupMovieCard({ results });
}

function clickOnQueue() {
  refs.btnQueue.classList.add('--active-btn');
  refs.btnWatched.classList.remove('--active-btn');
  let stack = getFromStorage('queue');
  if (!stack) {
    return refs.title.classList.remove('is-hidden');
  }
  removeMarkupMovieCard();
  let results = getFromStorage('queue');
  renderMarkupMovieCard({ results });
}
