//given a range of 1-n, one number is missing. find the missing no.
function find_missing_number(arr) {
  const n = arr.length + 1;
  //x1 represents xor of all values from 1-n
  //find sum of all numbers from 1 - n
  let x1 = 1;
  for (let i = 2; i <= n; i++) {
    x1 = x1 ^ i;
  }
  //x2 represents XOR of all values in arr
  let x2 = arr[0];
  for (let i = 0; i < -n - 1; i++) {
    x2 = x2 ^ arr[i];
  }
  return x1 ^ x2;
} //O(n) time | O(1) space
//taking xor of same number results in 0. xor of a number with 0 results in number.
//xor is associative (a^b) ^ c = a^(b^c)
//xor is communicative a^b = b^a

//given an array of numbers where each number appears twice, return the number that appears only once.
function find_single(arr) {
  let num = 0;
  for(let i=0;i<arr.length;i++) {
    num = num ^ arr[i];
    console.log(num);
  }
  return num;
} //O(n) time | O(1) space
