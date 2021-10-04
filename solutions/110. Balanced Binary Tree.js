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
var isBalanced = function(root) {
    
    let balance=true
    checkBalance(root)
    return balance
    
    function checkBalance(root){
        if(!root) return 0
        let left=checkBalance(root.left)
        let right=checkBalance(root.right)
        if(Math.abs(left-right)>1) {
            balance=false
        }
​
        return 1+Math.max(left,right)
    }
    
};
