/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(price) {
    
    let max=0
    let max_profit=0;
    let min=1000000
    for(let i=0;i<price.length;i++){
        
       max=Math.max(max,price[i])
       min=Math.min(min,price[i])
       if(price[i]<max){
           max=price[i]
       }
        
       max_profit=Math.max(max_profit,max-min)
        
        
    }
    
    return max_profit;
​
    
};
