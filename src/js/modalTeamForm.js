import getRefs from './getRefs';

const refs = getRefs();

refs.openModalTeam.addEventListener('click', onOpenModalTeam);
refs.closeModalTeam.addEventListener('click', onOpenModalTeam);
refs.modalTeam.addEventListener('click', onBackdropModalTeam);

function onOpenModalTeam() {
  document.body.classList.toggle('modal-team-is-open');
  refs.modalTeam.classList.toggle('is-hidden');

  document
    .querySelector('.modal-team__image')
    .addEventListener('click', onCardMember);
  document
    .querySelector('.modal-team__feature')
    .addEventListener('click', onCardMember);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    refs.modalTeam.classList.add('is-hidden');
  }
});

function onBackdropModalTeam(e) {
  if (e.currentTarget === e.target) {
    refs.modalTeam.classList.add('is-hidden');
  }
}

function onCardMember() {
  document.querySelector('.modal-team__feature').classList.toggle('show');
}
