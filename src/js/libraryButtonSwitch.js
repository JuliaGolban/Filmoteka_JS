import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import { pagination } from './pagination';
import { getCurrentStorage } from './localeStorage';
import getRefs from './getRefs';
const refs = getRefs();
// console.log('refs', refs);

if (document.baseURI.includes('library.html')) {
  let page = 1;
  let totalPages = 1;
  let globalCurrentPage = 0;

  clickOnWatched(page);

  refs.btnWatched.addEventListener('click', clickOnWatched);
  refs.btnQueue.addEventListener('click', clickOnQueue);

  function clickOnWatched(page) {
    console.log(clickOnWatched, 'hello');
    refs.btnWatched.classList.add('--active-btn');
    refs.btnQueue.classList.remove('--active-btn');
    let stack = getFromStorage('watched');
    if (!stack) {
      refs.title.classList.remove('is-hidden');
      return;
    }
    removeMarkupMovieCard();
    let results = getFromStorage('watched');

    let cut = 0;
    if (page > 1) {
      cut = page * 20;
    }

    let spliceData = stack.splice(cut, 20);
    totalPages = Math.ceil(results.length / 20);

    renderMarkupMovieCard(spliceData);

    pagination(totalPages, page);
  }

  function clickOnQueue(page) {
    console.log(clickOnQueue, 'hello');
    refs.btnQueue.classList.add('--active-btn');
    refs.btnWatched.classList.remove('--active-btn');
    let stack = getFromStorage('queue');
    if (!stack) {
      return refs.title.classList.remove('is-hidden');
    }
    removeMarkupMovieCard();
    let results = getFromStorage('queue');

    let cut = 0;
    if (page > 1) {
      cut = page * 20;
    }

    let spliceData = results.splice(cut, 20);
    totalPages = Math.ceil(results.length / 20);

    renderMarkupMovieCard(spliceData);

    pagination(totalPages, page);
  }
}
export { clickOnWatched, clickOnQueue };
