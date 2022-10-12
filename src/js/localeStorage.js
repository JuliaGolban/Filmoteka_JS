function onBtnWatchedClick(e) {
  if (!e.target.classList.contains('watched')) {
    if (JSON.parse(localStorage.getItem('watchedCard'))) {
      watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
    }
    watchedMovie.push(movie);
    localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
    if (isWatchedOpen) {
      renderMovieCards(watchedMovie);
    }

    e.target.classList.add('watched');
    e.target.textContent = 'REMOVE FROM WATCHED';
    return;
  } else {
    /* (e.target.classList.contains('watched')) */
    watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
    const filterWatchedMovie = watchedMovie.filter(
      item => Number(item.id) !== Number(movie.id)
    );
    watchedMovie = [...filterWatchedMovie];
    localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
    if (isWatchedOpen) {
      renderMovieCards(watchedMovie);
    }
    e.target.classList.remove('watched');
    e.target.textContent = 'ADD TO WATCHED';
  }
}

function onQueueBtnClick(e) {
  if (!e.target.classList.contains('queued')) {
    if (JSON.parse(localStorage.getItem('queuedCard'))) {
      queuedMovie = JSON.parse(localStorage.getItem('queuedCard'));
    }
    queuedMovie.push(movie);
    localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
    if (isQueueOpen) {
      renderMovieCards(queuedMovie);
    }
    e.target.classList.add('queued');
    e.target.textContent = 'REMOVE FROM QUEUED';
    return;
  } else {
    /* (e.target.classList.contains('watched')) */
    queuedMovie = JSON.parse(localStorage.getItem('queuedCard'));
    const filterQueuedMovie = queuedMovie.filter(
      item => Number(item.id) !== Number(movie.id)
    );
    queuedMovie = [...filterQueuedMovie];
    localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
    if (isQueueOpen) {
      renderMovieCards(queuedMovie);
    }
    e.target.classList.remove('queued');
    e.target.textContent = 'ADD TO QUEUED';
  }
}



