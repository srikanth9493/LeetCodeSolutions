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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let count=0
    let res;
    getKth(root,k)
    return res
    
    
    function getKth(root,k){
        if(!root) return 
        getKth(root.left,k)
        count+=1
        if(count==k)
            res=root.val
        getKth(root.right,k)
        
    }
​
};
