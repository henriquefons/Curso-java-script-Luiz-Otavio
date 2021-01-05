try {
  console.log(naoExiste);
} catch (e) {
  console.log("Variavel nao existe");
}

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError`${x} ou ${y} precisam ser numeros`();
  }

  return x + y;
}

try {
  console.log(soma("fas", 5));
} catch (e) {
  console.log("Erro");
}
