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
var findTilt = function(root) {
    let sum = 0
    const travel = node => {
        if (!node) return 0
        const left = travel(node.left)
        const right = travel(node.right)
        sum += Math.abs(left - right)
        return left + right + node.val
    }
    travel(root)
    return sum
};
