class Solution:
  def getIntersectionNode(self, headA, headB):
    if headA == None or headB == None:
      return None

    firstPointer = headA
    secondPointer = headB
    
    while firstPointer != secondPointer:
      if(firstPointer is None and secondPointer is None ):
        return None
      firstPointer = headB if firstPointer is None else firstPointer.next
      secondPointer = headA if secondPointer is None else secondPointer.next
        
    return firstPointer