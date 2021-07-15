var numDecodings = function(s) {
    
    let MOD=1000000007
    
    let dp=new Array(s.length+1).fill(0)
    if(s.charAt(0)=='0')
            return 0
    dp[0]=1
    dp[1]=s.charAt(0)=='*'?9:1;
    for(let i=2;i<=s.length;i++){
        let curr=s.charAt(i-1);
        let prev=s.charAt(i-2)
        if(curr=='*'){ 
            dp[i]=(dp[i]+(9*dp[i-1])%MOD)%MOD
        }
        else if(curr!='0'){
            dp[i]=(dp[i]+dp[i-1])%MOD
        }
        
        if(prev=='*'){
            if(curr=='*'){
                   dp[i]=(dp[i]+(15*dp[i-2]) %MOD) %MOD
            }
            else if(curr<='6'){
                dp[i]=(dp[i]+(2*dp[i-2])%MOD)%MOD
                       
            }
            else{
                dp[i]=(dp[i]+dp[i-2])%MOD
            }
            
        }
        else if (prev=='1'){
            if(curr=='*'){
                dp[i]=(dp[i]+(9*dp[i-2])%MOD)%MOD
            }
            else{
                dp[i]=(dp[i]+dp[i-2])%MOD
            }
        }
        else if(prev=='2'){
            if(curr=='*')
                dp[i]=(dp[i]+(6*dp[i-2])%MOD)%MOD
            else if (curr<='6'){
                dp[i]=(dp[i]+dp[i-2])%MOD
            }
        }
        
        
        
        
    }
    console.log(dp)
    return dp[dp.length-1]

    

}
