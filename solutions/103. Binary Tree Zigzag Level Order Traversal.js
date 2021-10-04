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
var zigzagLevelOrder = function(root) {
    if(!root)
        return []
    
    let queue=[]
    queue.push(root)
    queue.push(-1)
    let res=[]
    let container=[]
    let level=0
    while(queue.length>1){
        
        let curr=queue.shift()
        // console.log(queue,'cirr')
        if(curr==-1){
            
            // conosole.log(queue)
            queue.push(-1)
            if(level%2==0){
                res.push([...container])
            }
            else{
                res.push([...container.reverse()])
            }
            container=[]
            level+=1 
        }
        else{
