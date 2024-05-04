class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
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

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // Add an element to the queue
  enqueue(element) {
    // Push all elements from stack1 to stack2
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    // Push the new element onto stack1
    this.stack1.push(element);

    // Push all elements back from stack2 to stack1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.stack1.pop();
  }

  // Peek the front element of the queue
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.stack1.peek();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.stack1.isEmpty();
  }

  // Get the size of the queue
  size() {
    return this.stack1.size();
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Front element:", queue.peek()); // Output: 1

console.log("Dequeued element:", queue.dequeue()); // Output: 1

console.log("Size of queue:", queue.size()); // Output: 2
