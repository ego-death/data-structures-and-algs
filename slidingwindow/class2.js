//longest substring with repeating character allowed k replacements
//i aint understanding shit :(

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
}