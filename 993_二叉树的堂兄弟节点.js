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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xParent = null
    let yParent = null
    let xDepth = null
    let yDepth = null
    const travel = (node, depth = 0, parent = null) => {
        if (!node) return false
        if (node.val === x) {
            xDepth = depth
            xParent = parent
        }
        if (node.val === y) {
            yDepth = depth
            yParent = parent
        }
        travel(node.left, depth + 1, node)
        travel(node.right, depth + 1, node)
    }
    travel(root)
    return xDepth && yDepth && xDepth === yDepth && xParent !== yParent
};
