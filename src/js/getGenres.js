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
  const genreName = genresNames.slice(0, 2);
  if (genresNames.length > 2) {
    genreName.push('Others');
  }
  return genreName.join(', ');
};
