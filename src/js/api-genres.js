import axios from 'axios';
import LS from './localeStorage';

const API_KEYS = 'e32c2b640d0c14cb8349bc85f9ee8b0e';
const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

// Запит на сервер

async function getGenres() {
    
    try {
      const response = await axios.get(BASE_URL, {
        params: {
            api_key: API_KEYS,
        }
      })
      const dataGenres = response.data.genres;
     
       return dataGenres;

    } catch (error) {
      console.error(error);
    }
  }

//   Запис в LocalStorege масиву обєктів з жанрами.

function saveGenresLocalStorege () {
    getGenres().then((response) => {
        LS.save('genres', response) 
    })
}

saveGenresLocalStorege ()

// Отримати жанри з LocalStorege.
// Аргументом в функцію getGenresLocalStorege(genreIds) треба передати масив з id номерами.
// Функція повертає рядок з назвами жанрів (приклад - 'Action, Western, Comedy') з лімітом по довжині 4 жанри.

export function getGenresLocalStorege (genreIds) {
  const parsedJsonGenres = LS.load('genres')

  let nameGenres = [];

  for (let id of  genreIds) {
    parsedJsonGenres.forEach(genre => {
        if(id === genre.id) {
            nameGenres.push(genre.name)
        }
    })
  }

  return nameGenres.slice(0, 4).join(', ');
}






