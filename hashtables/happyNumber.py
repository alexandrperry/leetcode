class Solution:
  def isHappy(self, n: int) -> bool:
    values = set()
    while n not in values:
        values.add(n)
        n = sum([int(x) **2 for x in str(n)])
    return n == 1