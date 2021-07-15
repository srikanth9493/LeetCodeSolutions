/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function(order, str) {
    
    let set=new Set(order)
    // console.log(set)
    let table={}
    for(let i=0;i<str.length;i++){
        if(set.has(str[i])){
            // console.log(str[i])
            
            if(table[str[i]]){
                
                table[str[i]]+=1
            }
            else{
                    table[str[i]]=1
            }   
        }
        
    }
    let res=""
    for(let i of order){
        // console.log
        res+=i.repeat(table[i])
    }
    
    for(let i of str){
        if(!set.has(i))
            res=res+i
        
    }
    return res
    
    // console.log(table)
    // console.log(res)
};
