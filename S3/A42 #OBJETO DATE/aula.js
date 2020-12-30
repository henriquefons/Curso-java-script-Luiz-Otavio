// O mes comeca em 0
// O formato é A, M, D, H, M, S, MS
const data1 = new Date();

console.log(data1.toString());

//const data2 = new Date(2019, 3, 20, 15, 27, 1000);
const data2 = new Date("2020-04-20 20:45:44");

console.log(data2.toString());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  // Retorna de 0 a 11, por isso o mais 1
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasil = formataData(data1);

console.log(dataBrasil);
