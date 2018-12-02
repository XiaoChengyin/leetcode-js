/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let hasSum = (node, s) => {
        if(!node) return false
        s += node.val
        if(!node.left && !node.right && s === sum) {
            return true
        }
        return hasSum(node.left, s) || hasSum(node.right, s)
    }
    return hasSum(root, 0)
};
