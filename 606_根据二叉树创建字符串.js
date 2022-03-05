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
 * @return {string}
 */
var tree2str = function(root) {
    if (!root) return ''
    let left = ''
    let right = ''
    if (root.left) left = `(${tree2str(root.left)})`
    if (root.right) right = `(${tree2str(root.right)})`
    if (!left && right) return root.val + '()' + right
    return root.val + left + right
};
