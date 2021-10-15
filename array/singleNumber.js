/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mask = 0
    nums.forEach(num => mask^= num)
        
    return mask
};
