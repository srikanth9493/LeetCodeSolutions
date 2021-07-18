var reverseKGroup = function(head, k) {
​
    let len=0;
    let temp=head
    while(temp){
        temp=temp.next
        len++
    } 
    if(len<k) return head
        let curr=head
        let next=null
        let prev=null
        let i=0
        while(curr && i<k){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
            i++
        } 
        if(next)
              head.next=reverseKGroup(next,k)
    
        return prev
    
​
    
};
