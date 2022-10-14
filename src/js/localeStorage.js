import { getFromStorage, saveToStorage } from './localeCommon';
import { getMovieById } from './modal';
import getRefs from './getRefs';
const refs = getRefs();

export function onBtnClick(e) {
  let movieId = Number(refs.modal.dataset.action);
  let movie = getMovieById(movieId);
  let click = String(e.currentTarget.dataset.click);
  const btn = e.currentTarget;

  //ADD TO WATCHED
  if (click === 'watched') {
    addToStorage(movie, 'watched');
    checkMovieInStack(movieId, btn, 'watched');
  }
  //ADD TO QUEUE
  if (click === 'queue') {
    addToStorage(movie, 'queue');
    checkMovieInStack(movieId, btn, 'queue');
  }
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

function checkMovieInStack(id, btn, key) {
  const check = function (storagekey) {
    let stack = getFromStorage(storagekey);
    return stack.some(movie => movie.id === id);
  };
  if (key === 'watched') {
    if (check('watched')) {
      btn.textContent = 'REMOVE';
      return;
    } else {
      btn.textContent = 'ADD TO WATCHED';
      return;
    }
  } else {
    if (check('queue')) {
      btn.textContent = 'REMOVE';
      return;
    } else {
      btn.textContent = `ADD TO QUEUE`;
      return;
    }
  }
}

/*
  отримуємо поточні дані зі сховища
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

export { checkMovieInStack, getCurrentStorage };
