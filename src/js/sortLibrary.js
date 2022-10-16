import getRefs from './getRefs';
import {removeMarkupMovieCard} from './movie-card';
import { getGenresLocalStorege } from './api-genres';

const refs = getRefs();

refs.btn.addEventListener('click', onClickMenu)
function onClickMenu() {
  refs.firstLine.classList.toggle('genres-nav-button__line--1');
  refs.secondLine.classList.toggle('genres-nav-button__line--2');
  refs.thirdLine.classList.toggle('genres-nav-button__line--3');
  refs.menu.classList.toggle('mobile-menu--open');
  renderGenres(getFromStorageGenre())
}
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        refs.menu.classList.remove('mobile-menu--open');
        refs.firstLine.classList.remove('genres-nav-button__line--1');
        refs.secondLine.classList.remove('genres-nav-button__line--2');
        refs.thirdLine.classList.remove('genres-nav-button__line--3');
    }
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

//sort
refs.menuList.addEventListener('click', sortByGenre)

function sortByGenre(event) {
    if (event.target.nodeName !== "A") {
      return;
    }

    let storageKey = 'watched';
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

  const value = event.target.dataset.action;
  const link = document.querySelectorAll('.mobile-menu-link');
  console.log('sortByGenre ~ value', value);
  for (let i = 0; i < link.length; i += 1) {
    if (value === link[i].dataset.action) {
      link[i].classList.add('active');
    } else {
      link[i].classList.remove('active');
    }
  }

  let arr =[];
  
  result.forEach((elem)=>{
    if(elem.genre_ids.includes(Number(value))) {
         removeMarkupMovieCard()
         refs.title.classList.add('is-hidden')
         arr.push(elem);
    }
    else {
      removeMarkupMovieCard();
    }
  })
  renderMarkupCardLibrary(arr);
  if(arr.length===0) {
    refs.title.classList.remove('is-hidden')
  }


  function renderMarkupCardLibrary(results) {
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