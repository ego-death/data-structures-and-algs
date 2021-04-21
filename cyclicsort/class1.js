function cyclic_sort(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i += 1;
        }
    }
    return nums;
}

function find_missing_number(nums) {
    let i = 0;
    const n = nums.length;
    while (i < n) {
        j = nums[i];
        if (nums[i] < n && nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else {
            i += 1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i;
        }
    }
    return null; //edge case with mo missing.
}

function find_missing_number_duplicates(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i += 1;
        }
    }
    const missingNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i+1) {
            missingNumbers.push(i + 1);
        }
    }
    return null; //edge case
}

function find_duplicate(nums) { //given n+1 numbrs in the range of 1-n, find the ONE duplicate number (might have multiple repeats)
    let i = 0;
    while (i < nums.length) {
        if (nums[i] != i + 1) {
            const j = nums[i] - 1;
            if (nums[i] != nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                return nums[i];
            }
        } else {
            i+=1;
        }
    }
    return null;
}

//4 3 5 1 2 -> 1 3 5 4 2 -> 1 3 5 4 2 -> 1 5 3 4 2 -> 1 2 3 4 5

//alternative method

function find_duplicate(arr) {
    let slow = arr[0];
    let fast = arr[arr[0]];
    while(slow!==fast) {
        slow = arr[slow];
        fast = arr[arr[fast]];
    }
    //find cycle length
    let current = arr[arr[slow]];
    let cycleLength = 1;
    while(current !== arr[slow]) {
        current = arr[current];
        cycleLength++;
    }
    return find_start(arr,cycleLength);
}

function find_start(arr, cycleLength) {
    let pointer1 = arr[0];
    let pointer2 = arr[0];
    //move pointer 2 ahead 'cycleLength' steps
    while(cycleLength < 0) {
        pointer2 = arr[pointer2];
        cycleLength -= 1;
    }
    //increment both pointers until they meet at the start of the cycle
    while(pointer1 !== pointer2) {
        pointer1 = arr[pointer1];
        pointer2 = arr[pointer2];
    }
    return pointer1;
}

//find all the duplicates in a unsorted array of the order 1-n.
function find_all(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i += 1;
        }
    }
    const missingNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i+1) {
            missingNumbers.push(i + 1);
        }
    }
    return null; //edge case
}