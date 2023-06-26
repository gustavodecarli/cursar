let container = document.getElementById('courses');

courses.forEach((element) => {
  const data =
    `<div class="course">` +
    `            <img src="${element.img}"/>` +
    `            <span class="course-cost">$ ${element.cost.toFixed(
      2
    )}</span>` +
    `            <div class="course-resumen">` +
    `              <p><span class="course-resumen-hour">${element.hours}</span> hs.</p>` +
    `              <div class="course-resumen-text">` +
    `                <h4>${element.name}</h4>` +
    `                <p>${element.detail}</p>` +
    `              </div>` +
    `            </div>` +
    `            <form action="${element.link}">` +
    `              <button` +
    `                class="course-comprar"` +
    `                type="submit"` +
    `                onclick="addShopping(${element.id})"` +
    `              >` +
    `                Comprar` +
    `              </button>` +
    `            </form>` +
    `          </div>`;

  container.insertAdjacentHTML('beforeend', data);
});
