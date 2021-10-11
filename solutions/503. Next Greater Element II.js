/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    
    let stack=[]
    let n=nums.length-1
    let res=new Array(n+1).fill(-1)
    for(let i=n;i>=0;i--){
        stack.push(nums[i])
    }
    
    for(let i=n;i>=0;i--){
        
        while(stack.length!=0 && stack[stack.length-1]<=nums[i]){
             stack.pop()
        }
        
        if(stack.length!=0){
            res[i]=stack[stack.length-1]
        }
        stack.push(nums[i])
         
    }
 return res;
    
    
    
};
