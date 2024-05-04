class QueueArray {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Peek the front element of the queue
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const queueArray = new QueueArray();
  queueArray.enqueue(1);
  queueArray.enqueue(2);
  queueArray.enqueue(3);
  
  console.log("Front element:", queueArray.peek()); // Output: 1
  
  console.log("Dequeued element:", queueArray.dequeue()); // Output: 1
  
  console.log("Size of queue:", queueArray.size()); // Output: 2
  