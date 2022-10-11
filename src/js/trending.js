import { getResponse } from './api-common'
import { clearData } from './localeCommon';

let partUrl = '';

clearData();

trending();

function trending() {
  
    let currentPage = 1;
    
    localStorage.setItem('paramsPart', 'trending/movie/week');

    partUrl = localStorage.getItem('paramsPart');
  
    getResponse(currentPage, partUrl);
}


// async function trending(currentPage) {
//   currentPage = 1;

//   const axiosInstance = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/trending/movie/week?',
//     headers: { 'Content-Type': 'application/json' },
//     params: {
//       api_key: API_KEY,
//       page: `${currentPage}`,
//     },
//   });
//   const { data } = await axiosInstance.get();

// //   totalPages = `${data.total_pages}`;

// //   pag(totalPages, currentPage);

//   saveToStorage(data);
//   getFromStorage();
//   renderMarkupMovieCard(data);
// }

// export { trending };
