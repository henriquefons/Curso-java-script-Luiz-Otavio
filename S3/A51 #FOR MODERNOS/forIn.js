const carros = ["Gol", "Pàlio", "Fox", "HB20"];

for (let i in carros) {
  console.log(carros[i]);
}

const pessoa = {
  nome: "Henrique",
  sobrenome: "Fonseca",
  idade: 30,
};

for (let chave in pessoa) {
  console.log(chave, " Valor:", pessoa[chave]);
}
