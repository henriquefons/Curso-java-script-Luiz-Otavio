// arguments sustenta os argumentos enviados
function funcao() {
  let soma = 0;
  for (let iterator of arguments) {
    soma += iterator;
  }
  console.log(soma);
}

funcao(2, 4, 1, 2, 40);

//Definindo um valor padrao para o parametro caso não seja passado
function funcao2(a, b = 2, c) {
  console.log(a + b);
}

funcao2(2);
funcao2(2, undefined, 2);

//Usando o rest operator para juntar os paramentros para um array
function funcao3(...restOperator) {
  console.log(restOperator);
}

funcao3(2, 4, 1, 2, 41, 24, 124);
