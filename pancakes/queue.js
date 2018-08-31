// import { Stack } from './stack';
// import { _Node } from './stack';
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
// main();

class StackQueue {
  constructor() {
    this.top = null;
  }

  enqueue(item) {
    const newNode = new _Node(item);
    let tempStack = new Stack();
    if(this.top === null) {
      this.push(newNode);
    }
    while(this.top !== null){
      tempStack.push(this.pop());
    }
    this.push(newNode);
    while(tempStack !== null){
      this.push(tempStack.pop());
    }
    return this.top;
  }

  dequeue() {
    return this.pop();
  }
}

function squareDance(danceLine) {
  let onDeck = danceLine.dequeue();
  // let inTheHole = danceLine.dequeue();
  let secondaryLine = new Queue();
  secondaryLine.enqueue(danceLine.dequeue());
  while (danceLine.first !== null) {
    if (onDeck[0] !== secondaryLine.first.value[0]){
      console.log(`${onDeck} and ${secondaryLine.first.value}`);
      secondaryLine.dequeue();
      onDeck = danceLine.dequeue();
      secondaryLine.enqueue(danceLine.dequeue());
    } else {
      secondaryLine.enqueue(onDeck);
      onDeck = danceLine.dequeue();
      // while (secondaryLine !== null) {
      //   if(onDeck[0] !== secondaryLine.dequeue()[0]){
      //     console.log(secondaryLine.dequeue())
      //   }
      // }
    }
    return danceLine;
  }
}

function rodeoClowns(mixedLine){
  let guys = new Queue();
  let gals = new Queue();
  while( mixedLine.first !== null){
   
    if(mixedLine.first.value[0] === 'M'){
      guys.enqueue(mixedLine.dequeue());

    } else {
      gals.enqueue(mixedLine.dequeue());
    }
  }
  while(gals.first !== null && guys.first !== null){
    console.log(`Guy is ${guys.first.value} with gal ${gals.first.value}`);
    gals.dequeue();
    guys.dequeue();
  }
  let counter = 0;

  if( gals.first !== null ){
    while(gals.first !== null){
      counter++;
      gals.dequeue();
    }
    console.log(`There are ${counter} girls left`);
  }

  if( guys.first !== null ){
    while(guys.first !== null){
      counter++;
      guys.dequeue();
    }
    console.log(`There are ${counter} guys left`);
  }

}

function testDance() {
  let line = new Queue();
  line.enqueue('F Jane');
  line.enqueue('M frank');
  line.enqueue('M john');
  line.enqueue('M sherlock');
  line.enqueue('F madonna');
  line.enqueue('M dave');
  rodeoClowns(line);
}
testDance();


// function DMV(line, peopleServed){
//   let ticker = 0;
//   while(ticker <= peopleServed){ 
//     if((Math.random() <= .75 )){
//       line.dequeue();
//       ticker++;
//     } else {
//       line.enqueue(line.dequeue());
//       ticker++;
//     }
//   }
//   return line;
// }
// const queue = new Queue();
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// queue.enqueue('Harry');
// display((DMV(queue, 9)));