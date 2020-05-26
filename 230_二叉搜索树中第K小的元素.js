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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let value
    const result = []
    const search = root => {
        if (value != null) return
        if (root.left) search(root.left)
        result.push(root.val)
        if (result.length === k) {
            value = root.val
            return
        }
        if (root.right) search(root.right)
    }
    if (!root) return null
    search(root)
    return value
};
