class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isCircular(head) {
    if (!head) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Loop detected
        }
    }

    return false; // No loop found
}

// Example usage:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// Create a circular linked list
node1.next = node1;
node2.next = node2;
node3.next = node3;
node4.next = node4; // Point back to node2 to create a loop

console.log(isCircular(node1)); // Output: true

// Create a non-circular linked list
node1.next = null; // Break the loop

console.log(isCircular(node1)); // Output: false
