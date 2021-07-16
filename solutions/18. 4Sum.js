/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let count=0
    let list=[]
​
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        
        for(let j=i+1;j<nums.length;j++){
            
           let start=j+1,end=nums.length-1
           let s=target-(nums[i]+nums[j])
           while(start<end){
               if(nums[start]+nums[end]==s){
                   list.push([nums[i],nums[j],nums[start],nums[end]])
                   
                    let third = nums[start];
                    let fourth = nums[end];
                     while(start<end && nums[start]==third)
                        start++
                    while(start<end && nums[end]==fourth )
                        end--
                   
               }
               else if(nums[start]+nums[end]>s)
                   end--
               else
                   start++ 
           }
            
              while(j+1<nums.length-1 && nums[j+1]==nums[j])
                    j++;
                  
        } 
        
        while(i+1<nums.length-1 && nums[i+1]==nums[i])
                i++;
    }
    // console.log(list)
    return list;
   
    
};
