/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let table=new Map();
    nums.forEach((item,index)=>table.set(item,index))
    for(let i=0;i<nums.length;i++){
        let k=target-nums[i]
        if(table.has(k) && table.get(k)!=i){
            return [i,table.get(k)]
        }
    }
    
​
    
};
