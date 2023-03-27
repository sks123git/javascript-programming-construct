const texts = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
let digit = 9;
for (let index = 0; index < texts.length; index++) {
  if (digit == index) console.log(digit + ' = ' + texts[index]);
}
