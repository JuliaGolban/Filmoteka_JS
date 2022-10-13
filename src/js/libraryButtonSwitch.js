import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import getRefs from './getRefs';
const refs = getRefs();

const btnWatched = document.querySelector('.watched');
const btnQueue = document.querySelector('.queue');

btnWatched.addEventListener('click', clickOnWatched);
btnQueue.addEventListener('click', clickOnQueue);

function clickOnWatched() {
  removeMarkupMovieCard();
  btnWatched.classList.add('--active-btn');
  btnQueue.classList.remove('--active-btn');
  let results = getFromStorage('watched');
  renderMarkupMovieCard({ results });
}

function clickOnQueue() {
  removeMarkupMovieCard();
  btnQueue.classList.add('--active-btn');
  btnWatched.classList.remove('--active-btn');
  let results = getFromStorage('queue');
  renderMarkupMovieCard({ results });
}

clickOnWatched();
