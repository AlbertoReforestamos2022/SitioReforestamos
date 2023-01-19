const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".dias");
  const month = document.querySelector(".meses");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  document.querySelector(".meses h2").innerHTML = meses[date.getMonth()];
  document.querySelector(".meses p").innerHTML = date.getFullYear();
  month.classList.add("verde-rm");

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<p class="cal-btn prev-date">${prevLastDay - x + 1}</p>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<p class="cal-btn today">${i}</p>`;
    } else {
      days += `<p class="cal-btn dias-mes-${i}">${i}</p>`;
    } 

  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<p class="cal-btn next-date">${j}</p>`;
    monthDays.innerHTML = days;
  }

};

document.querySelector(".anterior").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".siguiente").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();


function sombrearDias() {
  // const dia18 = document.querySelector('.dias-mes-18');
  // const dia19 = document.querySelector('.dias-mes-19');
  const dia20 = document.querySelector('.dias-mes-20');
  const dia21 = document.querySelector('.dias-mes-21');
  const dia22 = document.querySelector('.dias-mes-22');
  const dia23 = document.querySelector('.dias-mes-23');



  // .dibujo-verde
  // dia18.classList.add('dibujo-verde');
  // dia19.classList.add('dibujo-verde');
  dia20.classList.add('dibujo-verde');
  dia21.classList.add('dibujo-verde');
  dia22.classList.add('dibujo-verde');
  dia23.classList.add('dibujo-verde');



  const renderModal = ()=> {
    // dia20.classList.add('modal-dialog', 'modal-dialog-centered', 'modal-dialog-scrollable');
    dia20.setAttribute('data-bs-toggle', 'modal');
    dia20.setAttribute('data-bs-target', '#modalEjemplo');

  }

  renderModal();
}

sombrearDias();