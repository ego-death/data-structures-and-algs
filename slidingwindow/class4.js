//problem 1: return indices of all substrings that match the concatenated patterns.

//BITCH WHAT THE FUCK

//must come back to this, difficult problem (pretty hard)
function find_word_concat(str, words) {
    if(words.length == 0 || words[0].length == 0) {
        return [];
    }
    let wordFrequency = {};
    
    words.forEach(word => {
        if(!(word in wordFrequency)) {
            wordFrequency[word] = 0;
        }
        wordFrequency[word] += 1;
    });
    const resultIndicies = [];
    let wordsCount = words.length;
    let wordsLength = words[0].length;
    for(let i=0;i<(str.length - wordsCount * wordLength) + 1;++i){
        const wordsSeen = {};
        for(let j=0;j<wordsCount;++j){
            let next_word_index = i + j * wordLength;
            word = str.substring(next_word_index, next_word_index + wordLength);
            if(!(word in wordFrequency)) {
                break;
            }
            if(!(word in wordsSeen)) {
                wordsSeen[word] = 0;
            }
            wordsSeen[word] += 1;
            if(wordsSeen[word] > (wordFrequency[word] || 0)) {
                break;
            }
            if(j + i === wordsCount) {
                resultIndicies.push(i);
            }
        }
    }
    return resultIndicies;
} //O(n+m*len) time | O(n+m) space where n is number of characters in input and m is total number of words and len is length of each word