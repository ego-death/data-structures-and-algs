//max continguous sub array of k size problem.

function max_sub_array(k, arr) {
  let maxSum = 0, windowStart = 0, windowEnd = 0;
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; //add element to window
    if (windowEnd >= k - 1) { //if size reached
      maxSum = Math.max(windowSum, maxSum); //check max vs current sum
      windowSum -= arr[windowStart]; //subtract first element out
      windowStart++; //setting up for next subtraction
    }
  }
  return maxSum;
}

//smallest subarray with a given sum:

const smallest = (s, arr) => {
  let windowSum = 0, minLength = Infinity, windowStart = 0, windowEnd = 0;
  for (let windowSum = 0; windowSum < windowSum.length; i++) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      minLength = Math.min(minlength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return minLength == Infinity ? 0 : minLength;
}

//fruit basket with 2 distinct at most.
function fruitBasket(fruits) {
  let windowStart = 0, maxLength = 0, fruitFrequency = {};
  //try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!fruitFrequency[rightFruit]) fruitFrequency[rightFruit] = 0;
    fruitFrequency[rightFruit] += 1;
    //shrink sliding window
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart += 1; //shrink the window
    }
    maxLength = math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

//no repeat substring
function noRepeat(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    charIndexMap[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

//get the first negative number of each subarray of size k

function firstNeg(arr, k) {
  let windowStart = 0, windowEnd = 0
  const keepNeg = [];
  let ans = [];
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] < 0) keepNeg.push(arr[windowEnd]);
    if (windowEnd >= k - 1) {
      if (keepNeg.length > 0) {
        ans.push(keepNeg[0]);
        if (keepNeg[0] == arr[windowStart]) {
          keepNeg.shift();
        }
      }
      else ans.push(0);
      windowStart += 1;
    }
  }
  return ans;
}