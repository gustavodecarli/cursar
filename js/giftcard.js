function cambiarNombre(e) {
  document.getElementById('txtDestinatario').innerHTML = e.target.value;
}

function cambiarMonto(e) {
  const monto = Number(e.target.value);
  document.getElementById('txtMonto').innerHTML = `$ ${monto.toFixed(2)}`;
}

function cambiarColor(e) {
  const color = e.target.getAttribute('data-color');
  document.getElementById('txtDestinatario').style.color = color;
  document.getElementById('txtFecha').style.color = color;
}

function cambiarFondo(e) {
  const color = e.target.getAttribute('data-color');
  document.getElementById('giftcard').style.backgroundColor = color;
}

function cambiarTamanio(e) {
  const size = e.target.getAttribute('data-size');
  document.getElementById('txtDestinatario').style.fontSize = size;
}

function cambiarUbicacion(e) {
  const position = e.target.getAttribute('data-position');
  const MARGIN = '30px';
  const MARGIN_COST = '70px';
  const MARGIN_BOTTOM = '50px';

  document.getElementById('txtFecha').style.position = 'absolute';

  switch (position) {
    case 'top-left':
      document.getElementById('txtFecha').style.top = MARGIN;
      document.getElementById('txtFecha').style.left = MARGIN;
      document.getElementById('txtFecha').style.right = '';
      document.getElementById('txtFecha').style.bottom = '';
      break;
    case 'top-right':
      document.getElementById('txtFecha').style.top = MARGIN_COST;
      document.getElementById('txtFecha').style.right = MARGIN;
      document.getElementById('txtFecha').style.left = '';
      document.getElementById('txtFecha').style.bottom = '';
      break;
    case 'bottom-right':
      document.getElementById('txtFecha').style.top = '';
      document.getElementById('txtFecha').style.right = MARGIN;
      document.getElementById('txtFecha').style.left = '';
      document.getElementById('txtFecha').style.bottom = MARGIN_BOTTOM;
      break;
    case 'bottom-left':
      document.getElementById('txtFecha').style.top = '';
      document.getElementById('txtFecha').style.right = '';
      document.getElementById('txtFecha').style.left = MARGIN;
      document.getElementById('txtFecha').style.bottom = MARGIN_BOTTOM;
      break;
  }
}
