class StackArray {
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
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Peek the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const stackArray = new StackArray();
  stackArray.push(1);
  stackArray.push(2);
  stackArray.push(3);
  
  console.log("Top element:", stackArray.peek()); // Output: 3
  
  console.log("Popped element:", stackArray.pop()); // Output: 3
  
  console.log("Size of stack:", stackArray.size()); // Output: 2
  