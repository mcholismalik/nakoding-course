const calcPlus = (a, b) => {
  return a + b;
}

const calcMinus = (a, b) => {
  return a - b;
}

const calcDivide = (a, b) => {
  return a / b;
}

const calcTimes = (a, b) => {
  return a * b;
}

const calculate = (a, b, operation) => {
  let hasil = 0;
  if (operation == 'kali') hasil = calcTimes(a, b)
  if (operation == 'bagi') hasil = calcDivide(a, b)
  if (operation == 'tambah') hasil = calcPlus(a, b)
  if (operation == 'kurang') hasil = calcMinus(a, b)
  return hasil;
}



const a = 5;
const b = 2;
const operation = 'bagi' // kali, bagi, tambah, kurang
const exec = calculate(a, b, operation);
console.log(exec);