import axios from 'axios';
import { getFromStorage, saveToStorage } from './localeCommon';

const API_KEYS = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

// Запит на сервер

async function getGenres() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEYS,
      },
    });
    const dataGenres = response.data.genres;

    return dataGenres;
  } catch (error) {
    console.error(error);
  }
}

//   Запис в LocalStorege масиву обєктів з жанрами.

function saveGenresLocalStorege() {
  getGenres().then(response => {
    saveToStorage('genres', response);
  });
}

saveGenresLocalStorege();

// Отримати жанри з LocalStorege.
// Аргументом в функцію getGenresLocalStorege(genreIds) треба передати масив з id номерами.
// Функція повертає рядок з назвами жанрів (приклад - 'Action, Western, Comedy') з лімітом по довжині 4 жанри.

export function getGenresLocalStorege(genreIds) {
  const parsedJsonGenres = getFromStorage('genres');
  if (parsedJsonGenres === undefined) {
    return 'Not-found';
  }

  let nameGenres = [];

  for (let id of genreIds) {
    parsedJsonGenres.forEach(genre => {
      if (id === genre.id) {
        nameGenres.push(genre.name);
      }
    });
  }
  const nameGenresSlice = nameGenres.slice(0, 4);
  if (nameGenres.length > 4) {
    nameGenresSlice.push('etc.');
  }

  return nameGenresSlice.join(', ');
}
