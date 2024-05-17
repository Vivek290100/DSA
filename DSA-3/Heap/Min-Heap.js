class MinHeap {
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
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
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
        let smallerChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
          smallerChildIndex = rightChildIndex;
        }
  
        if (this.heap[index] <= this.heap[smallerChildIndex]) {
          break;
        }
  
        [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
        index = smallerChildIndex;
      }
    }
  }
  
  const heap = new MinHeap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(17);
  heap.insert(4);
  heap.insert(22);
  
  console.log(heap.peek()); //  4
  console.log(heap.delete()); //4
  console.log(heap.peek()); //  5