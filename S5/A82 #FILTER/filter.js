const numeros = [2, 85, 23, 5, 8, 12, 51, 56, 37, 89, 35];

function callbackFilter(valor, indice, array) {
  console.log(valor, indice, array);
  return valor > 20;
}

const numeroFiltrados = numeros.filter((valor) => valor > 20);
//const numeroFiltrados = numeros.filter(callbackFilter);

console.log(numeroFiltrados);

const pessoas = [
  { nome: "Joao", idade: 20 },
  { nome: "Maria", idade: 30 },
  { nome: "Chaca", idade: 25 },
  { nome: "Henrique", idade: 60 },
  { nome: "Joser", idade: 40 },
  { nome: "Kleber", idade: 75 },
];

const pessoasNomeGrande = pessoas.filter(({ nome }) => nome.length > 4);
console.log(pessoasNomeGrande);

const pessoasTerminamComA = pessoas.filter(({ nome }) =>
  nome.toLocaleLowerCase().endsWith("a")
);

console.log(pessoasTerminamComA);
