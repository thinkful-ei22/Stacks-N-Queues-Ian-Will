'use strict';
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

export class Stack {
  constructor() {
    this.top = null;
  }
  //methods
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function peek(stack) {
  return stack.top.data;
}

function display(stack) {
  let curNode = stack.top;
  while (curNode !== null) {
    console.log(curNode.data);
    curNode = curNode.next;
  }
}

function main() {
  let shortStack = new Stack();
  shortStack.push('Kirk');
  shortStack.push('Spock');
  shortStack.push('McCoy');
  shortStack.push('Scotty');
  //return shortStack;
  // return peek(shortStack);
  display(shortStack);
}
// main();

//PALINDROME-------------------
//input: a string
//output: true/false true = is palindrome

//take out punctuation, spaces, and convert to all lowercase
// loop through string, and push characters into stack,
// pop each char off and concat to new string, 
// compare original string to new string, if === return true


export function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let charStack = new Stack();
  let reverseStr = '';
  for (let i = 0; i < str.length; i++) {
    charStack.push(str[i]);
  }
  while (charStack.top !== null) {
    reverseStr += charStack.pop();
  }
  if (reverseStr === str) {
    return true;
  } else {
    return false;
  }
}

// true, true, true
// console.log(is_palindrome('racecar'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

//Matching parentheses in an expression-----------------------
//input: string - a math expression
//output: an index where there is a missing parans

//loop through the string, push each char into stack
//

//   ( ( ( ) )          ) ) ( ( (

export function findMissingParens(expression) {
  let parenStack = new Stack();
  //let closingParenStack = new Stack();
  for (let i = 0; i < expression.length; i++) {


    if (expression[i] === '(') {
      parenStack.push(i);
    }
    if (expression[i] === ')' && parenStack.top !== null) {
      parenStack.pop();
    } else if (expression[i] === ')') {
      parenStack.push(i);
    }


  }
  if (parenStack.top !== null) {
    return display(parenStack);
  }
  else console.log('All parens correct');
}

const expression = '8 + (17 + 92 - 4+6)))))';
findMissingParens(expression);

//sorting stack------------------------

export function sortStack(stack) {
  let sortedStack = new Stack();
  sortedStack.push(stack.pop());
  while (stack.top !== null) {
    let tempItem = stack.pop();
    if(peek(sortedStack) > tempItem) {
      sortedStack.push(tempItem);
    } else {
      let popped = sortedStack.pop();
      stack.push(popped);
      while(sortedStack.top !== null && tempItem > peek(sortedStack)){
        stack.push(sortedStack.pop())
      }
      sortedStack.push(tempItem);
    }
  }
  return sortedStack;
}

function main2(){
  let newStack = new Stack();
  newStack.push(1);
  newStack.push(8);
  newStack.push(5);
  newStack.push(4);
  newStack.push(7);
  display(newStack);
  console.log('divider');
  let newerStack = sortStack(newStack);
  display(newerStack);
}

main2();

