/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, start, end) {
    if(start === end){
      return head;
    }
  
    let dummyHead = new ListNode(-1, head)
  
    let nodeBeforeSublist = dummyHead
    let position = 1;
  
    while(position<start){
      nodeBeforeSublist = nodeBeforeSublist.next;
      position++
    }
  
    let sublistNode = nodeBeforeSublist.next
    
    while(start < end){
      let tempNode = sublistNode.next;
      sublistNode.next = tempNode.next;
      
      tempNode.next  = nodeBeforeSublist.next;
      nodeBeforeSublist.next = tempNode
      
      start++
    }
  
    return dummyHead.next
};
