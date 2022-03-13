/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const travel = (node, leafs = []) => {
        if (!node) return false
        if (!node.left && !node.right) {
            leafs.push(node.val)
        } else {
            travel(node.left, leafs)
            travel(node.right, leafs)
        }
        return leafs
    }
    const leafs1 = travel(root1)
    const leafs2 = travel(root2)
    console.log(leafs1, leafs2)
    return leafs1.join(',') === leafs2.join(',')
};
