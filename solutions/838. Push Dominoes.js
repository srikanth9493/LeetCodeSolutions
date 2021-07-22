var pushDominoes = function(dominoes) {
    let len=dominoes.length
    let right=new Array(dominoes.length).fill(-1)
    let left=new Array(dominoes.length).fill(-1)
    let ans=new Array(len)
    for(let i=0;i<len;i++){
          // console.log(i)
        if(dominoes[i]=='R'){
            let count=1
            while(dominoes[i]!='L' && i<len){
                
                right[i]=count
                count++
                i++
                if(dominoes[i]=='R'){
                    i--
                        break
                }
            }
        }
            
    }
    
    for(let i=len-1;i>=0;i--){
           if(dominoes[i]=='L'){
            let count=1
            while(dominoes[i]!='R' && i>=0){
                left[i]=count
                count++
                i--         
                 if(dominoes[i]=='L'){
                        i++
                        break
                 }
            }
             
        }
    }
​
    for(let i=0;i<len;i++){
        if(left[i]==-1 && right[i]==-1)
             ans[i]='.'
        else if(left[i]==-1 && right[i]!=-1 )
            ans[i]='R'
        else if(left[i]!=-1 && right[i]==-1 )
            ans[i]='L'
        else{
            if(left[i]>right[i])
                ans[i]='R'
            else if(right[i]>left[i]) {
                ans[i]='L'
            }
            else {
                ans[i]='.'
            }
        }
    }
    // console.log(ans)
   return ans.join("")
    
};
