'use strict';
class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  //methods
  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function peek(stack){
  console.log(stack.top.data);
}

function display(stack) {
  let curNode = stack.top;
  while (curNode !== null) {
    console.log(curNode.data);
    curNode = curNode.next;
  }
}

function main(){
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


function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let charStack = new Stack();
  let reverseStr = '';
  for (let i = 0; i < str.length; i++) {
    charStack.push(str[i]);
  }
  while (charStack.top !== null) {
    reverseStr += charStack.pop();
  }
  if (reverseStr === str){
    return true;
  } else {
    return false;
  }
}

// true, true, true
console.log(is_palindrome('racecar'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

//Matching parentheses in an expression-----------------------
//input: string - a math expression
//output: an index where there is a missing parans

//loop through the string, push each char into stack
//

//   ( ( ( ) )          ) ) ( ( (

function findMissingParens(expression){
  let ticker = -1;
  let parenStack = new Stack();
  for(let i =0; i < expression.length; i++){
    ticker++;
    if(expression[i] === '('){
      parenStack.push(i);
    }
    if(expression[i] === ')'){
      parenStack.pop();
    }
  }
  if(parenStack.top !== null)
    
}