/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let dict=new Map()
    dict.set(')','(')
     dict.set('}','{')
     dict.set(']','[')
    console.log(dict)
    let stack=new Array()
    for(let char of s){
        if(char==']' ||char=='}' || char==')'){
            let curr=char
            let pair=stack.pop()
            if(pair!=dict.get(curr))
                return false
        }
        else{
            stack.push(char)
        }
    }
      
    if(stack.length==0)
        return true
    return false
    
    
};
