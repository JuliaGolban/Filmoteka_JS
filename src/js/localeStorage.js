import axios from 'axios';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import getRefs from './getRefs';
const refs = getRefs();

/*
  получаем текущее хранилище.
*/
function getCurrentStorage() {
  let watched = localStorage.getItem('watched');
  let queue = localStorage.getItem('queue');
  if (watched === null) {
    watched = [];
  } else {
    watched = JSON.parse(watched);
  }
  if (queue === null) {
    queue = [];
  } else {
    queue = JSON.parse(queue);
  }
  return [watched, queue];
}

/**
   Функция принимает только 2 параметра filmObj - объект со свойствами фильма
  и filmType - тип фильма (только 2 варианта: 'watched' или 'queue').
  
  // @param {objects} filmObj;
  // @param {string} filmType;
 */
function addToStorage(filmObj, filmType) {
  const [watched, queue] = getCurrentStorage();
  const watchedId = watched.map(film => film.id);
  const queueId = queue.map(film => film.id);

  switch (filmType) {
    case 'watched':
      if (!watchedId.includes(filmObj.id)) {
        watched.push(filmObj);
        const filtrededQueue = queue.filter(film => {
          return film.id !== filmObj.id;
        });

        localStorage.setItem('watched', JSON.stringify(watched));
        localStorage.setItem('queue', JSON.stringify(filtrededQueue));
      } else {
        const filtrededWatched = watched.filter(film => {
          return film.id !== filmObj.id;
        });
        localStorage.setItem('watched', JSON.stringify(filtrededWatched));
      }
      break;
    case 'queue':
      if (!queueId.includes(filmObj.id)) {
        queue.push(filmObj);
        const filtrededWatched = watched.filter(film => {
          return film.id !== filmObj.id;
        });

        localStorage.setItem('watched', JSON.stringify(filtrededWatched));
        localStorage.setItem('queue', JSON.stringify(queue));
      } else {
        const filtrededQueue = queue.filter(film => {
          return film.id !== filmObj.id;
        });
        localStorage.setItem('queue', JSON.stringify(filtrededQueue));
      }
      break;
    default:
      // console.log('Не коректно вказаний data-type');
  }
}

/**
  Функция принимает значение 
  @param {boolean} value;
 */
function saveAuthStateOnStorage(value) {
  localStorage.setItem('authState', value);
}



const resetStorage = function () {
  localStorage.removeItem('watched');
  localStorage.removeItem('queue');
};

const addToStorageFromBase = function (data) {
  if (data) {
    if (data.watched !== undefined) {
      localStorage.setItem('watched', JSON.stringify(data.watched));
    }
    if (data.queue !== undefined) {
      localStorage.setItem('queue', JSON.stringify(data.queue));
    }
  }
};

// export {
//   addToStorage,
//   saveAuthStateOnStorage,
//   resetStorage,
//   addToStorageFromBase,
// };

// function onBtnWatchedClick(e) {
//   if (!e.target.classList.contains('watched')) {
//     if (JSON.parse(localStorage.getItem('watchedCard'))) {
//       watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
//     }
//     watchedMovie.push(movie);
//     localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
//     if (isWatchedOpen) {
//       renderMovieCards(watchedMovie);
//     }

//     e.target.classList.add('watched');
//     e.target.textContent = 'REMOVE FROM WATCHED';
//     return;
//   } else {
//     /* (e.target.classList.contains('watched')) */
//     watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
//     const filterWatchedMovie = watchedMovie.filter(
//       item => Number(item.id) !== Number(movie.id)
//     );
//     watchedMovie = [...filterWatchedMovie];
//     localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
//     if (isWatchedOpen) {
//       renderMovieCards(watchedMovie);
//     }
//     e.target.classList.remove('watched');
//     e.target.textContent = 'ADD TO WATCHED';
//   }
// }

// function onQueueBtnClick(e) {
//   if (!e.target.classList.contains('queued')) {
//     if (JSON.parse(localStorage.getItem('queuedCard'))) {
//       queuedMovie = JSON.parse(localStorage.getItem('queuedCard'));
//     }
//     queuedMovie.push(movie);
//     localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
//     if (isQueueOpen) {
//       renderMovieCards(queuedMovie);
//     }
//     e.target.classList.add('queued');
//     e.target.textContent = 'REMOVE FROM QUEUED';
//     return;
//   } else {
//     /* (e.target.classList.contains('watched')) */
//     queuedMovie = JSON.parse(localStorage.getItem('queuedCard'));
//     const filterQueuedMovie = queuedMovie.filter(
//       item => Number(item.id) !== Number(movie.id)
//     );
//     queuedMovie = [...filterQueuedMovie];
//     localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
//     if (isQueueOpen) {
//       renderMovieCards(queuedMovie);
//     }
//     e.target.classList.remove('queued');
//     e.target.textContent = 'ADD TO QUEUED';
//   }
// }
