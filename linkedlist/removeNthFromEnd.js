/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head){
    return head
  }

  let node = new ListNode(0,head);
  let right = node.next;
  
  while(n > 0){
    right = right.next
    n--
  }
  
  let left = node;
  
  while(right){
    left = left.next;
    right = right.next
  }
  
  left.next = left.next.next;
  
  return node.next
};


