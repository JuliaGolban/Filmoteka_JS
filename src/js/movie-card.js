import { getGenres } from './getGenres';

export default function renderMarkupMovieCard({ results }) {
  const gallery = document.querySelector('.gallery__list');
  const markup = results
    .map(({ id, poster_path, genre_ids, title, release_date }) => {
      let name = getGenres(genre_ids);
      return `
                <li class="gallery__item" data-id="${id}">
                        ${
                          poster_path
                            ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
                            : `<img src="./image/defaulf-img.jpg"`
                        }
                        class="gallery__item-image" 
                        alt="${title}"
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
  gallery.insertAdjacentHTML('beforeend', markup);
}
