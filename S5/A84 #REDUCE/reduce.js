const numeros = [2, 85, 23, 5, 8, 12, 51, 56, 37, 89, 35];

const total = numeros.reduce((acumulador, valor) => (acumulador += valor));

console.log(total);

const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

console.log(pares);

const dobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(dobro);

const pessoas = [
  { nome: "Joao", idade: 20 },
  { nome: "Maria", idade: 80 },
  { nome: "Chaca", idade: 25 },
  { nome: "Henrique", idade: 60 },
  { nome: "Joser", idade: 40 },
  { nome: "Kleber", idade: 75 },
];

const maisVelho = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
})

console.log(maisVelho);
