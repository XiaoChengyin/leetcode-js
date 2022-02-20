/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    const travel = (root, isLeft = false) => {
        if (!root.left && !root.right && isLeft) sum += root.val
        if (root.left) travel(root.left, true)
        if (root.right) travel(root.right)
    }
    let sum = 0
    travel(root)
    return sum
};
