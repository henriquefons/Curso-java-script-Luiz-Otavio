const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of num) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

for (let i of num) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
