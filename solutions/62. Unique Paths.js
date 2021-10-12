/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let table=new Array(m).fill().map(()=>new Array(n).fill())
    
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i==0 || j==0){
                table[i][j]=1
            }
            else{
                table[i][j]=table[i-1][j]+table[i][j-1]
            }
                 
        }
        
    }
   return table[m-1][n-1]
};
