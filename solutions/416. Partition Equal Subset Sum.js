/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sum=nums.reduce((a,b)=>a+b,0)
    console.log(sum)
    if(sum%2!=0)
        return false
    
   
    let row= nums.length+1
    let col=Math.floor(sum/2)+1
    
    let table=new Array(row).fill(0).map(()=>new Array(col).fill(0))
