/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
    let row=coins.length+1
    let col=amount+1
    let table=new Array(row).fill(0).map(()=>new Array(col).fill(0))
 
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(j==0){
                table[i][j]=1
            }
            else if(i==0){
                table[i][j]=0
            }
            else if(j>=coins[i-1]){
                table[i][j]=table[i][j-coins[i-1]]+table[i-1][j]
            }
            else{
                table[i][j]=table[i-1][j]
            }
        }
    }
    
    console.log(table)
   return table[row-1][col-1]
    
};
