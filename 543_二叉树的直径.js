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
var diameterOfBinaryTree = function(root) {
    let max = 0
    const travel = node => {
        if (!node) return -1
        const left = travel(node.left) + 1
        const right = travel(node.right) + 1
        max = Math.max(max, left + right)
        return Math.max(left, right)
    }
    travel(root)
    return max
};
