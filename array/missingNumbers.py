class Solution:
  def missingNumber(self, nums: List[int]) -> int:
    seqOfNum = range(len(nums)+1)
    for genNum in seqOfNum:
      if genNum not in nums:
        return genNum
        
 class Solution:
  def missingNumber(self, nums):
    numSet = set(nums)
    for num in range(len(nums)+1):
      if num not in numSet:
        return num
