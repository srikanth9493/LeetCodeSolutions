var lengthOfLIS = function(nums) {
    
    let dp=new Array(nums.length).fill(1)
    let max=1
    for(let i=0;i<nums.length;i++){
        for (let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1)
            }
        }
    }
    
    console.log(dp,max)
    return Math.max(...dp)
   
    
    
};
