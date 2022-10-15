import getRefs from "../getRefs";

const refs = getRefs();

//todo animation btn OpenClose, render genres list
function onClickMenu() {
    refs.firstLine.classList.toggle('genres-nav-button__line--1');
    refs.secondLine.classList.toggle('genres-nav-button__line--2');
    refs.thirdLine.classList.toggle('genres-nav-button__line--3');
    refs.menu.classList.toggle('mobile-menu--open');
    renderGenres(getFromStorageGenre('genres'));
}

function renderGenres(results) {
    refs.menuList.innerHTML = '';
    const markup = results
      .map(({ name, id }) => {
        return `<li class="mobile-menu-item"><a class='mobile-menu-link' data-action="${id}">${name}</a></li>`;
      })
      .join('');
    refs.menuList.insertAdjacentHTML('beforeend', markup);
}
let storageKey = 'genres';
function getFromStorageGenre() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey));
      return data;
    } catch (err) {
      console.warn('Cannot parse JSON from localStorage');
      return null;
    }
}

export {onClickMenu, renderGenres, getFromStorageGenre};