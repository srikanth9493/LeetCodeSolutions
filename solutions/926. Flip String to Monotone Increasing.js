/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let totalones=0
    for(let i of s){
        if(i=='1')
             totalones++
        }
    
    let onesTochange=0
    let zerosTochange=0
   
    let len=s.length
    let min=Math.min(totalones,len-totalones)
    for(let i=0;i<s.length;i++){
        if(s[i]=='1'){
            onesTochange++       
        }
        let noOfzeros=(totalones-onesTochange)
        zerosTochange=(len-i-1)-noOfzeros
        
        min=Math.min(min,onesTochange+zerosTochange)
      
    }
​
    return min
};
