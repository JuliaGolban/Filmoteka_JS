import { getResponse } from './api-common';
import { clearData } from './localeCommon';

clearData();

trending();

function trending() {
  let currentPage = 1;

  localStorage.setItem('paramsPart', 'trending/movie/week');

  partUrl = localStorage.getItem('paramsPart');

  getResponse(currentPage, partUrl);
}