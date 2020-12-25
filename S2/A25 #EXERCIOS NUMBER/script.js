const numero = Number(prompt("Digite um numero"));

document.getElementById("numero").innerHTML += numero;

const texto = document.getElementById("resultado");
texto.innerHTML += `<p>Raiz quadrada = ${numero ** (1 / 2)} </p>`;
texto.innerHTML += `<p> ${numero + 2} é um inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> É NaN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> Arredondando para cima: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Duas  casas decimais: ${numero.toFixed(2)} </p>`;
