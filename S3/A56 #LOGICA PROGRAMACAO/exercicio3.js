/***
 * Fazer uma funcao que
 * Verifica se é divisivel por 3 retornando Fizz
 * Verifica se é divisivel por 5 retornando Buzz
 * Verifica se é divisivel por 3 e 5 retornando FizzBuzz
 * Quando nao é divivel retorna o numero
 * checar se é numero
 */
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

function fizzBuzz(num) {
    
  if (isNaN(Number(num))) {
    return "Não é numero";
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

console.log(fizzBuzz(random(1, 100)));
