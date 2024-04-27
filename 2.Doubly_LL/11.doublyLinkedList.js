class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Add a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert a node at a specific position
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.prepend(data);
            return true;
        }
        if (index === this.size) {
            this.append(data);
            return true;
        }

        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
        return true;
    }

    // Remove a node from a specific position
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        if (index === 0) {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index === this.size - 1) {
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
        return current.data;
    }

    // Get the data at a specific index
    getAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Reverse the doubly linked list
    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev; // Move to the next node in the original order
        }

        // Swap head and tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // Print the list from head to tail
    printForward() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log(result);
    }

    // Print the list from tail to head
    printBackward() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.prev;
        }
        console.log(result);
    }
}

// Example usage
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insertAt(3, 3);
list.printForward(); // Output: 0 1 2 3
list.reverse();
list.printForward(); // Output: 3 2 1 0
