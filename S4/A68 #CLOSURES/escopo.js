// global

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("rique");

console.dir(funcao);

console.log(funcao());
