//find the longest substring with repeating characters given k replacements

/* example: abbcfefffg - by replacing e with f then we get max length = 5; */

function findLength(str, k) {
    let windowStart = 0, windowEnd = 0, charFreq = {}, maxRepeatCount = 0, maxLength = 0;
    for(;windowEnd<str.length;windowEnd++) {
        let rightChar = str[windowEnd];
        if(!charFreq[rightChar]) {
            charFreq[rightChar] = 0;
        }
        charFreq[rightChar] += 1;
        maxRepeatCount = Math.max(charFreq[rightChar], maxRepeatCount);
        if(windowEnd - windowStart + 1 - maxRepeatCount > k) { //then reduce window size as more replacements than allowed
            let leftChar = str[windowStart];
            charFreq[leftChar] -= 1;
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
} //solved

//problem 2: find the smallest subarray length whose sum of elements is greater than a given number k

function f2 (arr, k) {
    let windowStart = 0, windowEnd = 0, windowSum = 0, minLength = 9999;
    for(;windowEnd<arr.length;windowEnd++) {
        windowSum += arr[windowEnd];
        while(windowSum > k) {
            minLength = Math.min(windowEnd - windowStart + 1, minLength);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return minLength==9999?-1:minLength;
}

// console.log(f2([2,2,3,2,2,11], 15)); // 1 9 3 5 7 13

//problem 3: find the count of distinct elements in each subarray of size k
function f3 (arr, k) {
    let windowStart = 0, windowEnd = 0, countDistinct = 0, holdDistinct = {};
    for(;windowEnd<arr.length;windowEnd++) {
        if(!holdDistinct[arr[windowEnd]]) {
            holdDistinct[arr[windowEnd]] = 0;
        }
        holdDistinct[arr[windowEnd]] += 1;
        if(windowEnd - windowStart + 1 == k) {
            console.log(Object.keys(holdDistinct).length+'\n');
            let leftEl = arr[windowStart];
            holdDistinct[leftEl] -= 1;
            if(holdDistinct[leftEl] == 0) {
                delete holdDistinct[leftEl];
            }
            windowStart++;
        }
    }
}

// console.log(f3([ 2, 1, 2, 3, 2, 1, 4, 5 ], 5))

//Find the smallest window in a string containing all characters of another string
// Input: string = “this is a test string”, pattern = “tist” 
// Output: Minimum window is “t stri” 
// Explanation: “t stri” contains all the characters of pattern.
// Input: string = “geeksforgeeks”, pattern = “ork” 
// Output: Minimum window is “ksfor”

//SOLUTION: 
/* BRUTE FORCE: I'm thinking run two nested for loops in which the outer loop fixes on an index and the inner loop searches all 
indexes after it till it matches the pattern. then test for minLength and change if necessary. repeat for all other indices.
WINDOW METHOD: get window to run until it matches all characters. run inner while loop to reduce size of window until minimum length 
is achieved and matched condition remains true */


function f4(str, pattern) {
    let windowEnd = 0, windowStart = 0, charFreq = {}, subStrIndex = 0, minLength = Infinity, matched = 0;
    for(const char of pattern) {
        if(!charFreq[char]) {
            charFreq[char] = 0;
        }
        charFreq[char] += 1;
    }
    for(let windowEnd=0;windowEnd<str.length;windowEnd++) {
        let rightChar = str[windowEnd];
        if(rightChar in charFreq) {
            charFreq[rightChar] -= 1;
            if(charFreq[rightChar] == 0) {
                matched++;
            }
        }
        while(matched == pattern.length) {
            console.log(windowEnd);
            if(minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                subStrIndex = windowStart;
            }
            let leftChar = str[windowStart];
            if(leftChar in charFreq) {
                if(charFreq[leftChar] == 0) {
                    matched -= 1;
                }
                charFreq[leftChar] += 1;
            }
            windowStart++;
        }
    }
    return minLength==Infinity?'':str.substring(subStrIndex, subStrIndex + minLength);
}

console.log(f4('geeksforgeeks', 'ork'));
