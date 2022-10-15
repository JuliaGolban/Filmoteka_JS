import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import { pagination } from './pagination';
import { getCurrentStorage } from './localeStorage';
import getRefs from './getRefs';
const refs = getRefs();

if (document.baseURI.includes(('library.html'))) {

  let page = 1;
  let totalPages = 1;
  let globalCurrentPage = 0;


  if (refs.btnWatched) { refs.btnWatched.addEventListener('click', clickOnWatched()) };
  if (refs.btnQueue) { refs.btnQueue.addEventListener('click', clickOnQueue()) };

  clickOnWatched(page);

  function clickOnWatched(page) {
    if (refs.btnWatched) { refs.btnWatched.classList.add('--active-btn') };
    if (refs.btnQueue) { refs.btnQueue.classList.remove('--active-btn') };
    let stack = getFromStorage('watched');
    if (!stack) {
      if (refs.title) { refs.title.classList.remove('is-hidden') }; return
    }
    removeMarkupMovieCard();
    let results = getFromStorage('watched');
  
  
    let cut = 0;
    if (page > 1) {
      cut = page * 10;
    }
  
    let spliceData = stack.splice(cut, 20);
    totalPages = Math.ceil(results.length / 20);
  
    renderMarkupMovieCard(spliceData);
  
    pagination(totalPages, page);
  }

  function clickOnQueue(page) {
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
      cut = page * 10;
    }
  
    let spliceData = results.splice(cut, 20);
    totalPages = Math.ceil(results.length / 20);

  
    renderMarkupMovieCard(spliceData);
  
    pagination(totalPages, page);
  }
}
export { clickOnWatched, clickOnQueue}