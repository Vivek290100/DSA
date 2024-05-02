class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    display() {
      for (let i = 0; i < this.items.length; i++) {
        console.log(this.items[i]);
      }
    }
  }
  
  let stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  stack.display()

// Tasks\DSA\DSA-2> node .\test.js
// 10
// 20
// 30
  
  