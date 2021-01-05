function mostraHora() {
  let data = new Date();
  return data.toLocaleString("pt-BR", {
    hour12: false,
  });
}

const time = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(time);
}, 5001);

setTimeout(function () {
  console.log("Olá mundo");
}, 5001);
