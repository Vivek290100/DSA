// Define a Node class for linked list
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

// Define the HashTable class
class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = new Node(key, value);
        } else {
            let currentNode = this.table[index];
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(key, value);
        }
    }

    get(key) {
        const index = this.hash(key);
        let currentNode = this.table[index];
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return undefined; // Key not found
    }

    remove(key) {
        const index = this.hash(key);
        let currentNode = this.table[index];
        let prevNode = null;
        while (currentNode) {
            if (currentNode.key === key) {
                if (prevNode === null) {
                    this.table[index] = currentNode.next;
                } else {
                    prevNode.next = currentNode.next;
                }
                return; // Key removed
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            let currentNode = this.table[i];
            while (currentNode) {
                console.log(`Key: ${currentNode.key}, Value: ${currentNode.value}`);
                currentNode = currentNode.next;
            }
        }
    }
}

// Create a new hash table with a size of 10
const myHashTable = new HashTable(10);

// Add elements to the hash table
myHashTable.set("apple", "A delicious fruit");
myHashTable.set("banana", "A tasty yellow fruit");
myHashTable.set("orange", "A citrus fruit");
myHashTable.set("grape", "A small juicy fruit");
myHashTable.set("watermelon", "A large refreshing fruit");

// Display the elements in the hash table
console.log("Elements in the hash table:");
myHashTable.display();

// Retrieve a value from the hash table
console.log("Value for 'apple':", myHashTable.get("apple"));

// Remove an element from the hash table
myHashTable.remove("banana");
console.log("After removing 'banana':");
myHashTable.display();
