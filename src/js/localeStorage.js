import axios from 'axios';
import { clearData, getFromStorage, saveToStorage } from './localeCommon';
import getRefs from './getRefs';
const refs = getRefs();

refs.addToWatchedBtn.addEventListener('click', onBtnClick);
refs.addToQueueBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  let movieId = Number(refs.modal.dataset.action);
  let movie = getMovieById(movieId);
  let click = String(e.currentTarget.dataset.click);

  // debugger;
  //ADD TO WATCHED
  if (click === 'watched') {
    addToStorage(movie, 'watched');
    checkMovieInStack(movieId);
  }
  //ADD TO QUEUE
  if (click === 'queue') {
    checkMovieInStack(movieId);
    addToStorage(movie, 'queue');
  }
}

function getMovieById(id) {
  const movies = getFromStorage('movies');
  const result = movies.results.find(movie => movie.id === Number(id));
  return result;
}

/*
  отримуємо поточні дані зі сховища, якщо немає - записуємо пустий масив
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
   Функция принимает только 2 параметра movieObj - объект со свойствами фильма
  и movieType - тип фильма (только 2 варианта: 'watched' или 'queue').
  
  // @param {objects} movieObj;
  // @param {string} movieType;
 */

/*
  записуємо та зберігаємо дані фільму у сховище
*/
function addToStorage(movieObj, movieType) {
  const [watched, queue] = getCurrentStorage();
  const watchedId = watched.map(movie => movie.id);
  const queueId = queue.map(movie => movie.id);

  switch (movieType) {
    case 'watched':
      if (!watchedId.includes(movieObj.id)) {
        watched.push(movieObj);
        const filtrededQueue = queue.filter(movie => {
          return movie.id !== movieObj.id;
        });
        saveToStorage('watched', watched);
        saveToStorage('queue', filtrededQueue);
      } else {
        const filtrededWatched = watched.filter(movie => {
          return movie.id !== movieObj.id;
        });
        saveToStorage('watched', filtrededWatched);
      }
      break;
    case 'queue':
      if (!queueId.includes(movieObj.id)) {
        queue.push(movieObj);
        const filtrededWatched = watched.filter(movie => {
          return movie.id !== movieObj.id;
        });
        saveToStorage('watched', filtrededWatched);
        saveToStorage('queue', queue);
      } else {
        const filtrededQueue = queue.filter(movie => {
          return movie.id !== movieObj.id;
        });
        saveToStorage('queue', filtrededQueue);
      }
      break;
    default:
      console.log('Error from add to storage by movie type');
  }
}

/*
перевірка наявності фільму в сховищі за ключем
 */

function checkMovieInStack(id) {
  const check = function (storagekey) {
    let stack = getFromStorage(storagekey);
    const stackId = stack.map(movie => movie.id);
    if (stackId.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  if (check('watched')) {
    refs.addToWatchedBtn.textContent = 'REMOVE';
  } else if (!check('watched')) {
    refs.addToWatchedBtn.textContent = 'ADD TO WATCHED';
  }
  if (check('queue')) {
    refs.addToQueueBtn.textContent = 'REMOVE';
  } else if (!check('queue')) {
    refs.addToQueueBtn.textContent = `ADD TO QUEUE`;
  }
}
