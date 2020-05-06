# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        fastPointer = slowPointer = head
        while(fastPointer and fastPointer.next):
          fastPointer = fastPointer.next.next
          slowPointer = slowPointer.next
        return slowPointer
