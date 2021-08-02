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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(!root) return null
   root.left= pruneTree(root.left)
   root.right= pruneTree(root.right)
   // console.log(root.val,left,right)
   if(root.left==null && root.right==null && root.val==0) return null
            
    return root
    
};
