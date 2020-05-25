/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    const search = (root, deep) => {
        if (root.left) {
            result[deep] = result[deep] || []
            result[deep].push(root.left.val)
            search(root.left, deep + 1)
        }
        if (root.right) {
            result[deep] = result[deep] || []
            result[deep].push(root.right.val)
            search(root.right, deep + 1)
        }
    }
    if (!root) return []
    result[0] = [root.val]
    search(root, 1)
    return result
};
