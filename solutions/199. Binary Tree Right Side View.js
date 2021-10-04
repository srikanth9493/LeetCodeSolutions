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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    let max_untill=-1
    let array=[]
    
    
    function getRightView(root,level,array){
        if(!root) return null
        if(max_untill<level){
            array.push(root.val)
            max_untill=level
        }
        getRightView(root.right,level+1,array)
       getRightView(root.left,level+1,array)
       
    }
    getRightView(root,0,array)
    return array
    
    
};
