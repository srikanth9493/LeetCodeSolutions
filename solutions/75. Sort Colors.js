/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
        let N=arr.length
        let start=0,end=N-1,mid=0;
        while(mid<=end){
            if(arr[mid]==0){
                swap(arr,start,mid)
                start+=1;
                mid+=1 
            }
            else if(arr[mid]==2){
                swap(arr,mid,end)
                end-=1
            }
            else if(arr[mid]==1){
                mid+=1
            }
               
        }
    
    function  swap(arr,a,b){
         let temp=arr[a]
         arr[a]=arr[b]
         arr[b]=temp
         
    }
    
};
