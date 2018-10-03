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
var levelOrderBottom = function(root) {
    let result = []
    let traversal = (node, level) => {
        if(!node) return
        if(!result[level]) result[level] = []
        result[level].push(node.val)
        traversal(node.left, level + 1)
        traversal(node.right, level + 1)
    }
    traversal(root, 0)
    return result.reverse()
};