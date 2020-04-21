from collections import defaultdict
class Solution:
  def singleNumber(self, nums):
    hashtable = defaultdict(int)
    for num in nums:
      hashtable[num] += 1
    for num in hashtable:
      if hashtable[num] == 1:
        return num