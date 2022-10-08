const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', onOpenModalTeam);
refs.closeModalBtn.addEventListener('click', onOpenModalTeam);

function onOpenModalTeam() {
  document.body.classList.toggle('modal-is-open');
  refs.modal.classList.toggle('is-hidden');
}

export { onOpenModalTeam };
