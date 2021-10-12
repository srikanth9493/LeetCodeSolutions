/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
           
                if(i<j){ 
                    let temp=matrix[i][j]
                     matrix[i][j]=matrix[j][i]
                    matrix[j][i]=temp;
                    console.log(matrix[i][j],matrix[j][i])
                }
            
        }
    }
    
    // console.table(matrix)
    for(let row=0;row<matrix.length;row++){
    
       let colstart=0,colend=matrix[0].length-1;
        while(colstart<colend){
            let temp=matrix[row][colstart]
            matrix[row][colstart]=matrix[row][colend]
            matrix[row][colend]=temp
            colstart+=1
            colend-=1
        }
        
    }
    
};
