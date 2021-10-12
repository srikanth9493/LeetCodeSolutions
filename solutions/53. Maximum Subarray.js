/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let maxUntill=nums[0]
    let max=nums[0]
    
    for(let i=1;i<nums.length;i++){
        maxUntill=Math.max(nums[i],maxUntill+nums[i])
        max=Math.max(max,maxUntill)
        // console.log(maxUntill,max)
    }
    return max
    
};
