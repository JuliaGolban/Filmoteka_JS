import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const API_KEYS = 'e32c2b640d0c14cb8349bc85f9ee8b0e';

// Функція створення слухачів подій на elementRef, яка викликається в movie-cards і modal.js і по кліку запускає drawModalForTrailler.

function createTrailerLink(elementRef) {
  const trailerBtn = elementRef;
  trailerBtn.forEach(el =>
    el.addEventListener('click', onClickDrawTrailer)
    )
}

function onClickDrawTrailer (event) {
  drawModalForTrailler(event.target.dataset.id)
}

// Функція запиту на сервер трейлеру фільму по id. 

async function drawModalForTrailler(id_film) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id_film}/videos?api_key=${API_KEYS}`,
      {
        params: {
          api_key: API_KEYS,
        },
      }
    );

    const data = response.data.results;

    if (data.length === 0 || data === undefined) {
      alert('Sorry, trailer not found.');
      return;
    }

    // Пошук з масиву обєктів відео саме трейлера до фільму.

   let objectTrailer = data.find( obj => obj.name.split(" ").includes('Trailer'))

   if (objectTrailer === undefined) {
    objectTrailer = data[0];
   }

    const key = objectTrailer.key;

    // Створення модалки iframe через бібліотеку basiclightbox.

    const instance = basicLightbox.create(`
    <div class="modal">
    <iframe width="100%" height="315" src='https://www.youtube.com/embed/${key}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `);
    instance.show();

    // Закриття модалки по Escape

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        instance.close();
      }
      
    });
  } catch (error) {
    const instance = basicLightbox.create(`
      <div class="modal">
        <iframe width="100%" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`);

    instance.show();
  }
}

export default { createTrailerLink };
