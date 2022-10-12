// refs.addToWatchedBtn.addEventListener('click', onBtnWatchedClick);
// refs.addToQueueBtn.addEventListener('click', onQueueBtnClick);

// let watchedKey = 'watched';
// let queueKey = 'queue';
// let id = Number(e.target.dataset.id);

// const add = (refs.addToWatchedBtn.textContent = 'Add to watched');
// const remove = (refs.addToWatchedBtn.textContent = 'Remove from watched');

// // через локал
// function onBtnWatchedClick() {
//   if (add) {
//     btnTextChange(watchedKey);
//     addIdToLibrary(watchedKey, id);
//   }
//   if (remove) {
//     btnTextChange(watchedKey);
//     removeIdFromLibrary(watchedKey, id);
//   }
// }

// function onQueueBtnClick() {
//   switch (subscription) {
//     case 'add':
//       btnTextChange(watchedKey);
//       addIdToLibrary(watchedKey, id);
//       break;

//     case 'remove':
//       btnTextChange(watchedKey);
//       removeIdFromLibrary(watchedKey, id);
//       break;

//     default:
//       console.log('Invalid subscription type');
//   }
// }

// function btnTextChange(key) {
//   if (key === watchedKey) {
//     refs.addToWatchedBtn.textContent === 'Add to watched'
//       ? (refs.addToWatchedBtn.textContent = 'Remove from watched')
//       : (refs.addToWatchedBtn.textContent = 'Add to watched');
//   }
//   if (key === queueKey) {
//     refs.addToQueueBtn.textContent === 'Add to queue'
//       ? (refs.addToQueueBtn.textContent = 'Remove from queue')
//       : (refs.addToQueueBtn.textContent = 'Add to queue');
//   }
// }

// function getMovieByIdFromLocalStorage(id) {
//   const movies = getFromStorage('movies');
//   const result = movies.results.find(movie => movie.id === id);
//   return result;
// }

// function addIdToLibrary(key, id) {
//   const data = getMovieByIdFromLocalStorage(id);
//   const array = data.push();
//   saveToStorage(key, array);
// }

// function removeIdFromLibrary(key, id) {
//   const data = getFromStorage(key);
//   const array = data.results;
//   const index = array.indexOf(Number(id));
//   const newData = array.splice(index, 1);
//   saveToStorage(key, newData);
// }

// // якщо не получиться зробити через зберігання об'єктів по id,
// // то будемо зберігати id в масив по ключу в локал,
// // а потім робити запит на бекенд при рендері карток на сторінці library
// function saveMovieIdToLS(key, id) {
//   saveToStorage(key, data);
// }
// const API_KEY = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
// async function getMovieById(id) {
//   try {
//     const axiosInstance = axios.create({
//       baseURL: `https://api.themoviedb.org/3/movies/get-movie-details`,
//       headers: { 'Content-Type': 'application/json' },
//       params: {
//         api_key: API_KEY,
//       },
//     });

//     const { data } = await axiosInstance.get();

//     const result = {
//       ...data,
//       year: createYear(data),
//       customGenres: createGenresFromID(data),
//     };

//     return result;
//   } catch (error) {
//     console.error('Smth wrong with api ID fetch' + error);
//   }
// }
