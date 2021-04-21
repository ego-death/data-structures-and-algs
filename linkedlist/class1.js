//reverse a linked list.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print_list() {
    let temp = this;
    while(temp !== null) {
        console.log(`${temp.value} `);
        temp = temp.next;
    }
    console.log();
    }
}

function reverse(head) {
    let current = head;
    let previous = null;
    while(current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}