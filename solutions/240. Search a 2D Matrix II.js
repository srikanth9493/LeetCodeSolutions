/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let top=0;
    let right=matrix[0].length-1
    let rlen=matrix.length-1
    let clen=matrix[0].length-1
    
    while(top<=rlen && right>=0){
        
        // console.log(matrix[top][right],top,right)
        if(target==matrix[top][right]){
            return true
        }
        if(target<matrix[top][right]){
            right--
        }
        else{
            top++
        }
        
    }
    
    return false
    
};
