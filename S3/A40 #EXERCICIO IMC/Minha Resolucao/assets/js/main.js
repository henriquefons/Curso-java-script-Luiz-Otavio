const form = document.querySelector("#form");

//Parando o submit do submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");

  const validarPeso = !isNaN(peso.value) && peso.value;
  const validarAltura = !isNaN(altura.value) && altura.value;

  if (validarPeso === false) {
    setResultado("peso errado", false);
    return;
  }
  if (!validarAltura) {
    setResultado("altura errada", false);
    return;
  }

  const imc = calcularImc(validarPeso, validarAltura);

  const msg = verificaImc(imc);

  setResultado(`IMC: ${imc.toFixed(2)} - ${msg}`, true);
});

function setResultado(msg, isValid) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  const p = criaParagrafo();

  if (isValid === true) {
    p.classList.add("sucesso");
  } else {
    p.classList.add("falha");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function calcularImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

//Quando é só uma linha no if, não precisa de colchetes
function verificaImc(imc) {
  console.log(imc);
  if (imc < 18.5) return "Abaixo do peso";
  else if (imc >= 18.5 && imc < 24.9) return "Peso normal";
  else if (imc >= 25 && imc < 30) return "Sobrepeso";
  else if (imc >= 30 && imc < 35) return "Obesidade grau 1";
  else if (imc >= 35 && imc < 40) return "Obesidade grau 2";
  else if (imc >= 40) return "Obesidade grau 3";
  else return "Valores incorretos";
}

function criaParagrafo() {
  const paragrafo = document.createElement("p");
  return paragrafo;
}
