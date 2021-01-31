//Function Express -> cria uma varivavel em uma funcao
const dado = function () {
  console.log("hello word");
};

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(dado);

//Arrow Function

const arrowFunction = () => {
  console.log("Arrow Function \\o/");
};

arrowFunction();
