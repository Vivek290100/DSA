class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class StackLinkedList {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    // Push element onto the stack
    push(element) {
      const newNode = new Node(element);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      const poppedElement = this.top.data;
      this.top = this.top.next;
      this.size--;
      return poppedElement;
    }
  
    // Peek the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.top.data;
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.size;
    }
  }
  
  // Example usage:
  const stackLinkedList = new StackLinkedList();
  stackLinkedList.push(1);
  stackLinkedList.push(2);
  stackLinkedList.push(3);
  
  console.log("Top element:", stackLinkedList.peek()); // Output: 3
  
  console.log("Popped element:", stackLinkedList.pop()); // Output: 3
  
  console.log("Size of stack:", stackLinkedList.size()); // Output: 2
  