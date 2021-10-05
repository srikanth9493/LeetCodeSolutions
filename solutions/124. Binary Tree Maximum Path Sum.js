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
 * @return {number}
 */
var maxPathSum = function(root) {
    
    let maxSum=Number.MIN_SAFE_INTEGER
    getMaxPathSum(root)
    return maxSum
    
    function getMaxPathSum(root){
        if(!root) return 0
         let l=getMaxPathSum(root.left)
         let r=getMaxPathSum(root.right)
         
         let val=Math.max(root.val+l,root.val+r,root.val,root.val)
         // console.log(val)
         maxSum=Math.max(maxSum,val,l+r+root.val)
         return val
   
    }
    
};
