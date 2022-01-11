/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null || head.next == null){
      return head;
    }
  
    let firstPointer = head;
    let secondPointer = head.next;
  
    let startOfNextSegment = null;
  
    head = head.next;
  
    while(true){
      startOfNextSegment = secondPointer.next;
      secondPointer.next = firstPointer
      if(startOfNextSegment == null || startOfNextSegment.next == null){
        firstPointer.next = startOfNextSegment
        return head;
      }
      
      firstPointer.next = startOfNextSegment.next;
      
      firstPointer = startOfNextSegment;
      secondPointer = startOfNextSegment.next;
    }
};
