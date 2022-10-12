import axios from 'axios';
import { getResponse } from './api-common';
import { pag, pagRight } from '../js/pagination';
import getRefs from './getRefs';
import { renderMarkupMovieCard, removeMarkupMovieCard } from './movie-card';
import { getGenresLocalStorege } from './api-genres';
//import {clearData, getFromStorage, saveToStorage, removeItem} from './localeCommon';

const refs = getRefs();
//! малюємо список жанрів /////////////////////////////////////////
refs.btn.addEventListener('click', onClickMenu)
function onClickMenu() {
  refs.firstLine.classList.toggle('genres-nav-button__line--1');
  refs.secondLine.classList.toggle('genres-nav-button__line--2');
  refs.thirdLine.classList.toggle('genres-nav-button__line--3');
  refs.menu.classList.toggle('mobile-menu--open');
  renderGenres(getFromStorageGenre())
}

function renderGenres(results) {
  refs.menuList.innerHTML = '';
  const markup = results.map(({name,id}) =>{
      return `<li class="mobile-menu-item"><a class='mobile-menu-link' data-action="${id}">${name}</a></li>`
  }).join('');
  refs.menuList.insertAdjacentHTML('beforeend', markup)
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

//! //////////////////////////////////////////////////////////////

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
  const result = getFromStorageMovies();
//
  const value = event.target.dataset.action;
  console.log(value)
  const elementsFilterGenre = result.results;
  console.log('1',elementsFilterGenre)
  
//

    let arr =[];
   
  elementsFilterGenre.forEach((elem)=>{
    if(elem.genre_ids.includes(Number(value))) {
         removeMarkupMovieCard()
         arr.push(elem);
        renderMarkupMovieCard(arr)

        console.log(elem)
 
    }
    // else {
    //   console.log('NO')
    // }
  })
  


  function renderMarkupMovieCard(results) {
    const markup = results
      .map(({ id, poster_path, genre_ids, title, release_date }) => {
        let name = getGenresLocalStorege(genre_ids);
        return `
                  <li class="gallery__item" data-id="${id}">
                          ${
                            poster_path
                              ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
                              : `<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
                          }
                          class="gallery__item-image" 
                          alt="${title}" width="250"
                          loading="lazy"
                          />
                          <div class="gallery__item-description">
                          <p class="gallery__item-description-title"> ${title}</p>
                          <p class="gallery__item-description-genres"> ${name} | ${release_date?.slice(
          0,
          4
        )}</p>
                      </div>
                  </li> `;
      })
      .join('');
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
  }
}
