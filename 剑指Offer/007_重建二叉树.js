/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    const node = new TreeNode(preorder.shift())
    const index = inorder.indexOf(node.val)
    const leftInorder = inorder.slice(0, index)
    const leftPreorder = preorder.slice(0, leftInorder.length)
    const rightInorder = inorder.slice(index + 1)
    const rightPreorder = preorder.slice(leftInorder.length)
    node.left = buildTree(leftPreorder, leftInorder)
    node.right = buildTree(rightPreorder, rightInorder)
    return node
};
