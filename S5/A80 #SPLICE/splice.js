const nomes = ["maria", "joao", "ciclano", "beltrano", "fulano"];
const backupNomes = [...nomes];

//nomes.splice(indice, deletar, elementos...)

nomes.splice(3, Number.MAX_VALUE); // Deletando indices maiores que 3

console.log(nomes);

const nomes2 = ["fafs", "fasfsaggqw"];

nomes.splice(3, 0, ...nomes2);

console.log(nomes);

const testenome = "Henrique Fonseca";
console.log(testenome[testenome.length-1]);
