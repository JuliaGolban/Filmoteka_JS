import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";


const API_KEYS = 'e32c2b640d0c14cb8349bc85f9ee8b0e';

function createTrailerLink(elementRef) {
  const trailerBtn = elementRef;

  trailerBtn.forEach(el =>
    el.addEventListener('click', e => {
      drawModalForTrailler(e.target.dataset.id);
    }),
  );
}

  async function drawModalForTrailler(id_film) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id_film}/videos?api_key=${API_KEYS}`, {
        params: {
          api_key: API_KEYS,
        },
      });
      console.log(response.data.results);
      const data =  response.data.results;
      const id = data[0].key;
    console.log(id);
    const instance = basicLightbox.create(`
    <div class="modal">
    <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `);
          instance.show();
        //   modalClBtTrailer(instance);
        
    } catch (error) {
      console.error(error);
    }

  }

//   drawModalForTrailler(490132)

//   function modalClBtTrailer(instance) {
//     const modalBox = document.querySelector('.basicLightbox__placeholder');
//     console.log(modalBox)
//     modalBox.insertAdjacentHTML(
//       'afterbegin',
//       `<button
//         type="button"
//         class="lightbox__button"
//         data-action="close-lightbox"
//         ></button>
//     `,
//     );
//     const modalCloseBtn = document.querySelector(
//       '[data-action="close-lightbox"]',
//     );
//     modalCloseBtn.addEventListener('click', () => instance.close());
//   }


export default { createTrailerLink };

