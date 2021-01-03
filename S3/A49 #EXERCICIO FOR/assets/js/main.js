const resultado = document.getElementById("app");
//const resultado = document.querySelector("#app");

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];

  let elemento = criaElemento(tag);
  elemento.innerHTML = texto;

  resultado.appendChild(elemento);
}

function criaElemento(elemento) {
  return document.createElement(elemento);
}
