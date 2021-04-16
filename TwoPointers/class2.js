//given a sorted array, return the squares of the array in sorted order

function make_squares(arr) {
    const n = arr.length;
    let squares = Array(n).fill(0);
    let highestSquareIdx = n - 1;
    let left = 0;
    let right = n - 1;
    while(left <= right) {
        let leftSquare = arr[left] ** 2,
        rightSquare = arr[right] ** 2;
        if(leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            left += 1;
        }
        else {
            squares[highestSquareIdx] = rightSquare;
            right -= 1;
        }
        highestSquareIdx -= 1;
    }
    return squares;
} //O(n) time complexity | O(n) square complexity