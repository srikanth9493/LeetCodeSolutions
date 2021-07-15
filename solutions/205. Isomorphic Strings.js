/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!=t.length)
        return false;
    let map1={}
    let map2={}
    
    for(let i=0;i<s.length;i++){
        let ch1=s.charAt(i)
        let ch2=t.charAt(i)
        // console.log(ch1,ch2)
        if(map1[ch1]){
            // console.log(map1[ch1])
                if(map1[ch1]!=ch2)
                     return false
        }
        else{
            if(map2[ch2])
                return false;   
            map1[ch1]=ch2
            map2[ch2]=true
        }
    }
  
    
    return true
};
