//given a linked list, find out whether it is cyclical at any point.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function has_cycle(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow == fast) {
            return true;
        }
    }
    return false;
} //O(n) time | O(1) space where n is number of nodes

//given a linked list, find out the length of the cycle.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function has_cycle(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) {
            return calculateLength(slow);
        }
    }
    return 0;
} //O(n) time| O(1) space

function calculateLength(node) {
    let current = node;
    let length = 0;
    while(true) {
        current = node.next;
        length += 1;
        if(current === node) {
            break;
        } 
    }
    return length;
}

//find the middle of a linked list using fast and slow pointer (hare and tortoise alg)
function findMiddle(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
} // O(n) time | O(1) space
