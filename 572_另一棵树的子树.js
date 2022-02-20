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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const isSameTree = (root1, root2) => {
        if (root1 && root2 && root1.val === root2.val) {
            return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
        } else if (!root1 && !root2) {
            return true
        } else {
            return false
        }
    }
    const travel = node => {
        if (!node) return false

        return travel(node.left) || travel(node.right) || isSameTree(node, subRoot)
    }

    return travel(root)
};
