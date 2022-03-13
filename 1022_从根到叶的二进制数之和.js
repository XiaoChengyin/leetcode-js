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
var sumRootToLeaf = function(root) {
    const nums = []
    const travel = (node, string = '') => {
        if (!node) {
            return
        }
        string = string + String(node.val)
        if (node.left) {
            travel(node.left, string)
        }
        if (node.right) {
            travel(node.right, string)
        }
        if (!node.right && !node.left) {
            nums.push(Number.parseInt(string, 2))
        }
    }
    travel(root)
    return nums.reduce((sum, n) => sum + n, 0)
};
