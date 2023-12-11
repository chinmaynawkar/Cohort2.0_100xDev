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

class Calculator {

  // Constructor to initialize the calculator with an optional initial result.
  constructor(result=0){
    this.result = result;
  }

  // Adds a number to the current result
  add(arg){
    this.result += arg
  }

  // Subtracts a number from the current result.
  subtract(arg){
    this.result -= arg
  }

  // Multiplies the current result by a number.
  multiply(arg){
    this.result *= arg
  }

  /** 
    * Divides the current result by a number.
    * @param {number} arg - The number to divide by.
    * @throws {Error} - Throws an error if dividing by zero.
    */
  divide(arg){
    if(arg==0){
      throw new Error("Not divisible by 0")
    }
    this.result /= arg
  }

  /**
    * Resets the calculator to its initial state.
    */
  clear(){
    this.result = 0
  }

  /**
   * Returns the current result.
   * @returns {number} - The current result.
   */
  getResult(){
    return this.result
  }

  /**
   * Checks if the parentheses in the input string are balanced.
   * @param {string} inputString - The input string containing mathematical expressions.
   * @returns {boolean} - True if parentheses are balanced, false otherwise.
   */
  isValidParenthesis(inputString) {

    let parenthesisStack = [];
    const openingChars = ['(', '{', '['];
    const closingChars = [')', '}', ']'];

    for (const c of inputString) {
        if (openingChars.includes(c)) {
            const correspondingClosingChar = closingChars[openingChars.indexOf(c)];
            parenthesisStack.push(correspondingClosingChar);
        } else if (closingChars.includes(c)) {
            if (parenthesisStack.length === 0 || parenthesisStack.pop() !== c) {
                return false;
            }
        }
    }

    return parenthesisStack.length === 0;
  }

  calculate(inputString){
    const precedence = {
      '(':3,
      '*':2,
      '/':2,
      '+':1,
      '-':1, 
    }

    let temp = ''
    let chunks = []
    let postFixStack = []
    let operatorStack = []
    let resultStack = []
    const operators = ['+', '-', '*', '/', '(', ')']

    if(!this.isValidParenthesis(inputString)){
      throw new Error("Invalid Parenthesis")
    }
    else{
      /** 
        * Purifying the inputString by remove spaces and performing formatting checks
        * and creates a stack (mimicking) of chunked down operands, brackets and operators
        */
      for(let i = 0; i<inputString.length; i++){
        if(inputString[i].toLowerCase() >= 'a' && inputString[i].toLowerCase() <= 'z'){
          throw new Error("Invalid Character");
        }

        if(operators.includes(inputString[i])){
          if(temp!=''){
            chunks.push(parseFloat(temp))
            temp = ''
          }
          chunks.push(inputString[i])
        }else{
          temp = temp + inputString[i]
        }
        if(inputString[i] == ' '){
          if(temp[0] != ' ' && temp!= ''){
            chunks.push(parseFloat(temp))
          }
          temp = ''
        }
        if(i == inputString.length-1){
          if(temp[0] != ' ' && temp!= ''){
            chunks.push(parseFloat(temp))
          }
        }
      }

      /**
       * creating a postfix stack (mimicking)
       */
      for(let i=0; i<chunks.length; i++){
        if(typeof chunks[i]==='number'){
          postFixStack.push(chunks[i])
        }

        if(operators.includes(chunks[i]) && operatorStack[operatorStack.length - 1] === '('){
          operatorStack.push(chunks[i])
        }
        
        if(operatorStack.length == 0 && operators.includes(chunks[i])){
          operatorStack.push(chunks[i])
        }else if(operators.includes(chunks[i]) && precedence[chunks[i]] > precedence[operatorStack[operatorStack.length-1]]){
          operatorStack.push(chunks[i])
        }

        if(chunks[i] === ')'){
          while(true){
            const removedOperator = operatorStack.pop()
            if(removedOperator === '('){
              break
            }
            if(removedOperator != '(' && removedOperator != ')'){
              postFixStack.push(removedOperator)
            }

          }
        }

        if (operators.includes(chunks[i]) && precedence[chunks[i]] < precedence[operatorStack[operatorStack.length - 1]]) {
          while (
              operatorStack.length > 0 &&
              precedence[chunks[i]] < precedence[operatorStack[operatorStack.length - 1]]
          ) {
              const removedOperator = operatorStack.pop();
              postFixStack.push(removedOperator);
          }
          operatorStack.push(chunks[i]);
        }
      }

      /**
       * Takes care of transferring any remaining operators to postfixStack
       */
      while(true){
        const removedOperator = operatorStack.pop()
        postFixStack.push(removedOperator)

        if(operatorStack.length==0){
          break
        }
      }

      /**
       * Processes the postfix stack to calculate the answer
       */
      while(postFixStack.length > 0){
        const removedNumber = postFixStack.shift()
        if(typeof removedNumber === 'number'){
          resultStack.push(removedNumber)
        }

        if(operators.includes(removedNumber)){
          const num1 = resultStack.pop()
          const num2 = resultStack.pop()
          let evaluation = 0
          switch(removedNumber){
            case '+':
              evaluation = num2+num1
              resultStack.push(evaluation)
              break
            case '-':
              evaluation = num2-num1
              resultStack.push(evaluation)
              break
            case '/':
              if(num1 == 0){
                throw new Error("Not divisible by 0")
              }
              evaluation = num2/num1
              resultStack.push(evaluation)
              break
            case '*':
              evaluation = num2*num1
              resultStack.push(evaluation)
              break
          }
        }
      }
      this.result = resultStack[0]
    }
  }
}

module.exports = Calculator;