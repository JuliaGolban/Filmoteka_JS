import LS from './localeStorage';
import genre from './genre';
import getRefs from './getRefs';
import { renderMarkupMovieCard } from './movie-card';
//import { getFromStorage } from './localeCommon';
const refs = getRefs();
const getSt = getFromStorage;

  refs.btn.addEventListener('click', onClickMenu)
  function onClickMenu() {
    refs.firstLine.classList.toggle('genres-nav-button__line--1');
    refs.secondLine.classList.toggle('genres-nav-button__line--2');
    refs.thirdLine.classList.toggle('genres-nav-button__line--3');
    refs.menu.classList.toggle('mobile-menu--open');
    renderGenres(getSt())
  }

  function renderGenres(results) {
    refs.menuList.innerHTML = '';
    const markup = results.map(({name,id}) =>{
            // return `<li class="mobile-menu-item"><a data-action="${name.toLowerCase()}">${name}</a></li>`
            return `<li class="mobile-menu-item"><a data-action="${id}">${name}</a></li>`
    }).join('');

    refs.menuList.insertAdjacentHTML('beforeend', markup)

  }
  let storageKey = 'genres';
  function getFromStorage() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey));
      return data;
    } catch (err) {
      console.warn('Cannot parse JSON from localStorage');
      return null;
    }
  }

refs.menuList.addEventListener('click', sortByGenre)

function sortByGenre(event) {
    if (event.target.nodeName !== "A") {
      return;
    }
    let storageKey = 'movies';
      function getFromStorageMovies() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey));
      return data;
    } catch (err) {
      console.warn('Cannot parse JSON from localStorage');
      return null;
    }
  }
    const movies = getFromStorageMovies();
    console.log(movies)
    const value = event.target.dataset.action;
    const bool = movies.results;
    const arr = bool.map((obj)=>obj.genre_ids);
    for(let i = 0; i<arr.length; i+=1) {
      if(!arr[i].includes(Number(value))) {
        continue;
      }
      renderMarkupMovieCard(movies.arr)
    }
    
    console.log(Number(value))
  }