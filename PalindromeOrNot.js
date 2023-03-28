function palindrome() {
  let sum = 0,
    num = 121;
  let temp = num;
  let rem;
  while (num > 0) {
    rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
  }
  console.log(sum);
  if (temp == sum) console.log('Numbers are palindrome');
  else console.log('Numbers are not palindrome');
}

palindrome();
