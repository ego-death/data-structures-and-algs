function longest_palindrome(s) {
    //..
    //max length of window can always be only <= Math.ceil(s.length/2)
    let windowEnd = 0, windowStart = 0, windowStr = "", currentMax = "";
    for(;windowEnd<s.length;windowEnd++) {
        windowStr+=s[windowEnd];
        if(windowStr.split("").reverse().join("") == windowStr && windowStr.length > currentMax.length) {
            currentMax = windowStr;
        }
    }
}