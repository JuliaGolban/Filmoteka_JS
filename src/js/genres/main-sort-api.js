import { getResponse } from '../APIservise/APImovies';
import { removeItem } from '../localStorage/lsService';

function sortByGenre(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  removeItem('movies');
  const link = document.querySelectorAll('.mobile-menu-link');
  const value = event.target.dataset.action;

  for (let i = 0; i < link.length; i += 1) {
    if (value === link[i].dataset.action) {
      link[i].classList.add('active');
    } else {
      link[i].classList.remove('active');
    }
  }

  localStorage.setItem(
    'paramsPart',
    `discover/movie?sort_by=popularity.desc&with_genres=${value}`
  );
  sort();
}

function sort() {
  let currentPage = 1;
  let partUrl = localStorage.getItem('paramsPart');
  getResponse(currentPage, partUrl);
}
export { sortByGenre };
