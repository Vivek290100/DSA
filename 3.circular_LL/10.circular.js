class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Point back to itself for circularity
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head; // Point back to the head for circularity
        }
        this.size++;
    }

    // Add a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Point back to itself for circularity
        } else {
            newNode.next = this.head;
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
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
        let count = 0;
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        newNode.next = current.next;
        current.next = newNode;
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
            } else {
                while (current.next !== this.head) {
                    current = current.next;
                }
                current.next = this.head.next;
                this.head = this.head.next;
            }
        } else {
            let count = 0;
            let prev = null;
            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
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
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
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

    // Print the list
    printList() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}

// Example usage
const list = new CircularLinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insertAt(3, 3);
list.printList(); // Output: 0 1 2 3
list.removeAt(2);
list.printList(); // Output: 0 1 3
console.log(list.getAt(2)); // Output: 3
console.log(list.getSize()); // Output: 3
console.log(list.isEmpty()); // Output: false
