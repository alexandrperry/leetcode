from collections import Counter
class Solution:
  def isAnagram(self, s, t):
    firstArr = sorted(list(Counter(s).elements()))
    secondArr = sorted(list(Counter(t).elements()))
    if(len(firstArr) != len(secondArr)):
      return False
    for i in range(len(firstArr)):
      if(firstArr[i] != secondArr[i]):
        return False
    return True
      
        