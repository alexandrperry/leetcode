class Solution:
  def majorityElement(self, nums):
    counts = collections.Counter(nums)
    return max(counts.keys(),key=counts.get)
      


/**
 * @param {number[]} nums
 * @return {number}
 */
//Boyer–Moore majority vote algorithm
var majorityElement = function(nums) {
    let candidate = nums[0];
    let counter = 1;
    
    for (let i = 1; i < nums.length; i++){
        if(counter === 0){
            candidate = nums[i]
        }
        if(candidate === nums[i]){
            counter++
        }else{
            counter--
        }
    }
    
    return candidate
};
        
