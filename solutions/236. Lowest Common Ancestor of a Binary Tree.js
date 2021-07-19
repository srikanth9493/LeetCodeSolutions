/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, n1, n2) {
    
        if(!root) return null
        if(root==n1 || root==n2) return root
        let left=lowestCommonAncestor(root.left,n1,n2)
        let right=lowestCommonAncestor(root.right,n1,n2)
        if(left&& right) return root
        return left?left:right;
    
    
​
         
};
