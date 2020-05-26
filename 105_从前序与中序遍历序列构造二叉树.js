/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    const root = new TreeNode(preorder.shift())
    let head = root
    const buildNode = (head, inorder) => {
        const idx = inorder.indexOf(head.val)
        const left = inorder.slice(0, idx)
        const right = inorder.slice(idx + 1)
        if (left.length) {
            head.left = new TreeNode(preorder.shift())
            buildNode(head.left, left)
        }
        if (right.length) {
            head.right = new TreeNode(preorder.shift())
            buildNode(head.right, right)
        }
    }
    buildNode(head, inorder)
    return root
};
