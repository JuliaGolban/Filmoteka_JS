import { getResponse } from './api-common'

document.querySelector('main').insertAdjacentHTML('beforeend', '<ul id="pag-container" class="pagination list"></ul>');


const paginationBox = document.querySelector('.pagination');

/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} totalPages  - all pages for search
 */
export default function pagination(totalPages, currentPage) {
  let markup = ''
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
    

  if (currentPage > 1) { markup += `<li class="pagination__arrow pagination__elem">&#129144;</li>` }
  if (currentPage > 1) { markup += `<li class="pagination__elem">1</li>` }
  if (currentPage > 4) { markup += `<li class="pagination__elem">...</li>` }
  if (currentPage > 3) { markup += `<li class="pagination__elem">${beforeTwoPage}</li>` }
  if (currentPage > 2) { markup += `<li class="pagination__elem">${beforePage}</li>` }
  markup += `<li class="pagination__currentPage pagination__elem"><b>${currentPage}</b></li>`
  if (totalPages - 1 > currentPage) { markup += `<li class="pagination__elem">${afterPage}</li>` }
  if (totalPages - 2 > currentPage) { markup += `<li class="pagination__elem">${afterTwoPage}</li>` }
  if (totalPages - 3 > currentPage) { markup += `<li class="pagination__elem">...</li>` }
  if (totalPages > currentPage) {
    markup += `<li class="pagination__elem">${totalPages}</li>`
    markup += `<li class="pagination__arrow pagination__elem">&#129146;<li>`
  }

  paginationBox.innerHTML = markup;
}

paginationBox.addEventListener('click', onPaginationBoxClick)


function onPaginationBoxClick(evt) {
    if (evt.target.nodeName !== 'LI') { return }
    if (evt.target.textContent === "🡸") { getResponse(currentPage -= 1, partUrl) }
    if (evt.target.textContent === "🡺") { getResponse(currentPage += 1, partUrl) }
    if (evt.target.textContent === "...") { return }
    const page = Number(evt.target.textContent);
    getResponse(page, partUrl);
}