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
    while(fast && fast.next!=null){
        fast=fast.next.next
        slow=slow.next
        
    }
    
    return slow;
};
