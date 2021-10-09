/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  
    let row=image.length
    let col=image[0].length
    let curr_color=image[sr][sc]
    console.log(sr,sc,newColor)
    if(newColor==curr_color)
            return image
    DFS(image,sr,sc,row,col,newColor)
    
    return image;
    // console.log(image)
    
    function DFS(image,i,j,row,col,newColor){
        // console.log(i,j)
        if(i>=0 && j>=0 && i<row && j<col && image[i][j]==curr_color ){
            
            // console.log(i,j)
        
            image[i][j]=newColor
             DFS(image,i,j+1,row,col,newColor)
             DFS(image,i-1,j,row,col,newColor) 
             DFS(image,i,j-1,row,col,newColor)
             DFS(image,i+1,j,row,col,newColor)
             // DFS(image,i-1,j-1,row,col,newColor)
             // DFS(image,i+1,j+1,row,col,newColor)
             // DFS(image,i-1,j+1,row,col,newColor)
             // DFS(image,i+1,j-1,row,col,newColor)
        }
    }
    
    
};
