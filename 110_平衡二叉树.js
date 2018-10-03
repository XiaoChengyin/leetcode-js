/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    let treeHeight = node => {
        if(!node) return 0
        let leftHeight = treeHeight(node.left)
        let rightHeight = treeHeight(node.right)
        if(leftHeight === -1 || rightHeight === -1) return -1
        if(Math.abs(leftHeight - rightHeight) > 1) return -1
        return Math.max(treeHeight(node.left), treeHeight(node.right)) + 1
    }
    if(!root) return true
    return treeHeight(root) === -1 ? false : true
    
};