class Solution:
  def moveZeroes(self, nums: List[int]) -> None:
    zeroLen = 0
    i = 0
    while(i < len(nums)):
      if(nums[i] is 0):
        del nums[i]
        zeroLen += 1
        i -= 1
      i +=1
    for zero in range(zeroLen):
      nums.append(0)
    return nums
