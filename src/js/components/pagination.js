import { getResponse } from '../APIservise/APImovies';
import { clickOnWatched, clickOnQueue } from '../layouts/libraryButtonSwitch';
import sprite from '../../image/sprite.svg';
import getRefs from '../getRefs';
const refs = getRefs();

document
  .querySelector('main')
  .insertAdjacentHTML(
    'beforeend',
    '<ul id="pag-container" class="pagination list"></ul>'
  );

const paginationBox = document.querySelector('.pagination');

let globalCurrentPage = 0;

/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} globalCurrentPage - current page for click search
 * @param {Number} totalPages  - all pages for search
 */
function pagination(totalPages, currentPage) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentPage = currentPage;

  if (window.innerWidth > 320 && window.innerWidth < 767.98) {
    if (currentPage > 1) {
      markup += `<li class="pagination__left pagination__elem"><svg id="svg__left" class="icon__arrow icon__arrow--left" width="10px" height="10px"><use id="use__left" href="${sprite}#arrow-right"></use></svg></li>`;
    }
    if (currentPage > 2) {
      markup += `<li class="pagination__elem pagination__elem--page">${beforeTwoPage}</li>`;
    }
    if (currentPage > 1) {
      markup += `<li class="pagination__elem pagination__elem--page">${beforePage}</li>`;
    }
    markup += `<li class="pagination__currentPage pagination__elem"><b>${currentPage}</b></li>`;
    if (totalPages > currentPage) {
      markup += `<li class="pagination__elem pagination__elem--page">${afterPage}</li>`;
    }
    if (totalPages - 1 > currentPage) {
      markup += `<li class="pagination__elem pagination__elem--page">${afterTwoPage}</li>`;
    }
    if (totalPages > currentPage) {
      markup += `<li class="pagination__right pagination__elem"><svg id="svg__right" class="icon__arrow icon__arrow--right" width="10px" height="10px"><use id="use__right" href="${sprite}#arrow-right"></use></svg><li>`;
    }
  } else {
    if (currentPage > 1) {
      markup += `<li class="pagination__left pagination__elem"><svg id="svg__left" class="icon__arrow icon__arrow--left" width="10px" height="10px"><use id="use__left" class="use" href="${sprite}#arrow-right"></use></svg></li>`;
    }
    if (currentPage > 1) {
      markup += `<li class="pagination__elem pagination__elem--page pagination__elem--cutPage">1</li>`;
    }
    if (currentPage > 4) {
      markup += `<li class="pagination__elem pagination__elem--dots">...</li>`;
    }
    if (currentPage > 3) {
      markup += `<li class="pagination__elem pagination__elem--page">${beforeTwoPage}</li>`;
    }
    if (currentPage > 2) {
      markup += `<li class="pagination__elem pagination__elem--page">${beforePage}</li>`;
    }
    markup += `<li class="pagination__currentPage pagination__elem"><b>${currentPage}</b></li>`;
    if (totalPages - 1 > currentPage) {
      markup += `<li class="pagination__elem pagination__elem--page">${afterPage}</li>`;
    }
    if (totalPages - 2 > currentPage) {
      markup += `<li class="pagination__elem pagination__elem--page">${afterTwoPage}</li>`;
    }
    if (totalPages - 3 > currentPage) {
      markup += `<li class="pagination__elem pagination__elem--dots">...</li>`;
    }
    if (totalPages > currentPage) {
      markup += `<li class="pagination__elem pagination__elem--page pagination__elem--cutPage">${totalPages}</li>`;
      markup += `<li class="pagination__right pagination__elem"><svg id="svg__right" class="icon__arrow icon__arrow--right" width="10px" height="10px"><use id="use__right" href="${sprite}#arrow-right"></use></svg><li>`;
    }
  }

  paginationBox.innerHTML = markup;
}

paginationBox.addEventListener('click', onPaginationBoxClick);

function onPaginationBoxClick(evt) {
  let partUrl = localStorage.getItem('paramsPart');

  if (evt.target.nodeName !== 'LI') {
    if (evt.target.nodeName !== 'svg') {
      if (evt.target.nodeName !== 'use') {
        return;
      }
    }
  }
  if (
    evt.target.className === 'pagination__left pagination__elem' ||
    evt.target.id === 'svg__left' ||
    evt.target.id === 'use__left'
  ) {
    if (evt.target.baseURI.includes('library.html')) {
      if (refs.btnWatched.classList.contains('--active-btn')) {
        clickOnWatched((globalCurrentPage -= 1));
        return;
      } else {
        clickOnQueue((globalCurrentPage -= 1));
        return;
      }
    } else {
      getResponse((globalCurrentPage -= 1), partUrl);
      return;
    }
  }
  if (
    evt.target.className === 'pagination__right pagination__elem' ||
    evt.target.id === 'svg__right' ||
    evt.target.id === 'use__right'
  ) {
    if (evt.target.baseURI.includes('library.html')) {
      if (refs.btnWatched.classList.contains('--active-btn')) {
        clickOnWatched((globalCurrentPage += 1));
        return;
      } else {
        clickOnQueue((globalCurrentPage += 1));
        return;
      }
    } else {
      getResponse((globalCurrentPage += 1), partUrl);
      return;
    }
  }
  if (evt.target.textContent === '...') {
    return;
  }
  const page = Number(evt.target.textContent);

  if (evt.target.baseURI.includes('library.html')) {
    if (refs.btnWatched.classList.contains('--active-btn')) {
      clickOnWatched(page);
      return;
    }
    if (refs.btnQueue.classList.contains('--active-btn')) {
      clickOnQueue(page);
    }
  } else {
    getResponse(page, partUrl);
  }
}

export { pagination };
