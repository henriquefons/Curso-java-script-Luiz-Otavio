const numeros = [2, 85, 23, 5, 8, 12, 51, 56, 37, 89, 35];

const numerosEmDobro = numeros.map((valor) => valor * 2);

console.log(numerosEmDobro);

const pessoas = [
  { nome: "Joao", idade: 20 },
  { nome: "Maria", idade: 30 },
  { nome: "Chaca", idade: 25 },
  { nome: "Henrique", idade: 60 },
  { nome: "Joser", idade: 40 },
  { nome: "Kleber", idade: 75 },
];

const nomeDaPessoa = pessoas.map(({ nome }) => nome);
console.log(nomeDaPessoa);

const pessoaComID = pessoas.map((valor, indice) => {
  return {
    ...valor,
    id: indice+1,
  };
});
console.log(pessoaComID);

const idadePessoa = pessoas.map((valor) => ({ idade: valor.idade }));
console.log(idadePessoa);

console.log(pessoas);
