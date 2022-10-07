import axios from 'axios';
import Pagination from 'tui-pagination';


const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
let currentPage = 0;
let totalItems = 0;

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
    
    totalItems = `${data.total_results}`;
    
    pag(totalItems);

        
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

function pag(totalItems) {

    const body = document.querySelector('body');

    const paginationBlock = '<div id="tui-pagination-container" class="tui-pagination"></div>';

    body.insertAdjacentHTML('beforeend', paginationBlock);

    const container = document.getElementById('tui-pagination-container');
    const options = { // below default value of options
        totalItems: totalItems,
        itemsPerPage: 20,
        visiblePages: 5,
        page: `${currentPage}`,
        centerAlign: true,

    }

    const instance = new Pagination(container, options);
    
    instance.on('afterMove', function (eventData) {
        currentPage = eventData.page;
        getResponse(currentPage);
    });


}
