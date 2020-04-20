//recursive
class Solution:
  def rotate(self, nums: List[int], k: int) -> None:
    if(k is not 0):
      lastVal = nums.pop()
      nums.insert(0,lastVal)
      self.rotate(nums,k-1)
    else:
      return nums
      
      
 //n*k
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
      if(k is not 0):
        for num in range(k):
          val = nums.pop()
          nums.insert(0,val)
      else:
        return nums

// n
class Solution:
  def rotate(self, nums: List[int], k: int) -> None:
    n = len(nums)
    a = [0] * n
    for i in range(n):
        a[(i + k) % n] = nums[i]
    nums[:] = a
        
        
