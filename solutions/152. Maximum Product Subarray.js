/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let maxUntillnow=nums[0]
    let minUntillnow=nums[0]
    let max=nums[0]
    
    for(let i=1;i<nums.length;i++){
        if(nums[i]<0){
            let temp=maxUntillnow
            maxUntillnow=minUntillnow
            minUntillnow=temp;
        }
        
        maxUntillnow=Math.max(nums[i]*maxUntillnow,nums[i])
        minUntillnow=Math.min(nums[i]*minUntillnow,nums[i])
        max=Math.max(maxUntillnow,max)
        
        console.log(maxUntillnow,minUntillnow)
    }
    return max;
};
