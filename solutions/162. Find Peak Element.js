/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    nums.push(Number.MIN_SAFE_INTEGER)
    if(nums.length==1)
        return 0
    if(nums.length==2){
         if(nums[1]>nums[0])
             return 1
         else
             return 0;
        
    }
          
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1] && nums[i]>nums[i+1])
            return i
    }
    return 0
};
