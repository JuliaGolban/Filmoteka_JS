import getRefs from './getRefs';

const refs = getRefs();

refs.openModalTeam.addEventListener('click', onOpenModalTeam);
refs.closeModalTeam.addEventListener('click', onOpenModalTeam);

function onOpenModalTeam() {
  document.body.classList.toggle('modal-team-is-open');
  refs.modalTeam.classList.toggle('is-hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    refs.modalTeam.classList.add('is-hidden');
  }
});
