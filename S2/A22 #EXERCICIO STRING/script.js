const nome = prompt("Digite seu nome:")
document.getElementById("nome").innerHTML += `o seu nome é ${nome} <BR />`;
document.getElementById("nome").innerHTML += `o nome tem ${nome.length} letras <BR />`;
document.getElementById("nome").innerHTML += `Segunda do nome é ${nome[1]} <BR />`;
