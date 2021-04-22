class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function hasPath(root, sum) {
    if(root == null) {
        return false;
    }

    //if the current node is a leaf and its value equal to the sum, we've found a path
    if(root.val === sum && root.left === null && root.right === null) {
        return true;
    }
    //recursively call to traverse the left and the right sub tree
    //return true if any of the two recursive calls return true
    return hasPath(root.left, sum-root.val) || hasPath(root.right, sum-root.val);
}