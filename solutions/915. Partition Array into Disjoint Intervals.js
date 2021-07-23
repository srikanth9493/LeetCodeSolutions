/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    
    let max=new Array(nums.length)
    max[0]=nums[0]
    
    for(let i=1;i<nums.length;i++){
        max[i]=Math.max(max[i-1],nums[i])
    }
    
    let min=new Array(nums.length)
    min[nums.length-1]=nums[nums.length-1]
    
    for(let i=nums.length-2;i>=0;i--){
            min[i]=Math.min(min[i+1],nums[i])
    }
    
    for(let i=1;i<nums.length;i++){
        if(max[i-1]<=min[i])
                return i
    }
    console.log(max,min)
    
    
};
​
// var partitionDisjoint = function(nums) {
//     let currentMax = nums[0];
//     let disjointIndex = 0;
//     let max = currentMax;
    
//     for(let i = 1; i < nums.length; i++) {
//         max = Math.max(max, nums[i]);
//         if(nums[i] < currentMax) {
//             disjointIndex = i;
//             currentMax = max;
//         }
//     }
//     return disjointIndex + 1;
// };
​
​
