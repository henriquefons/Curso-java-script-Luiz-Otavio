const hour = document.getElementById("hour");
const relogioIniciar = document.getElementById("init");
const relogioPausar = document.getElementById("pause");
const relogioStop = document.getElementById("stop");

let timeNew = new Date("01-01-2021 00:00:00");
let controle;

hour.innerHTML = formataHora(timeNew);

function formataHora(hora) {
  return hora.toLocaleTimeString("pt-BT", {
    hour12: false,
  });
}

function iniciaHora() {
  hour.classList.remove("pausar");
  clearInterval(controle)
  controle = setInterval(() => {
    timeNew.setMilliseconds(1000);
    hour.innerHTML = formataHora(timeNew);
  }, 1000);
}

function pausaHora() {
  hour.classList.add("pausar");
  clearInterval(controle);
}

function zerarHora() {
  hour.classList.remove("pausar");
  clearInterval(controle)
  timeNew = new Date("01-01-2021 00:00:00");
  hour.innerHTML = formataHora(timeNew);
}

relogioIniciar.addEventListener("click", function (e) {
  iniciaHora();
});

relogioPausar.addEventListener("click", function (e) {
  pausaHora();
});

relogioStop.addEventListener("click", function (e) {
  zerarHora();
});
