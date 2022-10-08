import axios from 'axios';
const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';

async function trending() {
    const axiosInstance = axios.create({
        baseURL: 'https://api.themoviedb.org/3/trending/movie/week?',
        headers: { 'Content-Type': 'application/json' },
        params: {api_key: API_KEY},
    });
    const { data } = await axiosInstance.get();
    renderingImagesIn(data);
};

function renderingImagesIn(data) {console.log(data)};

trending();