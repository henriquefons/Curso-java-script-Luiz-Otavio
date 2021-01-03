let a = "a";
let b = "b";
let c = "c";

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);

const numeros = [0, 1, 2, 3, 4, 5];

//Pengando os primeiros valores
const [elementoUm, elementoDois, ...resto] = numeros;
console.log(elementoUm, elementoDois);

//pegando valores especificos
const [, um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

// Desestruturação por array
const listaNumeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = listaNumeros;

console.log(lista3[2])
