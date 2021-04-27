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

function reverseFizzBuzz(array) {
  // your code
  let fizz=0, buzz=0;
  for(let i=0;i<array.length;i++) {
    let el = array[i];
    console.log(el=='Fizz');
    if(el == 'Fizz' && !fizz) fizz = i+1;
    else if(el =='Buzz' && !buzz) buzz = i+1
    else if(el == 'FizzBuzz' && !fizz && !buzz) return [i+1, i+1];
    else if(el =='FizzBuzz' && !buzz) return [fizz, (i+1)/fizz];
    else if(el == 'FizzBuzz' && !fizz) return [(i+1)/buzz, buzz];
    
    if(fizz && buzz) return [fizz,buzz];
  }
}

// console.log('Hi');
// console.log(reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]));

var twoSum = function(nums, target) {
  let numsMap = {};
  for(let i=0;i<nums.length;i++) {
    let complement = target - nums[i];
    if(complement in numsMap) {
      return [i, numsMap[complement]];
    } else {
      numsMap[nums[i]] = i;
    }
  }
};

console.log(twoSum([2,3,4], 6));
