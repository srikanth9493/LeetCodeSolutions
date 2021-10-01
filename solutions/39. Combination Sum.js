/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res=[]
    let temp=[]
    let len=candidates.length-1
    
    getCombinations(candidates,target,0,res,temp)
    return res
    function getCombinations(candidates,target,index,res,temp){
        if(target==0){
            res.push([...temp])
            return
        }
        
        if(target<0)
            return 
        
        for(let i=index;i<candidates.length;i++){
            temp.push(candidates[i])
            getCombinations(candidates,target-candidates[i],i,res,temp)
            temp.pop()
        }
      
        
    }
    
};
