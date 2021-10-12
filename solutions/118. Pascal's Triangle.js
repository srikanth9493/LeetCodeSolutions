/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let res=[]
    for(let i=1;i<=numRows;i++){
        let num=1
        let deno=1
        let col=[1]
        for(let j=2;j<=i;j++){
            num=num*(i-(j-1))
            deno=deno*(j-1)
            col.push(num/deno)
            
        }
        res.push(col)
    }
    
   return res
};
