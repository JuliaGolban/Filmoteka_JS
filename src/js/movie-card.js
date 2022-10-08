// import { getGenresName } from './getGenresName';

// https://api.themoviedb.org/3/movie/550?api_key=3cfb780db79e54922c50ea8f26b92bbe

export default function renderMarkupMovieCard({ results }) {
    const gallery = document.querySelector('.gallery__list');
    const markup = results
        .map(({ id, poster_path, genre_ids, title, release_date }) => {
            return `
                <li class="movie-card__item" data-id="${id}">
                    <div class="movie-card">
                        ${poster_path
                            ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
                            : `<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
                        }
                        class="movie-card__poster"
                        alt="${title}"
                        loading="lazy"
                        />
                    <h2 class="movie-card__title"> ${title}</h2>
                    <div class="movie-card__info">
                        <p class="movie-card__genre"> ${genre_ids}</p>
                        <p class="movie-card__year">${release_date?.slice(0, 4)}</p>
                    </div>
                </li> `;
    })
    .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}