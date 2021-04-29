//given an array of linkedlists, sort all the elements and return a new sorted linked list.
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function merge_lists(lists) {
  const minHeap = new Heap([], null, ((a, b) => b.value - a.value));

  // put the root of each list in the min heap
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take the smallest(top) element form the min-heap and add it to the result
  // if the top element has a next element add it to the heap
  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      // resultHead = resultTail = node;
      // resultHead = resultTail; // null
      resultTail = node; // updated with node value
      resultHead = node; 
      console.log(resultHead.value, resultTail.value, node.value)
      // resultHead = resultTail
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
      console.log(resultHead.value, resultTail.value, node.value)
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
} //O(N * logK) time | O(K) space where N is number of elements in all K arrays and K is number of arrays 