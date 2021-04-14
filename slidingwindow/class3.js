//find all the starting indices of anagrams in a given input str
function find_string_anagrams(str, pattern) {
    let windowStart = 0, windowEnd = 0, matched = 0, charFrequency = {};
    for(let i=0;i<pattern.length;i++) {
        const chr = pattern[i];
        if(chr in charFrequency) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }
    const result = [];
    for(;windowEnd<str.length;windowEnd++) {
        const rightChar = str[windowEnd];
        if(rightChar in charFrequency) {
            if(charFrequency[rightChar] === 0){
                matched += 1;
            }
        }
        if(matched == Object.keys(charFrequency).length) {
            result.push(windowStart);
        }
        if(windowEnd >= pattern.length - 1) {
            let leftChar = str[windowStart];
            windowStart += 1;
            if(leftChar in charFrequency) {
                if(charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    return result;
} //O(n+m) time since loop through both input and pattern | O(m) since worst case all letters in the pattern

//problem 2: find the shortest substring which matches a given pattern in an input string example ahdfufbcsiw (sol is ahdfufbc since it must contain abc AT LEAST!)
function findSubstring(str, pattern) {
    let windowStart = 0, matched = 0, substrStart = 0, minLength = str.length + 1, charFrequency = {};
    for(let i=0;i<pattern.length;i++) {
        const chr = pattern[i];
        if(!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }

        charFrequency[chr] += 1;
    }
    for(;windowEnd<str.length;windowEnd++) {
        const rightChar = str[windowEnd];
        if(rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if(charFrequency[rightChar] == 0) {
                matched+=1;
            }
        }
        while (matched == pattern.length) {
            if(minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
            }
        }
        const leftChar = str[windowStart];
        windowStart += 1;
        if(leftChar in charFrequency) {
            if(charFrequency[leftChar] == 0) {
            matched -= 1;
            }
        }
    }
    return minLength > str.length ? '' : str.substring(substrStart, minLength);
} //O(n+m) time since loop through both input and pattern | O(m) since worst case all letters in the pattern