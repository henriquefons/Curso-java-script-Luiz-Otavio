const textoData = document.getElementById("data");

//Metodo eficar
const data = new Date();

textoData.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});

/*
// Metodo trabalhoso
const dataAtual = new Date();

const diaSemana = verificaDiaSemana(dataAtual.getDay()); // retorna 0 a 6
const diaNumber = zeroAEsquerda(dataAtual.getDate());
const mes = zeroAEsquerda(dataAtual.getMonth());
const ano = zeroAEsquerda(dataAtual.getFullYear());
const horas = zeroAEsquerda(dataAtual.getHours());
const min = zeroAEsquerda(dataAtual.getMinutes());

textoData.innerHTML = `${diaSemana}, ${diaNumber} de ${mes} de ${ano} 
${horas}:${min}`;

function verificaDiaSemana(dia) {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 5:
      return "Sabado";
  }
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
*/
