from collections import Counter
class Solution:
    def firstUniqChar(self, s: str) -> int:
      hashTable = Counter(s)
      for idx in range(len(s)):
        if(hashTable[s[idx]] == 1):
          return idx
      return -1
        
