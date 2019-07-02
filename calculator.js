function calculator(x, y) {
  function add(x, y){
    console.log(x+y);
  }

  function subtract(x, y){
    console.log(x-y);
  }

  function multiply(x, y){
    console.log(x*y);
  }

  function divide(x, y){
    console.log(x/y);
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };
}

calculator = calculator();

calculator.add(1, 2);
calculator.subtract(5, 9);
calculator.divide(21, 3);
calculator.multiply(9, 10);