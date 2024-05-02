class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Return the top element in the stack without removing it
    peek() {
        return !this.isEmpty() ? this.items[this.items.length - 1] : "No elements in Stack";
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack
    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Search for an element and return its index (top being 1)
    search(element) {
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i] === element) {
                return this.items.length - i;
            }
        }
        return -1;
    }

    // Convert stack to array
    toArray() {
        return this.items.slice().reverse();
    }

    // Peek at the nth element from the top of the stack
    peekN(n) {
        if (n <= 0 || n > this.items.length) {
            return "Invalid position";
        }
        return this.items[this.items.length - n];
    }

    // Reverse the order of elements in the stack
    reverse() {
        // this.items.reverse();
        const newStack = new Stack()
        while(!this.isEmpty()){
            
        }
    }

    // Duplicate the top element of the stack
    duplicate() {
        if (!this.isEmpty()) {
            this.push(this.peek());
        }
    }

    // Swap the top two elements of the stack
    swap() {
        if (this.size() < 2) {
            return "Not enough elements to swap";
        }
        const top1 = this.pop();
        const top2 = this.pop();
        this.push(top1);
        this.push(top2);
    }

    // Sort the elements of the stack
    sort() {
        this.items.sort((a, b) => a - b);
    }
}

// Example usage:

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.print()); // Output: 10 20 30

console.log(stack.size()); // Output: 3

console.log(stack.search(20)); // Output: 2

console.log(stack.toArray()); // Output: [30, 20, 10]

stack.reverse();
console.log(stack.print()); // Output: 30 20 10

stack.duplicate();
console.log(stack.print()); // Output: 30 20 10 10

stack.swap();
console.log(stack.print()); // Output: 30 10 10 20

stack.sort();
console.log(stack.print()); // Output: 10 10 20 30
