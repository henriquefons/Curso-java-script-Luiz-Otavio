/*
Sempre usar === e !== // Checam valores e tipagens
*/

const num1 = 10;
const num2 = '10';

const comp = num1 == num2;
console.log(comp);

const comp2 = num1 === num2;
console.log(comp2);

// Como a linguagem JS é fracamente tipada, a igualdade == não valida corretamente
// os valores comparados