/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
 // Returns true if 'op2' has
// higher or same precedence as 'op1',
// otherwise returns false.
function hasPrecedence(op1, op2)
{
    if (op2 == '(' || op2 == ')')
    {
        return false;
    }
    if ((op1 == '*' || op1 == '/') &&
            (op2 == '+' || op2 == '-'))
    {
        return false;
    }
    else
    {
        return true;
    }
}

// A utility method to apply an
// operator 'op' on operands 'a' 
// and 'b'. Return the result.
function applyOp(op, b, a) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b == 0) {
        throw new Error(Error);
      }
      return parseInt(a / b, 10);
  }
  return 0;
}
     

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(value) {
    this.result += value;
  }
  subtract(value) {
    this.result -= value;
  }
  multiply(value) {
    this.result *= value;
  }
  divide(value) {
    if(value == null || value == undefined || value == 0) {
      throw new Error(Error);
    }
    this.result /= value;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(str) {
    let ans = eval(str);
    if(ans == Infinity || ans == undefined) {
      throw new Error(Error);
    }
    this.result += ans;

  }
}

module.exports = Calculator;
