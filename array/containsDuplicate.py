class Solution:
  def containsDuplicate(self, nums):
      if(len(nums) == 0):
        return False
      else:
        sortValues = sorted(list(collections.Counter(nums).values()), reverse=True)
        if(sortValues[0]> 1):
          return True
        else:
          return False
