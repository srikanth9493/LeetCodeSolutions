var threeEqualParts = function(arr) {
     let sum=arr.reduce((a,b)=>a+b,0)
     if(sum==0)         return [0,arr.length-1]
     if(sum%3!=0)   return [-1,-1]  
    let noOfOnesEachPart=Math.ceil(sum/3)  
    let firstIndex=-1
    let secondIndex=-1
    let thirdIndex=-1
    let noOfOnes=0
     for(let i=0;i<arr.length;i++){
            if(arr[i]==1){
                 noOfOnes++
                if(noOfOnes==1)   firstIndex=i     
                else if(noOfOnes==noOfOnesEachPart+1)  secondIndex=i       
                else if(noOfOnes==2*noOfOnesEachPart+1) thirdIndex=i                        
            }
     }
    while(thirdIndex<arr.length){
        if((arr[firstIndex]==arr[secondIndex])&& (arr[secondIndex]==arr[thirdIndex])){
            firstIndex++;  secondIndex++       
        }
        else
            return [-1,-1]
        
        thirdIndex++
        
    } 
    return [firstIndex-1,secondIndex]    
};
