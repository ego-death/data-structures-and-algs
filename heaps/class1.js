//calculate the median of a stream of numbers using a heap.
class MedianStream {
    constructor () {
        this.maxHeap = new Heap([], null, ((a, b)=>a-b)); // containing first half of numbers
        this.minHeap = new Heap([], null, ((a, b)=>b-a)); //containing second half of numbers
    }
    insert_num (num) {
        if(this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
            this.maxHeap.push(num);
        }
        else {
            this.minHeap.push(num);
        }
        //either both the heaps will have equal number of elements or max-heap will have one
        //more element than the min-heap
        if(this.maxHeap.length > this.minHeap.length + 1){
            this.minHeap.push(this.maxHeap.pop());
        } else if(this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }
    find_median() {
        if(this.maxHeap.length == this.minHeap.length) {
            //if we have even number of elements, take the average of the middle elements
            return this.maxHeap.peek()/2.0 + this.minHeap.peek()/2.0
        }
        //because max-heap will have more one more element than the min-heap due to the design of the algorithm
        return this.maxHeap.peek();
    }
} //O(logN) time for insert_num, O(1) for find_median| O(N) space where N is the length of the stream.