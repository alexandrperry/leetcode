/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
    
    while(fast?.next?.next){
        slow = slow.next;
        fast = fast.next.next
          
        if(slow === fast){
            return getCycleStartPosition(head,fast)
        }
        
    }
    

    return null
};

const getCycleStartPosition = (head,intersectionPointer) => {
    let pointer1 = head
    let pointer2 = intersectionPointer
    
    while(pointer1 !== pointer2){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next
    }
    
    return pointer1
}
