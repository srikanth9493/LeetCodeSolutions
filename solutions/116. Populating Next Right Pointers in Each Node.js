/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
​
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    
    connectNext(root,null)
    return root
    
    function connectNext(root,prev){
        if(!root) return 
        root.next=prev
        connectNext(root.right,prev!=null?prev.left:null)
        connectNext(root.left,root.right)
    }
    
};
​
​
​
