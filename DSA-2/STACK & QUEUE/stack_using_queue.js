class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Add an element to the queue
  enqueue(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const dequeuedElement = this.front.data;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return dequeuedElement;
  }

  // Peek the front element of the queue
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.front.data;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the queue
  getSize() {
    return this.size;
  }
}

class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }

  // Push element onto the stack
  push(element) {
    // Move all elements from queue1 to queue2
    while (!this.queue1.isEmpty()) {
      this.queue2.enqueue(this.queue1.dequeue());
    }

    // Enqueue the new element into queue1
    this.queue1.enqueue(element);

    // Move all elements back to queue1
    while (!this.queue2.isEmpty()) {
      this.queue1.enqueue(this.queue2.dequeue());
    }
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.queue1.dequeue();
  }

  // Peek the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.queue1.peek();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.queue1.isEmpty();
  }

  // Get the size of the stack
  size() {
    return this.queue1.getSize();
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top element:", stack.peek()); // Output: 3

console.log("Popped element:", stack.pop()); // Output: 3

console.log("Size of stack:", stack.size()); // Output: 2
