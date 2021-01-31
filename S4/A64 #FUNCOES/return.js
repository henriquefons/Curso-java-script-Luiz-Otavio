// o return termina a funcao e retorna um valor

function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("henrique", "fonseca", 22);

console.log(pessoa1, typeof pessoa1);

function falaFrase(comeco) {
  function falaResto(fim) {
    console.log(comeco, fim);
  }
  return falaResto;
}

const fala = falaFrase("Olá");

fala("Mundo");
