//Funcao que recebe dois numeros e torna o maior deles

function maior(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  else return "Equal numbers";
}

const maior2 = (a, b) => (a > b ? a : b);

console.log(maior(10, 10));
console.log(maior2(9, 10));
