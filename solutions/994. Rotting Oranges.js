/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let total=0;
    let rotten=0;
    let minutes=0
    let queue=[]
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]!=0){
                total+=1
            }
            if(grid[i][j]==2){
                queue.push([i,j])
            }
        }
    }
    
    let dx=[0,0,1,-1]
    let dy=[1,-1,0,0]
    
    while(queue.length){
        let k=queue.length
        // console.log(k)
        rotten+=k
        
        while(k>0){
              // console.log(queue)
            let [x,y]=queue.shift()
          
            for(let i=0;i<dx.length;i++){
                let nx=x+dx[i],ny=y+dy[i]
                if(nx>=0 && ny>=0 && nx<=grid.length-1 && ny<=grid[0].length-1 && (grid[nx][ny]!=0 && grid[nx][ny]!=2)){
                    grid[nx][ny]=2
                    queue.push([nx,ny])
                     
                }
            }
            
            k-=1
        }
        
        if(queue.length) minutes++
        
    }
    
    return rotten==total?minutes:-1;
​
};
