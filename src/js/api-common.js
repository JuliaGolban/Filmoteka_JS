import axios from 'axios';

import { pag } from '../js/pagination'

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let currentPage = 0;
let totalPages = 0;

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');

function onSubmitForm(event) {
    event.preventDefault();
    
    const searchInput = input.value;
    localStorage.setItem("searchInput", `${searchInput}`);

    currentPage = 1;
  
    getResponse(currentPage);
    form.reset();
};

async function getResponse(currentPage) {
    
    
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
        console.log('Search result not successful. Enter the correct movie name and repeat');
        //? Where to insert
    } else {
        renderingImagesIn(data);
        //? Whom
    }
};

form.addEventListener('submit', onSubmitForm);

function renderingImagesIn(data) {
     console.log(data)
};

export { getResponse };

