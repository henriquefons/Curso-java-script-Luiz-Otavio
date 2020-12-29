// Se achar uma condicao verdadeira, o codigo para e apresanta e resposta

function hora(n) {
  if (n >= 7 && n < 12) {
    return "Bom dia";
  } else if (n >= 12 && n < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

console.log(hora(18));

const tenhoGrana = (n) => {
  return n && "Vou sair de casa";
};

console.log(tenhoGrana(true));


