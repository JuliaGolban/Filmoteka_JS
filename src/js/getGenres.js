import genres from './genre';

export const getGenres = function (genreIds) {
  const genresNames = [];
  for (let genreId of genreIds) {
    genres.genres.forEach(genre => {
      if (genreId === genre.id) {
        genresNames.push(genre.name);
      }
    });
  }
  const genreName = genresNames.slice(0, 4);
  if (genresNames.length > 4) {
    genreName.push('etc.');
  }
  return genreName.join(', ');
};