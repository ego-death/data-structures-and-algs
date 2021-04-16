//problem 1: get the indices of two elements of a sorted array that add up to a target sum.

function twoSum(arr, targetSum) {
    let left = 0, right = arr.length - 1;
    while(left < right) { //make sure they never cross aight
        let sum = arr[left] + arr[right];
        if(sum < targetSum) {
            left += 1; //increment left pointer cuz we need higher value
        }
        else if(sum > targetSum) {
            right += 1; //increment right pointer cuz we need lower value
        }
        else {
            return [left, right]; //return indices
        }
    }
    return [-1,-1]; //edge case with no matches
} //O(n) time | O(1) space where n is the length of the array

//problem 2: remove duplicates and return length

function removeDuplicates(arr) {
    let nextNonDuplicate = 1;

    let next = 1;
    while(next < arr.length) {
        if(arr[nextNonDuplicate - 1] !== arr[next]) {
            arr[nextNonDuplicate] = arr[next];
            nextNonDuplicate += 1;
        }
        next += 1;
    }
    return nextNonDuplicate;
 } //O(n) time | O(1) space where n is the length of the array, [1,2,2,5,5,10,12]

 //problem 3: remove all elements from an array that matches a given key [5,3,3,1,7,9,10,3], key = 3 return length of new array without key [5,1,7,9,10] - 5;

 function removeKeys(arr, key) {
     let nextElement = 0;
     for(let i=0;i<arr.length;i++) {
         if(arr[i] != key) {
             arr[nextElement] = arr[i];
             nextElement++;
         }
     }
     return nextElement;
 } //O(n) time | O(1) space where n is the length of elements in the array.

 function find(arr, sum) {
     let hashMap = {};
     for(let i=0;i<arr.length;i++) {
         if(!(arr[i] in hashMap)) {
             hashMap[i] = 1;
         }
         if(hashMap[sum - arr[i]]) return [arr[i], sum - arr[i]];
     }
     return false;
 } // [5,3,3,9,4,6]

//  console.log(find([5,3,3,9,4,6], 7));

//square each value in sorted array and return the output in sorted order

// function square(arr) {
//     //[-4,-3,1,2,5]
//     let left =
// }

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let windowEnd = 0, windowStart = 0, charFreq = {}, maxLength = 0, hit = false;
    for(windowEnd=0;windowEnd<s.length;++windowEnd) {
        let endChar = s[windowEnd];
        if(!(endChar in charFreq)) {
            charFreq[endChar] = 0;
        }
        charFreq[endChar]++;
        if(charFreq[endChar] > 1) {
            hit = true;
            console.log(windowEnd, windowStart);
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1); 
            charFreq = {};
            charFreq[endChar] = 1;
            windowStart = windowEnd;
        }
    }
    return !hit?s.length:maxLength;
};


console.log(lengthOfLongestSubstring('ab'));
