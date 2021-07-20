var largestRectangleArea = function(heights) {
    let l=heights.length
    let max_area=0 
    let left=new Array(l)
    let right=new Array(l) 
    let stack=[]
    stack.push(0)
    left[0]=0
    for(let i=1;i<l;i++){     
        while(stack.length>0 && heights[stack[stack.length-1]]>=heights[i])
                        stack.pop()
        
        if(stack.length==0)
            left[i]=0
        else{
            left[i]=stack[stack.length-1]+1
        }
        stack.push(i)
    }
    stack=[]
    stack.push(heights.length-1)
    right[l-1]=l-1
    for(let i=l-2;i>=0;i--){
        
        while(stack.length>0 && heights[stack[stack.length-1]]>=heights[i])
                        stack.pop()
        
        if(stack.length==0)
            right[i]=heights.length-1
        else{
            right[i]=stack[stack.length-1]-1
        }
        stack.push(i)
    }
    for(let i=0;i<l;i++){
        let area=(right[i]-left[i]+1)*heights[i]
        max_area=Math.max(max_area,area)
    }
    
    return max_area
    
};
