class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add element at the beginning of the list
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add element at the end of the list
    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Add element after a particular element
    addAfter(target, data) {
        let current = this.head;
        while (current !== null && current.data !== target) {
            current = current.next;
        }
        if (current !== null) {
            const newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // Delete a particular element from the list
    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    // Find element in the list
    find(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Add element to the right side of a particular element
    addToRightOf(target, data) {
        let current = this.head;
        while (current !== null && current.data !== target) {
            current = current.next;
        }
        if (current !== null) {
            const newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // Add element to the left side of a particular element
    addToLeftOf(target, data) {
        if (!this.head) return;

        if (this.head.data === target) {
            this.addFirst(data);
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== target) {
            current = current.next;
        }
        if (current.next !== null) {
            const newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // Display the elements of the list
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const myList = new LinkedList();
myList.addFirst(3);
myList.addLast(7);
myList.addLast(9);
myList.addAfter(7, 5);
myList.delete(7);
myList.addToRightOf(5, 6);
myList.addToLeftOf(9, 8);

console.log("Elements of the linked list:");
myList.display();
