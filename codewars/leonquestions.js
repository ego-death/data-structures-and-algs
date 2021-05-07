// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multiply(arr) {
    let product = 1;
    for(let i=0;i<arr.length;++i) {
        product *= arr[i];
    }
    return product;
} //O(n) time complexity | O(1) space where n is the number of total elements in the array

console.log(multiply([1,2,3,4])) //-> 24
console.log(multiply([5,-2,1,20])) //-> -200

// Two:
// You will be given an array of all the family members' ages, in any order. The ages will 
// be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. 
// Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function ages(arr) {
    return [Math.min(...arr), Math.max(...arr), Math.max(...arr)-Math.min(...arr)];
} //O(n) time complexity due to lookup of Math.max and Math.min method | O(1) space (no extra space needed) where n 
//is number of total elements in the array

console.log(ages([12,15,18,25,52])); //-> [12,52,40]
console.log(ages([72,4,44,49,16])); // -> [4,72, 68]

// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

//two solutions for this one. slower method: use sort and exclude first, last element. faster method: sliding window hybrid
function slowSum(arr) {
    let sum = 0;
    arr.sort((a,b)=>a-b);
    for(let i=1;i<arr.length-1;++i) {
        sum+=arr[i];
    }
    return sum;
} //O(nlogn) time | O(1) space where n is number of elements

function fastSum(arr) {
    let max = arr[0], min = arr[0], sum = 0;
    for(let i=0;i<arr.length;++i) {
        if(arr[i] > max) max = arr[i];
        else if(arr[i] < min) min = arr[i];
        sum+=arr[i];
    }
    return sum - max - min;
} //O(n) time | O(1) space where n is number of elements

console.log(slowSum([1,2,3,4])); // -> 5
console.log(fastSum([1,2,3,4])); // -> 
console.log(slowSum([24,13,98,44])); // -> 68
console.log(fastSum([24,13,98,44])); // -> 68





