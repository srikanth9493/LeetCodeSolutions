/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    if(!head || !head.next ||k==0 )
         return head
    let len=1
    let curr=head
    
    while(curr.next!=null){
        curr=curr.next
        len+=1
    }
    k=k%len
    if(k%len==0)
        return head
    
    let i=1
    curr=head
    while(i<len-k){
        curr=curr.next
        i+=1
    }
    let newhead=curr.next;
    let newheadcopy=curr.next
  
    curr.next=null; 
    while(newheadcopy.next!=null){
        newheadcopy=newheadcopy.next
    }
    newheadcopy.next=head;
    return newhead
    
    
    
    
    
};
