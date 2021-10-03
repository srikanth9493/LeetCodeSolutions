/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    
    let start=0;
    let end=nums.length-2
    
    while(start<=end){
        
        let mid=Math.floor((start+end)/2)
        // console.log(mid)
        if(nums[mid]==nums[mid^1]){
            start=mid+1
        }
        else{
            end=mid-1
        }
     
   
    }
    
    return nums[start]
    
};
​
