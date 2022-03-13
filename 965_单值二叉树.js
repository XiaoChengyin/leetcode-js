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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let flag = true
    const val = root.val
    const travel = (node) => {
        if (!node || !flag) return false
        if (node.val !== val) {
            flag = false
            return false
        }
        travel(node.left)
        travel(node.right)
    }
    travel(root)
    return flag
};
