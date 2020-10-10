class Calculator {
  constructor(obj) {
    Object.assign(this, obj);
  }

  plus() {
    return this.a + this.b;
  }

  minus () {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  times() {
    return this.a * this.b;
  }
}

// const a = 5;
// const b = 3;
const obj = { a: 5, b: 3 };
const calculator = new Calculator(obj);
const resultPlus = calculator.plus();
console.log(resultPlus);