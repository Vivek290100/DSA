class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    delete() {
      if (this.isEmpty()) return null;
      if (this.heap.length === 1) return this.heap.pop();
      const deletedValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return deletedValue;
    }
  
    peek() {
      return this.isEmpty() ? null : this.heap[0];
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] > this.heap[parentIndex]) {
          [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    heapifyDown() {
      let index = 0;
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let largerChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
          largerChildIndex = rightChildIndex;
        }
  
        if (this.heap[index] >= this.heap[largerChildIndex]) {
          break;
        }
  
        [this.heap[index], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[index]];
        index = largerChildIndex;
      }
    }
  }
  
  const maxHeap = new MaxHeap();
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(17);
  maxHeap.insert(4);
  maxHeap.insert(22);
  
  console.log(maxHeap.peek()); //  22
  console.log(maxHeap.delete()); //22
  console.log(maxHeap.peek()); //  17