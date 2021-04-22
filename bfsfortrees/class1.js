//traverse a tree in breadth-first fashion.
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function traverse(root) {
    result = [];
    if(root == null) return result;
    const queue = new Queue();
    queue.push(root);
    while(queue.length > 0) {
        const levelsize = queue.length;
        let currentLevel = [];
        for(i=0;i<levelsize;++i) {
            let currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
} //O(N) time | O(N) space where N is the number of nodes.

//reverse bst traversal of a tree.

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function traversebackwards(root) {
    let result = [];
    if(root == null) {
        return result;
    }
    let queue = new Queue();
    queue.push(root);
    while(queue.length > 0) {
        let currentNode = queue.shift();
        currentLevel.push(currentNode.val);
        if(currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if(currentNode.right !== null) {
            queue.push(currentNode.right);
        }
        result.unshift(currentLevel);
    }
    return result;
} //O(N) time | O(N) space where N is the number of nodes.

