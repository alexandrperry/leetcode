var maxSubArray = function(nums) {
    let sum
    let maxVal = nums[0]
    for(let i = 0;i < nums.length;i++){
      sum = nums[i]
      for(let j = i + 1; j < nums.length;j++){
        sum += nums[j]
        if(nums[j] > maxVal) maxVal = nums[j]
        if(sum > maxVal) maxVal = sum
      }
    }
    return maxVal
};
