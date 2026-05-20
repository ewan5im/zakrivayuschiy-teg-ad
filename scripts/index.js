const modal = document.getElementById('modal');
const openModalButton = document.querySelector('.button--save');
const modalForm = modal.querySelector('form');

openModalButton.addEventListener('click', () => {
  modal.showModal();
});

modalForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  modal.close();
});
