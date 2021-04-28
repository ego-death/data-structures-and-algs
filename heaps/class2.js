//find kth smallest number
function find_kth_smallest_number(nums, k) {
    maxHeap = new Heap();
    //put first k numbers in the max heap
    for(let i=0;i<k;i++) {
        maxHeap.push(nums[i]);
    }
    //go through the remaining numbers of the array, if the number from the array is smaller
    //than the top(biggest nujmber of the heap, remove from heap and the number from array)
    for(let i=k;i<nums.length;i++) {
        if(nums[i] < maxHeap.peek()){
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }
    //the root of the heap has the Kth smallest number
    return maxHeap.peek();
} //O(K*logK + (N-K)*logK | O(K) space where N is number of elements in array)

//find k number of points closest to the origin of a 2-d plane.
const Heap = require('./collections/heap');

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    //used for max-heap
    compare(other) {
        return this.distance_from_origin() - other.distance_from_origin();
    }
    distance_from_origin() {
        //ignoring sqrt to calculate the distance
        return (this.x * this.x) + (this.y * this.y);
    }
    print_point() {
        process.stdout.write(`[${this.x}, ${this.y}]`);
    }
}

function find_closest_points(points, k) {
    const maxHeap = new Heap([], null, ((a,b)=> a.compare(b)));
    //put first k points in the max heap
    for(let i=0;i<k;++i) {
        maxHeap.push(points[i]);
    }
    //go through the remaining points of the input array, if a point is closer
    //to the origin than the top point of the max-heap, remove the top point from heap and add
    //the point from the input array
    for(let i=k;i<points.length;i++) {
        if(points[i].distance_from_origin() < maxHeap.peek().distance_from_origin()) {
            maxHeap.pop();
            maxHeap.push(points[i]);
        }
    }
    //the heap has 'k' points closest to the origin, return them in a list
    return maxHeap.toArray();
} //O(N*logK) time as we iterate all points and may need to insert dynamically | O(k) space where k is number of points.
