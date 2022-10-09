import axios from 'axios';

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
        return notFound.classList.remove('is-hidden');
        //? Where to insert
    }
        notFound.classList.add('is-hidden');
        renderingImagesIn(data);
        //? Whom
};

form.addEventListener('submit', onSubmitForm);

function renderingImagesIn(data) {
    console.log(data)
};

export { getResponse };