/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    const result = []
    
    for (let i = nums.length -1; i>=0; i--){
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    
    return result
};
