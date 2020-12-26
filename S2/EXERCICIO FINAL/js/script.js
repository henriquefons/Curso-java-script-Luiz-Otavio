function meuEscopo() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#resultado");

  const pessoas = [];

  function criaObjeto(nome, sobrenome, peso, altura) {
    return { nome, sobrenome, peso, altura };
  }

  function recebeEventoForm(evento) {
    evento.preventDefault(); //   Evento para tirar a atualização apos enviar o formulario

    const nome = form.querySelector("#nome");
    const sobrenome = form.querySelector("#sobrenome");
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");

    pessoas.push(
      criaObjeto(nome.value, sobrenome.value, peso.value, altura.value)
    );
    console.log(pessoas);
    resultado.innerHTML += `<p> ${nome.value} - ${sobrenome.value} -
    ${peso.value} - ${altura.value} </p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
  
  
}

meuEscopo();