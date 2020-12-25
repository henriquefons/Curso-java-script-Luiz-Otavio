const alunos = ["Joao", "Maria", "Jose"];
console.log(alunos[0]); // Para acessar o indice

alunos[0] = "Henrique"; // mudando um valor do array
//alunos[alunos.length] = "Adiciona ao final"
alunos.push("Adiciona ao final");
alunos.unshift("Adiciona ao começo");
console.log(alunos);

const removidoFinal = alunos.pop(); //remove no final e retorna o mesmo
const removidoComeço = alunos.shift(); //remove no comeco e retorna o mesmo
console.log(removidoComeço);
console.log(removidoFinal);
console.log(alunos);
 
console.log(alunos.slice(0, -2)) // faz o fatiamento
console.log(alunos instanceof Array) // pergunta se é um array