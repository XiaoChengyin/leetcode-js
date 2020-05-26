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
var zigzagLevelOrder = function(root) {
    const result = []
    const search = (root, depth) => {
        if (Number.isInteger(depth / 2)) {
            result[depth] = result[depth] || []
            result[depth].push(root.val)
            if (root.left) search(root.left, depth + 1)
            if (root.right) search(root.right, depth + 1)
        } else {
            result[depth] = result[depth] || []
            result[depth].unshift(root.val)
            if (root.left) search(root.left, depth + 1)
            if (root.right) search(root.right, depth + 1)
        }
    }
    if (!root) return result
    search(root, 0)
    return result
};
