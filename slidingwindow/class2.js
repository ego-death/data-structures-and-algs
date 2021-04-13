//longest substring with repeating character allowed k replacements
//i aint understanding shit :(
//abbcb k = 1 (one replacement) a: 1, b: 2 , repeatCount=2
function longestSubstring(str, k) {
    let windowStart = 0, windowEnd = 0, maxRepeatCount = 0, freqMap = {}, maxLength = 0;
    for(windowEnd=0;windowEnd<str.length;windowEnd++) {
        const rightChar = str[windowEnd];
        if(!freqMap[rightChar]) {
            freqMap[rightChar] = 0;
        }
        freqMap[rightChar] += 1;
        maxRepeatCount = Math.max(maxRepeatCount, freqMap[rightChar]);
        if(windowEnd - windowStart + 1 - maxRepeatCount > k) {
            let leftChar = str[windowStart];
            //delete first element
            freqMap[rightChar] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
} // O(n) time | O(1) space where n is the number of letters in the input string

//longest subarray with repeating ones (allowed k replacements of 0)

function lengthLongestSubarray(arr, k) {
    let windowStart = 0, windowEnd = 0, maxOnes = 0;
    for(windowEnd=0;windowEnd<arr.length;windowEnd++) {
        if(arr[windowEnd] == 1) {
            maxOnes++;
        }
        if(windowEnd - windowStart + 1 - maxOnes > k) {
            if(arr[windowStart] == 1){
                maxOnes -= 1;
            }
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
} //O(n) time | O(1) space where n is the number of letters in the input string