const nomes = ["maria", "joao", "ciclano"];
const novo = [...nomes];

nomes.pop();

console.log(nomes);
console.log(novo);

const a1 = [1, 3, 5];
const a2 = [1, 5, 10];

//const a3 = a1.concat(a2);
const a3 = [...a1, ...a2]


console.log(a3);
