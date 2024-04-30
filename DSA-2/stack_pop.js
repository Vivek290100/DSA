class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // If the stack is empty
      }
      return this.items.pop();
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display elements of the stack
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

console.log(stack.pop()); // Outputs: 30
stack.display(); // Outputs: 10, 20
