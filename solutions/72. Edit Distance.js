/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let row=word1.length+1
    let col=word2.length+1
    let table=new Array(row).fill(0).map(()=>new Array(col).fill(0))
    
    for(let i=0;i<=word1.length;i+=1){
        for(let j=0;j<=word2.length;j+=1){
            if(j==0)
                table[i][j]=i
            else if(i==0){
                table[i][j]=j;
            }
            else if(word1[i-1]==word2[j-1]){
                table[i][j]=table[i-1][j-1]
            }
            else{
                 table[i][j]=1+Math.min(table[i-1][j],table[i][j-1],table[i-1][j-1])
            }
        }
    }
    return table[row-1][col-1]
    
};
