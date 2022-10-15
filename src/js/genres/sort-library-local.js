import getRefs from "../getRefs";
import { getFromStorage } from '../localeCommon';
import {removeMarkupMovieCard} from '../movie-card';
import renderMarkupCardLibrary from './render-from-storage';
refs = getRefs();

//get card from localeStorage with storageKey
let storageKey = ['watched', 'queue'];

const result = getFromStorage(storageKey[0]);

export default function sortByGenre(event) {
    if (event.target.nodeName !== "A") {
      return;
    }
//add and remove class active to link with genre
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
// sort card to active genre
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
}