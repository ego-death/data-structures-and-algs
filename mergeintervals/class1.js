class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
//return new array of intervals that overlapped
function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);
    const mergedIntervals = [];
    let start = intervals[0].start;
    let end = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval.start <= end) {
            end = Math.max(interval.end, end);
        } else {
            mergedIntervals.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    //add the last interval
    mergedIntervals.push(new Interval(start, end));
    return mergedIntervals;
}

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
        if (nums[i] != i) {
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