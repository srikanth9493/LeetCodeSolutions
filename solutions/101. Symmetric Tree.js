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
var isSymmetric = function(root) {
    
   let res=check(root.left,root.right)
   return res
    function check(leftr,rightr){
        if(!leftr || !rightr) return leftr==rightr 
        if(leftr.val!=rightr.val) return false
        let l= check(leftr.left,rightr.right)
        let r=check(leftr.right,rightr.left)
        return l&&r
    }
    
};
