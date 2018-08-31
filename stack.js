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


function main(){
  let shortStack = new Stack();
  shortStack.push('Kirk');
  shortStack.push('Spock');
  shortStack.push('McCoy');
  shortStack.push('Scotty');
  //return shortStack;
  return peek(shortStack);
}
main();