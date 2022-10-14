import { getResponse } from './api-common';
import getRefs from './getRefs';
import {removeItem} from './localeCommon';

const refs = getRefs();

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


refs.menuList.addEventListener('click', sortByGenre)



function sortByGenre(event) {
    if (event.target.nodeName !== "A") {
      return;
    }
  removeItem('movies');
  const link = document.querySelectorAll('.mobile-menu-link');
  const value = event.target.dataset.action;
  for(let i =0; i<link.length; i+=1) {
    if(value===link[i].dataset.action) {
      link[i].classList.add('active')
    }
    else{
      link[i].classList.remove('active')
    }
  }
  
  localStorage.setItem('paramsPart', `discover/movie?sort_by=popularity.desc&with_genres=${value}`)
  sort();
}

function sort() {
   let currentPage = 1;
   partUrl = localStorage.getItem('paramsPart');
   getResponse(currentPage, partUrl)
}