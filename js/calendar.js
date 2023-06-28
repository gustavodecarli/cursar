const month = new Date().getMonth();
const year = new Date().getFullYear();
const day = new Date().getDate();

const monthNames = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

let primerDia = new Date(year, month, 1);
const dayInicio = primerDia.getDay();
primerDia.setDate(primerDia.getDate() - dayInicio + 1);

function next() {
  primerDia.setDate(primerDia.getDate() + 7);
  graficar(primerDia);
}

function prev() {
  primerDia.setDate(primerDia.getDate() - 7);
  graficar(primerDia);
}

function hoy() {
  let primerDia = new Date(year, month, 1);
  const dayInicio = primerDia.getDay();
  primerDia.setDate(primerDia.getDate() - dayInicio + 1);
  graficar(primerDia);
}

function graficar(dateInit) {
  let days = document.getElementsByClassName('calendar-day-number');
  let dayFor = new Date(dateInit);

  for (let item of days) {
    item.innerHTML =
      dayFor.getDate().toString() + ' ' + monthNames[dayFor.getMonth()];

    if (
      dayFor.getMonth() == month &&
      dayFor.getDate() == day &&
      dayFor.getFullYear() == year
    ) {
      item.classList.add('day-now');
    } else {
      item.classList.remove('day-now');
    }

    for (let course of courses) {
      if (
        dayFor.getMonth() == course.date.getMonth() &&
        dayFor.getDate() == course.date.getDate() &&
        dayFor.getFullYear() == course.date.getFullYear()
      ) {
        const div = document.createElement('div');
        div.className = 'calendar-day-course';

        const href = document.createElement('a');
        href.innerHTML = course.name;
        href.href = course.link;

        div.appendChild(href);
        item.appendChild(div);
      }
    }

    dayFor.setDate(dayFor.getDate() + 1);
  }
}

graficar(primerDia);
