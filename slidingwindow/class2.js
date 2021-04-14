//longest substring with repeating character allowed k replacements
//i aint understanding shit :(
//abbcb k = 1 (one replacement) a: 1, b: 2 , repeatCount=2
function longestSubstring(str, k) {
    let windowStart = 0, windowEnd = 0, maxRepeatCount = 0, freqMap = {}, maxLength = 0;
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!freqMap[rightChar]) {
            freqMap[rightChar] = 0;
        }
        freqMap[rightChar] += 1;
        maxRepeatCount = Math.max(maxRepeatCount, freqMap[rightChar]);
        if (windowEnd - windowStart + 1 - maxRepeatCount > k) {
            let leftChar = str[windowStart];
            //delete first element
            freqMap[leftChar] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
} // O(n) time | O(1) space where n is the number of letters in the input string

//longest subarray with repeating ones (allowed k replacements of 0)

function lengthLongestSubarray(arr, k) {
    let windowStart = 0, windowEnd = 0, maxOnes = 0;
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        if (arr[windowEnd] == 1) {
            maxOnes++;
        }
        if (windowEnd - windowStart + 1 - maxOnes > k) {
            if (arr[windowStart] == 1) {
                maxOnes -= 1;
            }
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
} //O(n) time | O(1) space where n is the number of letters in the input string

//problem 1. check if any permutation of a given pattern exists in an input string.

//attempt: 
const find_permutation = function (str, pattern) {
    // TODO: Write your code here
    const patternLetters = pattern.split("");
    let windowStart = 0, windowEnd = 0, charMap = {};
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!charMap[rightChar]) {
            charMap[rightChar] = 0;
        }
        charMap[rightChar] += 1;
        if (patternLetters.includes(char[windowEnd]) && windowEnd - windowStart + 1 == pattern.length) return true;
    }
    return false;
};
//solution:
function permutation(str, pattern) {
    let windowStart = 0, windowEnd = 0, charFrequency = {}, matched = 0, leftChar;
    for (let i = 0; i < pattern.length; i++) {
        if (!charFrequency[pattern[i]]) charFrequency[pattern[i]] = 0;
        charFrequency[pattern[i]] += 1;
    }
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar]--;
            if (charFrequency[rightChar] == 0) matched += 1;
        }
        if (matched == Object.keys(charFrequency).length) return true;
        //else we need to shrink the sliding window
        if (windowEnd >= pattern.length - 1) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] == 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    return false; 
} //O(n+m) time | O(m) space where n is the number of letters in the input string and m is the number of letters in the pattern string
