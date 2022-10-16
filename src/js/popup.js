import getRefs from './getRefs';

const refs = getRefs();

refs.openModalUserBtn.addEventListener('click', toggleModal);
refs.closeModalUserBtn.addEventListener('click', toggleModal);
refs.userForm.addEventListener('click', userFormOpen);
function toggleModal() {
  document.body.classList.toggle('modal-user-is-open');
  refs.modalUser.classList.toggle('is-hidden');
}

function userFormOpen(){
  refs.backdropNotification.classList.toggle('is-hidden');
  refs.successExit.classList.toggle('is-hidden');
  refs.btnLogout.classList.toggle('is-hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    refs.modalUser.classList.add('is-hidden');
  }
});