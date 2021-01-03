const pessoa = {
  nome: "henrique",
  sobrenome: "fonseca",
  idade: 22,
  naoExiste: "Existe sim",
  endereco: {
    rua: "Safira",
    numero: 320,
  },
};

console.log(pessoa.endereco.rua);

//Atribuição via desestruturacao
const {
  nome,
  sobrenome: sobre,
  naoExiste = "Não existe",
  endereco: { rua, numero },
  ... resto
} = pessoa;

console.log(nome, sobre, naoExiste);
console.log(rua);
console.log(resto);
