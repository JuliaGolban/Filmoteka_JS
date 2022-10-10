// Запись в localeStorage
const save = (key, value) => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
};

// Загрузка в localeStorage
const load = key => {
    try {
        const data = localStorage.getItem(key);
        return data === null ? undefined : JSON.parse(data);
    } catch (error) {
        console.error('Get state error:', error.message);
    }
};

// Удаление из localeStorage
const remove = key => {
    return localStorage.removeItem(key);
};

// Функция для проверки фильма в очереди или в просмотреных когда модалка открыта и изменения текста кнопок localeStorage
function btnTextChange(currentFilmId) {
    const watchedBtn = document.querySelector('.movie-modal__button-orange');
    const queueBtn = document.querySelector('.movie-modal__button');

    if (!load('watchedKey')) {
        return;
    } else {
        load('watchedKey').forEach(element => {
            if (element.id === currentFilmId) {
                watchedBtn.textContent = 'Remove from watched';
           } 
        });
    }
    if (!load('queueKey')) {
        return;
    } else {
        load('queueKey').forEach(element => {
            if (element.id === currentFilmId) {
                queueBtn.textContent = 'Remove from queue';
            }
        });
    }
}

/// Функция для добавления в просмотренные фильмы localeStorage ///

let watchedKey = [];
let queueKey = [];

function addToWatched(e) {
    if (localStorage.getItem('watchedKey') !== null) {
        watchedKey = load('watchedKey');
    }
    const clickedFilm = load('DetailsFilmsCurrentPage').find(
        film => film.id === Number(e.target.dataset.id),
    );
    if (watchedKey.find(film => film.id === clickedFilm.id)) {
        watchedKey = watchedKey.filter(film => film.id !== clickedFilm.id);
        save('watchedKey', watchedKey);
        const btnWatch = e.target;
        // console.log(watchedKey);
        btnWatch.textContent = 'Add to watched';
    } else {
        watchedKey.push(clickedFilm);
        save('watchedKey', watchedKey);
        const btnWatch = e.target;
        btnWatch.textContent = 'Remove from watched';
    }
}

// Функция для добавления в очередь
function addToQueue(e) {
    if (localStorage.getItem('queueKey') !== null) {
        queueKey = load('queueKey');
    }
    const clickedFilm = load('DetailsFilmsCurrentPage').find(
        film => film.id === Number(e.target.dataset.id),
    );
    if (queueKey.find(film => film.id === clickedFilm.id)) {
        queueKey = queueKey.filter(film => film.id !== clickedFilm.id);
        save('queueKey', queueKey);
        const btnWatch = e.target;
        btnWatch.textContent = 'Add to queue';
    } else {
        queueKey.push(clickedFilm);
        save('queueKey', queueKey);
        const btnWatch = e.target;
        btnWatch.textContent = 'Remove from queue';
    }
}

export default {
    save,
    load,
    remove,
    addToQueue,
    addToWatched,
    btnTextChange,
};