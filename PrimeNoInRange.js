let n = 5;
console.log('Prime numbers are: ');
for (let i = 0; i <= n; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  //if flag 0 then no is prime
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
