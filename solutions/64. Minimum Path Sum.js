/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let row=grid.length
    let col=grid[0].length
    
    // let dp=new Array(row).fill(0).map(()=>new Array(col).fill(0))
    for(let col=1;col<grid[0].length;col++){
        grid[0][col]+=grid[0][col-1]
    }
    
     for(let row=1;row<grid.length;row++){
        grid[row][0]+=grid[row-1][0]
    }
    
    for(let i=1;i<row;i++){
        for(let j=1;j<col;j++){
            grid[i][j]=grid[i][j]+Math.max(grid[i-1][j],grid[i][j-1])
        }
    }
    return grid[row-1][col-1]
    
    
};
