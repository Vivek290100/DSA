class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(value) {
      // Push the new element to queue1
      this.queue1.push(value);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
  
      // Move all elements except the last one from queue1 to queue2
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      // Pop the last element from queue1 (which is the top element of the stack)
      const popped = this.queue1.shift();
  
      // Swap queue1 and queue2
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
  
      return popped;
    }
  
    isEmpty() {
      return this.queue1.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
  
      // Move all elements except the last one from queue1 to queue2
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      // Peek at the last element of queue1
      const topElement = this.queue1[0];
  
      // Move the element back to queue1
      this.queue2.push(this.queue1.shift());
  
      // Swap queue1 and queue2
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
  
      return topElement;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // Output: 3
  console.log(stack.peek()); // Output: 2
  console.log(stack.pop()); // Output: 2
  console.log(stack.isEmpty()); // Output: false
  console.log(stack.pop()); // Output: 1
  console.log(stack.isEmpty()); // Output: true
  console.log(stack.pop()); // Output: Stack is empty
  