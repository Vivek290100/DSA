class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class QueueLinkedList {
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
      } else {
        this.rear.next = newNode;
      }
      this.rear = newNode;
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
  
  // Example usage:
  const queueLinkedList = new QueueLinkedList();
  queueLinkedList.enqueue(1);
  queueLinkedList.enqueue(2);
  queueLinkedList.enqueue(3);
  
  console.log("Front element:", queueLinkedList.peek()); // Output: 1
  
  console.log("Dequeued element:", queueLinkedList.dequeue()); // Output: 1
  
  console.log("Size of queue:", queueLinkedList.getSize()); // Output: 2
  