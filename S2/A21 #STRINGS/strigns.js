let umaString = "Um texto";
console.log(umaString[3]);
console.log(umaString.charAt(3)); //Mesma coisa de cima
// funcao concat = +
console.log(umaString.indexOf('Um')) // A palavra Um começa no indice 0

console.log(umaString.replace(/Um/, 'Outro')) // Substiui a palabra por uma expressao regular
console.log(umaString.replace(/t/g, 'T')) // Substitui todas a palabras

console.log(umaString.length) // Tamanho do meu vetor

console.log(umaString.slice(0, 2))

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())