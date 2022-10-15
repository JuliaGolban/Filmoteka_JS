import getRefs from '../getRefs';
import { getGenresLocalStorege } from '../api-genres';
const refs = getRefs();

export default function renderMarkupCardLibrary(results) {
    const markup = results
      .map(({ id, poster_path, genre_ids, title, release_date }) => {
        let name = getGenresLocalStorege(genre_ids);
        return `
                  <li class="gallery__item" data-id="${id}">
                          ${
                            poster_path
                              ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
                              : `<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
                          }
                          class="gallery__item-image" 
                          alt="${title}" width="250"
                          loading="lazy"
                          />
                          <div class="gallery__item-description">
                          <p class="gallery__item-description-title"> ${title}</p>
                          <p class="gallery__item-description-genres"> ${name} | ${release_date?.slice(
          0,
          4
        )}</p>
                      </div>
                  </li> `;
      })
      .join('');
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
  }