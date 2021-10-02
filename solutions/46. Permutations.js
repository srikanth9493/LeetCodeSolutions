/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[]
    getPermutations(nums,0)
    
    return res;
    
    function getPermutations(arr,index){
        
        
        if(index==arr.length){
            console.log(index,arr.length,'index','i')
            res.push([...arr])
            return 
        }
        
        
        for(let i=index;i<arr.length;i++){
        console.log(index,i,'index','i')
            
          swap(i,index,arr)
            getPermutations(arr,index+1)
         swap(i,index,arr)
          
        }
    }
    
   function  swap(i,j,arr){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
