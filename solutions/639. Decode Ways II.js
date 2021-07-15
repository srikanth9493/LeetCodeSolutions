        
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
​
    
​
}
