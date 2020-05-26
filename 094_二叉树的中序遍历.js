/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const travel = root => {
        if (root.left) travel(root.left)
        result.push(root.val)
        if (root.right) travel(root.right)
    }
    const result = []
    if (root) travel(root)
    return result
};
