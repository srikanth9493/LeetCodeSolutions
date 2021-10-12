​
var MinStack = function() {
        this.stack=[]
        this.minstack=[]
};
​
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    this.stack.push(val)
    let lastinstack=this.stack[this.stack.length-1]
    let lastinmin=this.minstack[this.minstack.length-1]
    if(lastinstack<=lastinmin || this.minstack.length==0){
        this.minstack.push(val)     
    } 
};
​
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    console.log(this.stack)
    if(this.stack.length){
        let lastinstack=this.stack[this.stack.length-1]
        let lastinmin=this.minstack[this.minstack.length-1]
        if(lastinstack==lastinmin)
            this.minstack.pop()
        
       return  this.stack.pop()
    }
    
