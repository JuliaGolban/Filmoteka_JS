import { getResponse } from './api-common';
import { clearData } from './localeCommon';
let partUrl = '';


/**
 * Create pagination
 * @param {Number} currentPage - current page for search
 * @param {Number} totalPages  - all pages for search
 */

trending();

function trending() {
  let currentPage = 1;

  localStorage.setItem('paramsPart', 'trending/movie/week');

  partUrl = localStorage.getItem('paramsPart');

  getResponse(currentPage, partUrl);
}
