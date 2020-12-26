/**
 * Dados primitivos são imutaveis - String, number, boolean
 * undefuned, null
 *
 * Dados por referência são mutáveis (array, objec, function)
 */

// Exemplo de valores por referencia
let a = [1, 2, 3];
let b = a;

console.log(a, b);

a.unshift(0);
console.log(a, b);

b = [...a]; // Agora o b passa a ter a copia do A
a.push(4)

console.log(a, b);
