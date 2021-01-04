function random(max, min) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1,
  max = 50;

let rand = random(max, min);

while (rand !== 10) {
  rand = random(max, min);
  console.log(rand);
}

// No Do while, primeiro checa a condicao e depois entra no laço
do {
    rand = random(max, min)
} while(rand !== 10)