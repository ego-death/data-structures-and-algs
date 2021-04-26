function binary_search(arr, key) {
  let start = 0, end = arr.length - 1, isAscending = arr[start] < arr[end];
  while(start <= end) {
    mid = Math.floor(start + (end - start)/2);
    if(key == arr[mid]) {
      return mid;
    }
    if(isAscending) { //ascending order
      if(key < arr[mid]) {
        end = mid - 1; //the 'key' can be in the first half
      } else { //key > arr[mid]
        start = mid + 1;
      }
    } else { //descending order
      if(key > arr[mid]) {
        end = mid - 1; //the 'key' can be in the first half
      } else { //key > arr[mid]
        start = mid + 1;
      }
    }
  }
  return -1; //edge case - no element found
} //O(log N) time | O(1) space


function commas(theNum){
  //Add some commas!
  let ans = "";
  let decimal = 0;
  let thetheNum
  if(thetheNum.toString().split(".")[1]) {
    theNum = theNum.toFixed(3);
    decimal = theNum.toString().split(".")[1];
    if(decimal[2]=='0') {
      decimal = decimal[0]+decimal[1];
      if(decimal[1]=='0') {
        decimal = decimal[0];
      }
    }
  }
  let revString = theNum.toString().split(".")[0].split("").reverse().join("");
  for(let i=1;i<=revString.length;i++) {
    ans += revString[i-1];
    if(i%3 == 0) ans += ',';
  }
  if(ans[ans.length-1]==',') ans = ans.slice(0,-1);
  return decimal?ans.split("").reverse().join("")+'.'+decimal:ans.split("").reverse().join("");
}
