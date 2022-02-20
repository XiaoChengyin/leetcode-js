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
 * @return {number[]}
 */
var preorderTraversal = function(root, result = []) {
    if (root) {
        result.push(root.val)
        root.left && preorderTraversal(root.left, result)
        root.right && preorderTraversal(root.right, result)
    }
    return result
};
