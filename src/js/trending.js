import axios from 'axios';
import { pag } from '../js/pagination'

const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';


trending();

async function trending(currentPage) {
    currentPage = 1;
    
    const axiosInstance = axios.create({
        baseURL: 'https://api.themoviedb.org/3/trending/movie/week?',
        headers: { 'Content-Type': 'application/json' },
        params: {
            api_key: API_KEY,
            page: `${currentPage}`,
        },
    });
    const { data } = await axiosInstance.get();
    
    totalPages = `${data.total_pages}`;
    
    pag(totalPages, currentPage);
    
    renderingImagesIn(data);
};

function renderingImagesIn(data) {console.log(data)};

export { trending };