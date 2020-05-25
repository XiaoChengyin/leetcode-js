/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return []
    let left = binaryTreePaths(root.left)
    let right = binaryTreePaths(root.right)
    if (!left.length && !right.length) return [root.val.toString()]
    return left.concat(right).map(chain => {
        let res = chain.split('->')
        res.unshift(root.val.toString())
        return res.join('->')
    })
};
