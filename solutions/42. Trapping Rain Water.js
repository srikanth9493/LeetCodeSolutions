/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let n=height.length
    
    let min_array=new Array(n)
    let maxi=new Array(n)
    min_array[0]=height[0]
    for(let i=1;i<n;i++)
         min_array[i]=Math.max(height[i],min_array[i-1])
    let max=new Array(n)
    maxi[n-1]=height[n-1]
    for(let i=n-2;i>=0;i--){
        maxi[i]=Math.max(height[i],maxi[i+1])
    }
    let ans=0
    for(let i=1;i<n-1;i++){
        ans+=Math.min(min_array[i],maxi[i])-height[i]
    }
​
   return ans
        
};
