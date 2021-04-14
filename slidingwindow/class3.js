//find all the starting indices of anagrams in a given input str
function find_string_anagrams(str, pattern) {
    let windowStart = 0, windowEnd = 0, matched = 0, charFrequency = {};
    for (let i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (chr in charFrequency) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }
    const result = [];
    for (; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }
        if (matched == Object.keys(charFrequency).length) {
            result.push(windowStart);
        }
        if (windowEnd >= pattern.length - 1) {
            let leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    return result;
} //O(n+m) time since loop through both input and pattern | O(m) space

//problem 2: find the shortest substring which matches a given pattern in an input string example ahdfufbcsiw (sol is ahdfufbc since it must contain abc AT LEAST!)
// O(N + M) time | O(M) space - where N and M are the number of char in the input string and the pattern

const find_substring = (str, pattern) => {
    let windowStart = 0,
        match = 0,
        substrStart = 0,
        minLength = str.length + 1,
        charFrequency = {},
        matched = 0;

    for (let i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] >= 0) { // Count every matching of a character
                matched += 1;
            }
        }

        // Shrink the window if we can, finish as soon as we remove a matched character
        while (matched === pattern.length) {
            if (minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
            }

            const leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {

                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }

    }

    if (minLength > str.length) {
        return '';
    }
    return str.substring(substrStart, substrStart + minLength)
}

console.log(find_substring('geeksforgeeks', 'ork'));