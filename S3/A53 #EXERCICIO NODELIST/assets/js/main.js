const paragrafo = document.querySelector(".paragrafo");
const ps = paragrafo.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let i of ps) {
  //i.setAttribute("style", `background: ${backgroundColorBody}; color: white`);
  i.style.backgroundColor = backgroundColorBody;
  i.style.color = "white";
}
