let num1 = 10.8922;
let num2 = 2;

console.log(num1.toString() + num2); // converte nubmer p/ string
console.log(num1.toString(2)); // vejo o numero em hexadecimais
console.log(num1.toFixed(2)); // delimito as casas decimais
console.log(Number.isInteger(num2)); // verifica se é inteiro

num1 = 0.7;
num2 = 0.2;

let soma = num1 + num2;
console.log(soma);

soma = Number(soma.toFixed(2)); // Resolve o problema das casas decimais
console.log(soma);
