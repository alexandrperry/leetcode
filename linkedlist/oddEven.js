
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  if (head == null || head.next == null) {
    return head;
  }

  const oddDummy = new ListNode(-1);
  const evenDummy = new ListNode(-1);

  let oddTail = oddDummy;
  let evenTail = evenDummy;

  let index = 0;
  let curr = head;
  while (curr != null) {
    if (index % 2 == 0) {
      evenTail.next = curr;
      evenTail = curr;
    } else {
      oddTail.next = curr;
      oddTail = curr;
    }

    curr = curr.next;
    index++;
  }

  oddTail.next = null;
  evenTail.next = oddDummy.next;
 

  return evenDummy.next;
}
