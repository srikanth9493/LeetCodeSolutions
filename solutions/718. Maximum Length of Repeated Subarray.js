/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    
    let table=new Array(nums1.length+1).fill().map(x=>new Array(nums2.length+1))
    let max=0
    
    for(let i=0;i<=nums1.length;i++){
        for(let j=0;j<=nums2.length;j++){
            if(i==0||j==0)
                table[i][j]=0
            else if(nums1[i-1]==nums2[j-1]){
                table[i][j]=1+table[i-1][j-1]
                max=Math.max(max,table[i][j])
            }
            else{
                table[i][j]=0
            }
        }
    }
    // console.log(table)
    return max
    
};
