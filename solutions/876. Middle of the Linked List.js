​
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow=head
    let fast=head
    let index=1
    let prev
    while(fast!=null){
        fast=fast.next
        if(fast!=null){
                slow=slow.next
                fast=fast.next
        }     
    }
    
    return slow;
};
