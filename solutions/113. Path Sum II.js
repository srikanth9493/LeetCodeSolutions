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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let paths=[]
    getPaths(root,targetSum,[])
    
    
    
    function getPaths(root,tsum,curr){
        if(!root) return 
        curr.push(root.val)
        if(root.val==tsum && !root.left && !root.right){
            paths.push(curr)
            return
        }        
        getPaths(root.left,tsum-root.val,[...curr])
        getPaths(root.right,tsum-root.val,[...curr])    
    }
    
    return paths
    
    
};
