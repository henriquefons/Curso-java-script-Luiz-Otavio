const data = new Date();

const diaSemana = data.getDay();

function diaDaSemana(dia) {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terca";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 5:
      return "Sabado";
  }
}

console.log(diaDaSemana(diaSemana))

//console.log(diaSemana);
