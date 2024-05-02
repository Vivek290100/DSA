class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      // Push the new element to stack1
      this.stack1.push(value);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
  
      // If stack2 is empty, transfer all elements from stack1 to stack2
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // Pop the top element from stack2 (which is the front element of the queue)
      return this.stack2.pop();
    }
  
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
  
      // If stack2 is empty, transfer all elements from stack1 to stack2
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // Peek at the top element of stack2 (which is the front element of the queue)
      return this.stack2[this.stack2.length - 1];
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.peek()); // Output: 2
  console.log(queue.dequeue()); // Output: 2
  console.log(queue.isEmpty()); // Output: false
  console.log(queue.dequeue()); // Output: 3
  console.log(queue.isEmpty()); // Output: true
  console.log(queue.dequeue()); // Output: Queue is empty
  