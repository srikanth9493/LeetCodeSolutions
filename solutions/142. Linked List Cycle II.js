/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
​
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let table=new Set();
        
        let current=head;
        let index=0
        table.add(current)
        // console.log(head)
        while(current!=null){
            current=current.next;
            
            // console.log(current)
            if(table.has(current))
                return current
            table.add(current)
            index++
            
        }
        return null
    
    
};
