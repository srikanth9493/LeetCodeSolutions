/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let table=new Map();
    strs.forEach((str)=>{
        let key=str.split('').sort().join('');
           table.set(key,table.get(key)?[...table.get(key),str]:[str])
    })
    
    return [...table.values()]
    
};
