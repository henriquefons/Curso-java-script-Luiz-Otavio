const nome = "Henrique Dev",
  idade = 22,
  peso = 92,
  altura = 1.88;

let imc;

imc = peso / (altura * altura);

console.log(nome, "Tem", idade, "anos, pesa:", peso, "KG");
console.log(`tem ${altura} e seu IMC é ${imc}`);
console.log(nome, "nasceu em", 2020 - idade);
