class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Return the front element in the queue without removing it
    peek() {
        return !this.isEmpty() ? this.items[0] : "No elements in Queue";
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue
    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }

    // Peek at the rear element of the queue
    peekRear() {
        return !this.isEmpty() ? this.items[this.items.length - 1] : "No elements in Queue";
    }

    // Convert queue to array
    toArray() {
        return this.items.slice();
    }

    // Reverse the order of elements in the queue
    reverse() {
        this.items.reverse();
    }

    // Rotate the queue to the left by n positions
    rotateLeft(n) {
        for (let i = 0; i < n; i++) {
            this.items.push(this.items.shift());
        }
    }

    // Rotate the queue to the right by n positions
    rotateRight(n) {
        for (let i = 0; i < n; i++) {
            this.items.unshift(this.items.pop());
        }
    }

    // Duplicate the rear element of the queue
    duplicateRear() {
        if (!this.isEmpty()) {
            this.enqueue(this.peekRear());
        }
    }

    // Sort the elements of the queue
    sort() {
        this.items.sort((a, b) => a - b);
    }
}

// Example usage:

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.print()); // Output: 10 20 30

console.log(queue.size()); // Output: 3

console.log(queue.peek()); // Output: 10

console.log(queue.peekRear()); // Output: 30

console.log(queue.toArray()); // Output: [10, 20, 30]

queue.reverse();
console.log(queue.print()); // Output: 30 20 10

queue.rotateLeft(1);
console.log(queue.print()); // Output: 20 10 30

queue.duplicateRear();
console.log(queue.print()); // Output: 20 10 30 30

queue.sort();
console.log(queue.print()); // Output: 10 20 30 30
