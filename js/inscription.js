const IMPORTE_DEFAULT = 20;

const modalIncription = document.getElementById('modalIncription');

function deteteRow(id) {
  const form = document.getElementById('form-inscription');
  const row = document.getElementById(`form-${id}`);
  form.removeChild(row);
  calcularImporte();
}

function limpiarDatos() {
  document.getElementById('inputNombre-01').value = '';
  document.getElementById('inputApellido-01').value = '';
  document.getElementById('inputDNI-01').value = '';
  document.getElementById('inputEmail-01').value = '';
  document.getElementById('inputTelefono-01').value = '';
  document.getElementById('inputImporte-01').value = '';
  calcularImporte();
}

function calcularImporte() {
  const inputs = document.querySelectorAll("input[id^='inputImporte-']");

  let total = 0.0;
  inputs.forEach((element) => {
    total += Number(element.value);
  });
  document.getElementById('total').innerHTML = `$ ${total.toFixed(2)}`;
}

function agregarPersona() {
  const id = Date.now();

  let form = document.getElementById('form-inscription');
  let divRow = document.createElement('div');
  divRow.className = 'form-row';
  divRow.id = `form-${id}`;

  const inputFirstName = document.createElement('input');
  inputFirstName.type = 'text';
  inputFirstName.placeholder = 'Nombre';
  inputFirstName.id = `inputNombre-${id}`;

  const inputLastName = document.createElement('input');
  inputLastName.type = 'text';
  inputLastName.placeholder = 'Apellido';
  inputLastName.id = `inputApellido-${id}`;

  const inputNumberID = document.createElement('input');
  inputNumberID.type = 'text';
  inputNumberID.placeholder = 'DNI';
  inputNumberID.id = `inputDNI-${id}`;

  const inputEmail = document.createElement('input');
  inputEmail.type = 'text';
  inputEmail.placeholder = 'Em@il';
  inputEmail.id = `inputEmail-${id}`;

  const inputTelefono = document.createElement('input');
  inputTelefono.type = 'text';
  inputTelefono.placeholder = 'Teléfono';
  inputTelefono.id = `inputTelefono-${id}`;

  const inputImporte = document.createElement('input');
  inputImporte.type = 'text';
  inputImporte.placeholder = 'Importe';
  inputImporte.id = `inputImporte-${id}`;
  inputImporte.value = IMPORTE_DEFAULT;
  inputImporte.onkeyup = () => calcularImporte();

  const buttonDelete = document.createElement('button');
  buttonDelete.className = 'form-button-del';
  buttonDelete.textContent = '-';
  buttonDelete.type = 'button';
  buttonDelete.id = `buttonDelete-${id}`;
  buttonDelete.onclick = () => deteteRow(id);

  divRow.appendChild(inputFirstName);
  divRow.appendChild(inputLastName);
  divRow.appendChild(inputNumberID);
  divRow.appendChild(inputEmail);
  divRow.appendChild(inputTelefono);
  divRow.appendChild(inputImporte);

  divRow.appendChild(buttonDelete);

  form.appendChild(divRow);

  calcularImporte();
}

function primerFilaVacia(id) {
  const nombre = document.getElementById(`inputNombre-${id}`).value;
  const apellido = document.getElementById(`inputApellido-${id}`).value;
  const dni = document.getElementById(`inputDNI-${id}`).value;
  const email = document.getElementById(`inputEmail-${id}`).value;

  return nombre == '' || apellido == '' || dni == '' || email == '';
}

function inscribirse() {
  const inputsNombres = document.querySelectorAll("input[id^='inputNombre-']");

  const divPeoples = document.getElementById('peoples');

  divPeoples.innerHTML = '';

  let invalido = false;

  inputsNombres.forEach((element) => {
    const id = element.id.replace('inputNombre-', '');
    invalido = invalido || primerFilaVacia(id);
  });

  if (invalido) {
    let message = document.createElement('h3');
    message.innerText =
      'No hay personas registradas o faltan información de las mismas';
    let validacion = document.createElement('h4');
    validacion.innerText = 'Nombre, Apellido, dni y email son obligatorios';
    divPeoples.appendChild(message);
    divPeoples.appendChild(validacion);
  } else {
    inputsNombres.forEach((element) => {
      const id = element.id.replace('inputNombre-', '');
      const nodeLi = document.createElement('li');
      const nombre = element.value;
      const apellido = document.getElementById(`inputApellido-${id}`).value;
      const dni = document.getElementById(`inputDNI-${id}`).value;
      const email = document.getElementById(`inputEmail-${id}`).value;
      const importe = document.getElementById(`inputImporte-${id}`).value;

      const data = `Nombre: ${nombre},${apellido} - DNI:  ${dni} - Email: ${email} - Importe: $ ${importe}`;
      const nodeTxt = document.createTextNode(data);
      nodeLi.appendChild(nodeTxt);
      divPeoples.appendChild(nodeLi);
    });
  }

  modalIncription.style.display = 'block';
}

function hideModal() {
  modalIncription.style.display = 'none';
}

/* SE INICIALIZA EL TOTAL */

calcularImporte();

/* ADD evento para cerrar popup */

const closePeoples = document.getElementById('closePeoples');
closePeoples.onclick = function () {
  hideModal();
};
