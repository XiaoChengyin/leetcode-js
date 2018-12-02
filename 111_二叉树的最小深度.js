/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    let mapping = (node, depth) => {
        if(!node) return Infinity
        if(!node.left && !node.right) return depth
        return Math.min(mapping(node.left, depth + 1), mapping(node.right, depth + 1))
    }
    if(!root) return 0
    return mapping(root, 1)
};
