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
var isSymmetric = function(root) {
    let isSame = (p, q) => {
        if(!p && !q) return true
        if(!p || !q) return false
        if(p.val === q.val){
            return isSame(p.left, q.right) && isSame(p.right, q.left)
        } else {
            return false
        }
    }
    if(!root) return true
    if(!root.left && !root.right) return true
    if(root.left && root.right){
        return isSame(root.left, root.right)
    } else {
        return false
    }
};
