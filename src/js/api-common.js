import axios from 'axios';
import getRefs from './getRefs';
const refs = getRefs();

import { pag } from '../js/pagination'

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let currentPage = 0;
let totalPages = 0;

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const notFound = document.querySelector('#p-not');


function onSubmitForm(event) {
    event.preventDefault();

    const searchInput = input.value;
    localStorage.setItem("searchInput", `${searchInput}`);

    currentPage = 1;

    getResponse(currentPage);
    form.reset();
    
};

async function getResponse(currentPage) {

    if (input.focusVisible === true) {
    console.log('1')
    }

    const axiosInstance = axios.create({
        baseURL: 'https://api.themoviedb.org/3/search/movie',
        headers: { 'Content-Type': 'application/json' },
        params: {
            api_key: API_KEY,
            query: localStorage.getItem("searchInput"),
            page: `${currentPage}`,
        },
    });

    const { data } = await axiosInstance.get();
    
    totalPages = `${data.total_pages}`;
    
    pag(totalPages, currentPage);

    if (data.total_results === 0) {
        return (notFound.classList.remove('is-hidden'), notFound.classList.add('not-found'));
        //? Where to insert
    }  
        renderingImagesIn(data);
        return (notFound.classList.add('is-hidden'),notFound.classList.remove('not-found'));
      
        //? Whom
};

form.addEventListener('submit', onSubmitForm);

function renderingImagesIn(data) {
    const res = data.results;
    console.log(res)
    const markup = res.map(({title, poster_path, release_date, genre_ids})=>{
        return `    
            <li class="gallery__item">
                <a href="#">
                    <img class="gallery__item-image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
                </a>
                <div class="gallery__item-description">
                    <p class="gallery__item-description-title">${title}</p>
                    <p class="gallery__item-description-genres">${genre_ids} | ${release_date.slice(0,4)}</p>
                </div>
            </li>
            `
    }).join('');
    console.log(markup)
    refs.galleryList.insertAdjacentHTML('beforeend', markup)
};

export { getResponse };