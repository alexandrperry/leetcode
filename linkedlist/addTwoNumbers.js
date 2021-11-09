/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    
    const fakeNode = new ListNode(0)
    
    let pointer1 = l1;
    let pointer2 = l2;
    
    let sumPointer = fakeNode
    
    while(pointer1 || pointer2){
        let sum = carry + (pointer1?.val || 0) + (pointer2?.val || 0)
        console.log('sum',sum)
        carry = Math.floor(sum/10)
        sumPointer.next = new ListNode(sum%10)
        sumPointer = sumPointer.next
        
        if(pointer1){
            pointer1 = pointer1.next
        }
        
        if(pointer2){
            pointer2 = pointer2.next
        }
    }
    
    if(carry>0){
        sumPointer.next = new ListNode(carry)
    }
    
    
    return fakeNode.next
};
