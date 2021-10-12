/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit=0
    let min=Number.MAX_VALUE
   
    for(let i=0;i<prices.length;i++){
       min=Math.min(prices[i],min)
        profit=Math.max(profit,prices[i]-min)
        
    }
    
    return profit;
​
    
};
