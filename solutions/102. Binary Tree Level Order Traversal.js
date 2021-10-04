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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    
    if(!root)
        return []
    
    let queue=[]
    queue.push(root)
    queue.push(-1)
    let container=[]
    let res=[]
    while(queue.length>1){
        let curr=queue.shift()
        if(curr==-1){    
            queue.push(-1)   
            res.push([...container])
            container=[]
        }
        else{
​
        container.push(curr.val)
        if(curr.left){
            queue.push(curr.left) 
        }
        
        if(curr.right)
            queue.push(curr.right)
        }
             
    }
     res.push([...container])
     container=[]
    return res
    
};
