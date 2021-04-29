//find the min cost of connecting N ropes.
//for example [1,3,11,5] -> connect 1 and 3 = 4, connect 4 and 5 for 9
//and connect 9 and 11 for 20. now we get 4+9+20 = 33 total cost.

const Heap = require('./collections/Heap');

function minimum_cost(ropeLengths) {
    //add all ropes to the min heap
    const minHeap = new Heap(ropeLengths, null, ((a,b)=>b-a));
    //go through the values of the heap, in each step take top (ie lowest) rope lengths from the min heap
    //connect them and push the result back to the min heap since we need to add the result later on
    //keep doing this until the heap is left with only one rope.
    let result = 0;
    while(minHeap.length > 1) {
        const tempCost = minHeap.pop() + minHeap.pop();
        result += tempCost;
        minHeap.push(tempCost);
    }
    return result;
} // O(n * logn) time since logn for insertion and we run it n number of times | O(n) space cuz we need heap for n elements of the array