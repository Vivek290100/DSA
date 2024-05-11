//stack using queue
class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(value) {
        // Add the new element to queue1
        this.queue1.push(value);
    }

    pop() {
        // Move all elements except the last one from queue1 to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        
        // Pop and return the last element from queue1
        const popped = this.queue1.shift();

        // Swap queue1 and queue2
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return popped;
    }

    peek() {
        // Move all elements from queue1 to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        // Get the last element from queue1
        const peeked = this.queue1[0];

        // Move the element back to queue1
        this.queue2.push(this.queue1.shift());

        // Swap queue1 and queue2
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return peeked;
    }

    isEmpty() {
        return this.queue1.length === 0;
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2
console.log(stack.isEmpty()); // Output: false
