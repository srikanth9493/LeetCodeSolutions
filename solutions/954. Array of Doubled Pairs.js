/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    
    let table=new Map();
    arr.sort((a,b)=>a-b)
    arr.forEach(item=>{
      if(table.has(item)){
        table.set(item,table.get(item)+1)
      }
      else{
              table.set(item,1)   
        }
    })
    
    for(let item of arr){
        
         if(!table.has(item)){
             
         }
        else{
            let pair=item>=0?item*2:item/2
         
            if(!table.has(pair))
                 return false
             console.log(pair)
            for(let i of [item,pair]){
                table.set(i,table.get(i)-1)
                if(table.get(i)==0){
                    table.delete(i)
                }
​
            }
        }
    
        
    }
    
 return true
    
};
