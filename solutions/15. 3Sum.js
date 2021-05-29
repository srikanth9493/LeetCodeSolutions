/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let tripplet=[]
    nums.sort((a,b)=>a-b)
    let i=0
    let last=nums.length-1
    while(i<last){
        let a=nums[i],j=i+1,k=last
        while(j<k){
            let b=nums[j],c=nums[k],sum=a+b+c
              if (sum == 0) {tripplet.push([a, b, c]);
      j++
      k--
                           while (nums[j]==b && j<k)j++
                              while(nums[k]==c && j<k)  k--
                             
                             
      }
            if(sum<0) while (nums[j]==b && j<k)j++
            if(sum>0) while(nums[k]==c && j<k)  k--
        }
        while(nums[i]==a && i<last) i++
    }
    
    return tripplet
​
};
