import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { getFromStorage } from './localeCommon';
import { pagination } from './pagination';
import getRefs from './getRefs';
const refs = getRefs();

/**
 * Create pagination
 * @param {Number} page - current page for search
 * @param {Number} cut - current page for click search
 * @param {Number} totalPages  - all pages for search
 */

if (document.baseURI.includes('library.html')) {
  let page = 1;
  let totalPages = 1;

  clickOnWatched(page);

  refs.btnWatched.addEventListener('click', onWatched);
  refs.btnQueue.addEventListener('click', onQueue);

  function onWatched() {
    clickOnWatched(page);
    refs.menu.classList.remove('mobile-menu--open');
    refs.firstLine.classList.remove('genres-nav-button__line--1');
    refs.secondLine.classList.remove('genres-nav-button__line--2');
    refs.thirdLine.classList.remove('genres-nav-button__line--3');
  }

  function clickOnWatched(page) {
    refs.btnWatched.classList.add('--active-btn');
    refs.btnQueue.classList.remove('--active-btn');
    let results = getFromStorage('watched');
    if (!results) {
      refs.title.classList.remove('is-hidden');
      return;
    }
    removeMarkupMovieCard();

    let cut = 0;
    if (page > 1) {
      cut = (page - 1) * 20;
    }

    totalPages = Math.ceil(results.length / 20);
    let spliceData = results.splice(cut, 20);

    renderMarkupMovieCard(spliceData);

    pagination(totalPages, page);
  }

  function onQueue() {
    clickOnQueue(page);
    refs.menu.classList.remove('mobile-menu--open');
    refs.firstLine.classList.remove('genres-nav-button__line--1');
    refs.secondLine.classList.remove('genres-nav-button__line--2');
    refs.thirdLine.classList.remove('genres-nav-button__line--3');
  }

  function clickOnQueue(page) {
    refs.btnQueue.classList.add('--active-btn');
    refs.btnWatched.classList.remove('--active-btn');
    let results = getFromStorage('queue');
    if (!results) {
      return refs.title.classList.remove('is-hidden');
    }
    removeMarkupMovieCard();

    let cut = 0;
    if (page > 1) {
      cut = (page - 1) * 20;
    }

    totalPages = Math.ceil(results.length / 20);
    let spliceData = results.splice(cut, 20);
    renderMarkupMovieCard(spliceData);

    pagination(totalPages, page);
  }
}
export { clickOnWatched, clickOnQueue };