//Write a program that reads 5 Random 3 Digit values and then outputs the minimum
//and the maximum value
let randm = [],
  min = 0,
  max = 0;
for (let index = 0; index < 5; index++) {
  randm[index] = Math.floor(Math.random() * 999) + 100;
  if (randm[index] > max) max = randm[index];
}
min = randm[0];
for (let index = 0; index < 4; index++) {
  if (randm[index + 1] <= min) min = randm[index];
}

console.log(randm, max, min);
