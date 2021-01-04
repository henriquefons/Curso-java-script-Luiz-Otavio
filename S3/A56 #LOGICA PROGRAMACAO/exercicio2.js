// fazer uma funcao que retorna se uma figura é paisagem ou nao
// passando apenas a largura e altura
// Para ser paisagem a largura é maior que a altura

function ePaisagem(altura, largura) {
  return largura > altura ? true : false;
}

const paisagem = (a, l) => (l > a)

console.log(ePaisagem(40,50))
console.log(paisagem(40,50))
