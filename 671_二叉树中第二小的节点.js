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
var findSecondMinimumValue = function(root) {
    const min = root.val
    const travel = node => {
        if (!node) return Number.MAX_SAFE_INTEGER
        if (node.val > min) return node.val
        return Math.min(travel(node.left), travel(node.right))
    }
    const result = travel(root)
    return result === Number.MAX_SAFE_INTEGER ? -1 : result
};
