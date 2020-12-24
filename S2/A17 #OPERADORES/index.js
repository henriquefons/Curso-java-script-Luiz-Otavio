let contador = 0;

contador++; // O valor neste momento é 0
++contador; //O valor neste momento é 2
console.log(contador);

const passo = 2;

let contadorDePassos = 0;

contadorDePassos += passo; // contadorDePassos = contadorDePassos + passo
contadorDePassos *= passo;
contadorDePassos /= passo;

console.log(contadorDePassos);

const numero3 = Number('5.65');

console.log(typeof(numero3))