import axios from 'axios';
import LS from './localeStorage';

const API_KEYS = 'e32c2b640d0c14cb8349bc85f9ee8b0e';

let arrayGenres = [];

// Запит на сервер

async function catchGenres() {
    
    try {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
            api_key: API_KEYS,
        }
      })
      const dataGenres = response.data.genres;
      arrayGenres = dataGenres
       return dataGenres;

    } catch (error) {
      console.error(error);
    }
  }

//   Запис в LocalStorege масиву обєктів з жанрами.

function saveGenresLocalStorege () {
    catchGenres().then((response) => {
        LS.save('genres', response)   
    })
}

saveGenresLocalStorege ()

// Отримати жанри з LocalStorege.
// Аргументом в функцію getGenresLocalStorege(array) треба передати масив з id номерами.
// Функція повертає рядок з назвами жанрів (приклад - 'Action, Western, Comedy') з лімітом по довжині 4 жанри.

function getGenresLocalStorege (array) {
  const parsedJsonGenres = LS.load('genres')
  console.log(parsedJsonGenres);

  let nameGenres = [];

  array.map((number) => {

    parsedJsonGenres.map((object) => {
          if (object.id === number) {
              nameGenres.push(object.name);
          }
              })
  })

  return nameGenres.slice(0, 4).join(', ');

}

export default {getGenresLocalStorege}





