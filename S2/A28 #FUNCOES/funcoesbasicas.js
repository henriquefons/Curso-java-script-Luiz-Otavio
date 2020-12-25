function metade(a) {
  return a / 2;
}

function soma(a, b) {
  return a + b;
}

console.log(soma(metade(10), 3));

// Funcao anonima
const raiz = function (n) {
  return n ** 0.5;
};
console.log(raiz(9));

// Arroy Function
// const expoente = n =>  n ** 2; 
const expoente = (n) => {
  return n ** 2;
};

console.log(expoente(3));
