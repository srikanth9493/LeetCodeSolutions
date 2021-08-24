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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    
​
        let set=new Set();
        let res=isPresent(root,k)
        return res
        function isPresent(root,k){
    
           if(!root) return false  
           if(set.has(k-root.val))  return true  
            set.add(root.val)
            let left =isPresent(root.left,k)
        
            let right=isPresent(root.right,k)
            
            return left||right
        }
    
    
};
