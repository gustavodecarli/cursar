function cambioConsulta(event) {
  const count = document.getElementById('charCount');
  count.innerHTML = `${event.target.value.length}/${
    1000 - event.target.value.length
  }`;
}

function validar() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const consulta = document.getElementById('consulta').value.trim();
  const modalContact = document.getElementById('modalContact');

  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (nombre === '') {
    alert('El nombre es obligatorio');
    return;
  }

  if (apellido === '') {
    alert('El apellido es obligatorio');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('El email no es valido');
    return;
  }

  if (consulta === '') {
    alert('La descripción de la consulta no puede estar vacia');
    return;
  }

  if (telefono !== '') {
    if (telefono.length !== 9 || telefono.substr(4, 1) !== '-') {
      alert('El formato del telefono debe ser XXXX-XXXX');
      return;
    }
  }

  modalContact.style.display = 'block';
}
