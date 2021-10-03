/**https://leetcode.com/list
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left=0;
    let right=matrix[0].length-1
    let top=0;
    let bottom=matrix.length-1
    let res=[]
    while(left<=right && top <=bottom){
       
      
        for(let col=left;col<=right;col+=1){
                res.push(matrix[top][col])
        }
        top+=1
        
        
        for(let row=top;row<=bottom;row+=1){
            res.push(matrix[row][right])
        }
        right-=1
        
        if(top<=bottom){
        
        for(let col=right;col>=left;col-=1){
            res.push(matrix[bottom][col])
        }
        bottom-=1
        }
        
        if(left<=right){
        for(let row=bottom;row>=top;row-=1){
            res.push(matrix[row][left])
