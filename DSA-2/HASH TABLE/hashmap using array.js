// Define the HashTable class
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        let index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);
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
