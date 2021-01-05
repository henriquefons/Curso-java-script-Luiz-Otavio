try {
  // É executado quando não há erros
} catch (error) {
  // É executado quando há erros
} finally {
  // Sempre é executado
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeErro("Esperando estancia de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

try {
  console.log(retornaHora(new Date('01-01-2000 12:00:00')));
} catch (error) {
  console.log("Error")
} finally {
  console.log("Tenha um bom dia!")
}
