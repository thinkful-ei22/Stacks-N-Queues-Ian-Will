//import {  } from './stack';
'use strict';

class _Node {
  constructor(value){
    this.value=value,
    this.next= null,
    this.prev=null;
  }
}
  
class Queue {
  constructor() {
    this.first = null;
    this.last=null;
  }

  enqueue(data){
    const node = new _Node(data);
    if(this.first===null){
      this.first = node;
    }
    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue(){
    if( this.first === null){
      return;
    }
    const node = this.first;
    this.first = node.prev;

    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}


function peek(queue){
  return queue.first.value;
}

function display(queue){
  let current = queue.first;
  while(current !== null){
    console.log(current.value);
    current = current.prev;
  }
}
function main(){
  let dairyQueen = new Queue();
  dairyQueen.enqueue('Kirk');
  dairyQueen.enqueue('Spock');
  dairyQueen.enqueue('Uhura');
  dairyQueen.enqueue('Sulu');
  dairyQueen.enqueue('Chekov');
  //return dairyQueen;
  display(dairyQueen);
  dairyQueen.dequeue();
  console.log('divide>>>>>>>>>>>');
  display(dairyQueen);
}
main();