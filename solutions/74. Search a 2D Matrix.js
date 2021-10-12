/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let right=matrix[0].length-1
    let top=0
    let n=matrix.length
    
    while(top<n && right>=0){
           if(matrix[top][right]==target)
               return 1
          if(target<matrix[top][right]){
               right-=1
            }
           else{
               top+=1
           }
    }
    
    return false
    
    
};
