let varA = "A"; //transforma em B
let varB = "B"; //transforma em C
let varC = "C"; //transforma em A

/*
//metodo antigo
const varATemp = varA;
varA = varB;
Metodo antigo
varB = varC;
varC = varATemp;
*/

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
