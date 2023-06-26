const modalDiv = document.getElementById('modalShopping');
const shoppingsDiv = document.getElementById('shoppings');
/*
document
  .getElementById('shopping-count')
  .addEventListener('click', viewShopping); */

/* LOCALSTORAGE */
let shopping = JSON.parse(localStorage.getItem('shopping'));
if (shopping == null) {
  shopping = [];
  localStorage.setItem('shopping', JSON.stringify(shopping));
}

/* ACTUALIZA EL ESTADO DEL MODAL EN CASO DE REFRESH - F5 */
const shoppingView = JSON.parse(localStorage.getItem('shoppingView'));
modalDiv.style.display = shoppingView == true ? 'block' : 'none';

document.querySelector('#shopping-count').innerHTML = shopping.length;

/* FUNCIONES DE APERTURA, CARGA , ELIMINACION Y OCULTAMIENTO DE POPUP*/

function viewShopping() {
  let shopping = JSON.parse(localStorage.getItem('shopping'));

  if (shopping == null || shopping.length == 0) {
    alert('No hay cursos');
    return;
  } else {
    localStorage.setItem('shoppingView', JSON.stringify(true));
    modalDiv.style.display = 'block';
  }
}

function addShopping(id) {
  let shopping = JSON.parse(localStorage.getItem('shopping'));

  const course = courses.find((element) => element.id == id);

  const shop = shopping.find((element) => element.id == id);

  if (shopping == null) {
    shopping = [];
  }

  if (shop == undefined) {
    shopping.push(course);
  }

  localStorage.setItem('shopping', JSON.stringify(shopping));
}

function delShopping(id) {
  let shopping = JSON.parse(localStorage.getItem('shopping'));
  localStorage.setItem('shoppingView', JSON.stringify(true));

  const shopping_new = shopping.filter((element) => element.id !== id);

  localStorage.setItem('shopping', JSON.stringify(shopping_new));

  window.location.reload();
}

function hideShopping() {
  localStorage.setItem('shoppingView', JSON.stringify(false));
  modalDiv.style.display = 'none';
}

/* CARGAR CARRITO EN POPUP MODAL*/

shopping.forEach((element) => {
  const nodeLi = document.createElement('li');

  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'X';
  buttonDelete.addEventListener('click', () => delShopping(element.id));
  buttonDelete.className = 'buttonDeleteShopping';

  const nodeTxt = document.createElement('span');
  nodeTxt.className = 'textShopping';
  nodeTxt.innerHTML = element.name;

  nodeLi.appendChild(buttonDelete);
  nodeLi.appendChild(nodeTxt);

  shoppingsDiv.appendChild(nodeLi);
});

/* EVENTOS DE BORRAR CARRITO */
let span = document.getElementById('closeShopping');

span.onclick = function () {
  hideShopping();
};
