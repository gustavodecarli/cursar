const modalIncription = document.getElementById('modalIncription');

function inscribirse(id) {
  addShopping(id);
  localStorage.setItem('inscriptionView', JSON.stringify(true));
  window.location.reload();
}

function hideModal() {
  localStorage.setItem('inscriptionView', JSON.stringify(false));
  modalIncription.style.display = 'none';
}

const closeIncription = document.getElementById('closeIncription');
closeIncription.onclick = function () {
  hideModal();
};

const inscriptionView = JSON.parse(localStorage.getItem('inscriptionView'));
modalIncription.style.display = inscriptionView == true ? 'block' : 'none';

if (inscriptionView == true) {
  setTimeout(() => hideModal(), 7000);
}
