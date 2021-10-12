/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let isRow=false
    for(let row=0;row<matrix.length;row++){
        if(matrix[row][0]==0){
            isRow=true
        }
    }
    
    let isCol=false
    for(let col=0;col<matrix[0].length;col++){
        
        if(matrix[0][col]==0){
            isCol=true
        }
    }
    
    // console.log(col,row,'col')
    
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                matrix[0][j]=0;
                matrix[i][0]=0
             
            }
        }
    }
    
    for(let row=1;row<matrix.length;row++){
            if(matrix[row][0]==0){
