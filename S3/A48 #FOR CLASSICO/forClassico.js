const pares = []

for (let i = 1; i <= 10; i++) {
  i % 2 === 0 ? console.log(`Os numeros pares são ${i}`) : 'não é par'
  i % 2 === 0 ? pares.push(i) : 'não é par'
}

console.log(pares)
