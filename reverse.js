// Define the reverseList function
const reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        const nextTemp = current.next; // Store the next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move pointers one position ahead
        current = nextTemp; // Move pointers one position ahead
    }
    return prev; // 'prev' now points to the new head
};

// Define a linked list node class
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to create a linked list from an array of values
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Function to convert a linked list to an array
function linkedListToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Example usage:
const elements = [1, 2, 3, 4, 5]; // Elements of the linked list
const head = createLinkedList(elements); // Create linked list from elements
const reversedHead = reverseList(head); // Reverse the linked list
const reversedElements = linkedListToArray(reversedHead); // Convert reversed linked list to array
console.log(reversedElements); // Output the reversed elements
