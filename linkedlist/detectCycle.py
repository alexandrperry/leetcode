# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def hasCycle(self, head):
    if(head is None or head.next is None):
      return False
    firstPointer = head
    secondPointer = head.next
    while(firstPointer != secondPointer):
      if(secondPointer is None or secondPointer.next is None):
        return False
      firstPointer = firstPointer.next
      secondPointer = secondPointer.next.next
    return True
        