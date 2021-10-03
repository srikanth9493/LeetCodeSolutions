/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    
    if(nums1.length>nums2.length){
        let temp=nums1
        nums1=nums2
        nums2=temp
    }
    
    let m=nums1.length
    let n=nums2.length
    let low=0
    let high=m
    
    while(low<=high){
        
        let cut1=(low+high)>>1
        let cut2=Math.floor((m+n+1)/2)-cut1
        
        let l1=cut1==0?Number.MIN_SAFE_INTEGER:nums1[cut1-1]
        let r1=cut1==m?Number.MAX_SAFE_INTEGER:nums1[cut1]
        
        let l2=cut2==0?Number.MIN_SAFE_INTEGER:nums2[cut2-1]
        let r2=cut2==n?Number.MAX_SAFE_INTEGER:nums2[cut2]
        
        
        if(l1<=r2 && l2<=r1){
            // console.log((m+n)%2)
            if((m+n)%2==1){
            
                 return Math.max(l1,l2)
            }
            else{
                return (Math.max(l1,l2)+Math.min(r1,r2))/2
            }
        }
        else  if(l1>r2){
            high=cut1-1
        }
        else{
            low=cut1+1
        }
     
    }
       return 0.0
    
    
    
    
    
    
    
    
};
