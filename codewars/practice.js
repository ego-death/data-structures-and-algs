function getOrder(input) {
    const items = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
    let order = [];
    let str = "";
    for(let i=0;i<input.length;i++) {
        str+=input[i];
        if(items.includes(str)){
            order.push(str[0].toUpperCase()+str.slice(1));
            str = "";
        }
    }
    return order.sort((a,b) => items.indexOf(a.toLowerCase())-items.indexOf(b.toLowerCase()));
  }

let str = 'pizza';
// console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'));

function makeSentence(parts) {
    // TODO
    let output = "";
    for(let i=0;i<parts.length;i++) {
        if(parts[i] == '.') continue;
        output += parts[i];
        if(parts[i+1] !== ',') {
            output+=' ';
        }
    }
    if(output.trim().slice(-1)=='.') return output.trim();
    else return output.trim() + '.';
  }

//   console.log(makeSentence(['hello', 'world']));

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        let extension = (dirtyFileName.split(".")[1]);
        let nameArr = dirtyFileName.split(".")[0].split("_");
        nameArr.shift();
        let name = nameArr.join("_");
        return name + '.' + extension;
    }
}

// console.log(FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'));

function longest(str) {
    // Good luck :)
    let windowStart = 0, windowEnd = 0;
    let temp = ""; 
    let currentMax = "";
    for(;windowEnd<str.length;++windowEnd) {
        temp += str[windowEnd];
        if(str.charCodeAt(windowEnd) > str.charCodeAt(windowEnd+1)){
            if(currentMax.length < temp.length) currentMax = temp;
            windowStart = windowEnd;
            temp = "";
        }
    }
    if(currentMax.length < temp.length) currentMax = temp;
    return currentMax;
  }

//   console.log(longest('nab'));

function longest_palindrome(s) {
    //..
    let windowStart = 0, windowEnd = 0, maxPal = "", window = "";
    for(;windowEnd<s.length;++windowEnd) {
        window += str[windowEnd];
    }

}