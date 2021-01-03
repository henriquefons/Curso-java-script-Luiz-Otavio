// LET tem escopo de bloco { ... bloco}
// VAR tem escopo de funcao

function teste() {
  if (true) {
    let nome = "henrique";
    var sobrenome = "fonseca";
  }
  //console.log(nome); // nome is note defined
  console.log(sobrenome); // O var não respeita o escopo de bloco
}

teste();

console.log("Testando a declaracao de variavel VAR depois de charmar:", hoinsting);

var hoinsting = "Miranda";

let test = "Hemrique";

function mudaNome() {
  test = "Henrique";
}

console.log("Nome antes de chamar a funcao", test);
mudaNome();
console.log("Nome depois de chamar a funcao", test);
