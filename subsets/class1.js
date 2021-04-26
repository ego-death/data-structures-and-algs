//find all subsets of a given set. example [1,3] = [], [1], [3], [1,3].

function find_subsets(nums) {
  const subsets = [];
  //start by adding the empty subsets
  subsets.push([]);
  for(let i=0;i<nums.length;++i) {
    currentNumber = nums[i];
    const n = subsets.length;
    for(let j=0;j<n;++j) {
      //create a new subset from the existing subset and insert the current element to it
      const set1 = subsets[j].slice(0); //clone the permutation.
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }
  return subsets;
}

//find all subsets of a given set but now handle for duplicates.

function find_subsets2(nums) {
  nums.sort((a,b)=>a-b) //sort the numbers to handle duplicates
  const subsets = [];
  subsets.push([]);
  let startIndex = 0, endIndex = 0;
  for(let i=0;i<nums.length;i++) {
    startIndex = 0;
    //if current and the previous elements are the same, create new subsets only from the subset
    //added in the previous step
    if(i>0 && nums[i]===nums[i-1]) {
      startIndex = endIndex + 1;
    }
    endIndex = subsets.length - 1;
    for(let j=startIndex;j<endIndex+1;++j) {
      //create a new subset from the existing subset and add the current element to it
      const set1 = subsets[j].slice(0);
      set1.push(nums[i]);
      subsets.push(set1);
    }
  }
  return subsets;
}

//[1,3,3] - [], [1], [3], [1,3]
