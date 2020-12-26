// Os objetos inician com {}
const pessoa1 = {
  nome: "Rique", //Atributos
  sobrenome: "Dev",
  idade: 22,
};

console.log(pessoa1);

//Essa função é chamada de Factory
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome, // A mesma coisa de nome: nome
    sobrenome,
    idade,

    fala() {
      return `${this.nome} esta falando oi`;
    },
  };
}

const pessoa2 = criaPessoa("Joao", "Abreu", 11);
console.log(pessoa2.fala());
