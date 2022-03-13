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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const res = []
    const travel = node => {
        if (!node) return false
        if (node.val < low) {
            travel(node.right)
        } else if (node.val > high) {
            travel(node.left)
        } else {
            res.push(node.val)
            travel(node.left)
            travel(node.right)
        }
    }
    travel(root)
    return res.reduce((sum, val) => sum + val, 0)
};
