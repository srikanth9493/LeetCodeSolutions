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
var diameterOfBinaryTree = function(root) {
    
    var findLarge=(root,ans)=>{     
          if(!root) return 0;
         let left= findLarge(root.left,ans)
         let right=findLarge(root.right,ans)
        
         ans[0]=Math.max(ans[0],1+left+right)
         return 1+Math.max(left,right)
    }
​
    let ans=[Number.MIN_SAFE_INTEGER]
        findLarge(root,ans)
        return ans[0]-1  
};
​
​
