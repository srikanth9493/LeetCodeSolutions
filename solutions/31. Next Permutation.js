/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length==1)
        return nums
    
    let end=nums.length-2
    let last=nums.length-1
    while(nums[end]>=nums[end+1] && end>=0){
      end--;
    }
    
    if(end==-1){
        let start=0;
        let end=nums.length-1
        while(start<end){
            let temp=nums[start]
            nums[start]=nums[end]
            nums[end]=temp;
            start++
            end--
          
        }
          console.log("in asencding")
        
        return nums;
        
    }
        
    
    console.log(nums,'after')
    
