/**
 * Em javascript, false é o valor literario
 * sempre que uma operacao && é false, retorna este valor
 * Para ser falso, o valor tem que ser false, 0, string vazia, null, undefined, Nan
 * o
 */

 // O && Precisa de uma operação falsa para retornar false 
// Sempre retorna o último valor da condição caso forem verdadeiras

function falaOi() {
  return "Oi";
}
const vaiExecutar = true;

// Se ele não executar, não fala oi
console.log(!vaiExecutar && falaOi())

// Se ele executar, fala oi 
console.log(vaiExecutar && falaOi())

// Precisa de uma expressão verdadeira para retornar ela 
const corUsuario = 'null';
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)
