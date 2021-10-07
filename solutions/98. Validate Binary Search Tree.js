/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root,minvalue=null,maxvalue=null) {
    
    if(!root) return true
    if(minvalue && root.val<=minvalue.val) return false
    if(maxvalue && root.val>=maxvalue.val) return false  
    let left= isValidBST(root.left,minvalue,root)
    let right=isValidBST(root.right,root,maxvalue)
    return left && right
    
};
