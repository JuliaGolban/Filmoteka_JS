import { getResponse } from './api-common';
import sprite from '../image/sprite.svg';


document.querySelector('main').insertAdjacentHTML('beforeend', '<ul id="pag-container" class="pagination list"></ul>');


const paginationBox = document.querySelector('.pagination');

/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} totalPages  - all pages for search
 */
export default function pagination(totalPages, currentPage) {
    let markup = ''
    let beforeThreePage = currentPage - 3;
    let beforeTwoPage = currentPage - 2;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;
    let afterTwoPage = currentPage + 2;
    let afterThreePage = currentPage + 3;
    
    if (window.innerWidth > 320 && window.innerWidth < 767.98) {
        if (currentPage > 1) { markup += `<li class="pagination__arrow pagination__elem"><svg class="icon__arrow icon__arrow--left" width="10px" height="10px"><use href="${sprite}#arrow-pag"></use></svg></li>` }
        if (currentPage > 2) { markup += `<li class="pagination__elem pagination__elem--page">${beforeTwoPage}</li>` }
        if (currentPage > 1) { markup += `<li class="pagination__elem pagination__elem--page">${beforePage}</li>` }
        markup += `<li class="pagination__currentPage pagination__elem"><b>${currentPage}</b></li>`
        if (totalPages - 1 > currentPage) { markup += `<li class="pagination__elem pagination__elem--page">${afterPage}</li>` }
        if (totalPages - 2 > currentPage) { markup += `<li class="pagination__elem pagination__elem--page">${afterTwoPage}</li>` }
        if (totalPages > currentPage) {
            markup += `<li class="pagination__arrow pagination__elem"><svg class="icon__arrow icon__arrow--right" width="10px" height="10px"><use href="${sprite}#arrow-pag"></use></svg><li>`
        }
} else {
        if (currentPage > 1) { markup += `<li class="pagination__arrow pagination__elem"><svg class="icon__arrow icon__arrow--left" width="10px" height="10px"><use href="${sprite}#arrow-pag"></use></svg></li>` }
        if (currentPage > 1) { markup += `<li class="pagination__elem pagination__elem--page pagination__elem--cutPage">1</li>` }
        if (currentPage > 4) { markup += `<li class="pagination__elem pagination__elem--dots">...</li>` }
        if (currentPage > 3) { markup += `<li class="pagination__elem pagination__elem--page">${beforeTwoPage}</li>` }
        if (currentPage > 2) { markup += `<li class="pagination__elem pagination__elem--page">${beforePage}</li>` }
        markup += `<li class="pagination__currentPage pagination__elem"><b>${currentPage}</b></li>`
        if (totalPages - 1 > currentPage) { markup += `<li class="pagination__elem pagination__elem--page">${afterPage}</li>` }
        if (totalPages - 2 > currentPage) { markup += `<li class="pagination__elem pagination__elem--page">${afterTwoPage}</li>` }
        if (totalPages - 3 > currentPage) { markup += `<li class="pagination__elem pagination__elem--dots">...</li>` }
        if (totalPages > currentPage) {
            markup += `<li class="pagination__elem pagination__elem--page pagination__elem--cutPage">${totalPages}</li>`
            markup += `<li class="pagination__arrow pagination__elem"><svg class="icon__arrow icon__arrow--right" width="10px" height="10px"><use href="${sprite}#arrow-pag"></use></svg><li>`
        }
    }

    paginationBox.innerHTML = markup;
    
    function onPaginationBoxClick(evt) {
    if (evt.target.nodeName !== 'LI') { return }
    if (evt.target.textContent === "🡸") { getResponse(currentPage -= 1, partUrl) }
    if (evt.target.textContent === "🡺") { getResponse(currentPage += 1, partUrl) }
    if (evt.target.textContent === "...") { return }
    const page = Number(evt.target.textContent);
    getResponse(page, partUrl);
}
}

paginationBox.addEventListener('click', onPaginationBoxClick)


function onPaginationBoxClick(evt) {
    partUrl = localStorage.getItem('paramsPart');
    
    if (evt.target.nodeName !== 'LI') { return }
    if (evt.target.textContent === "🡸") { getResponse(currentPage -= 1, partUrl) }
    if (evt.target.textContent === "🡺") { getResponse(currentPage += 1, partUrl) }
    if (evt.target.textContent === "...") { return }
    const page = Number(evt.target.textContent);
    getResponse(page, partUrl);
}