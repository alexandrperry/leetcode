/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Greedy
var canJump = function(nums) {
    let lastGoodIndex = nums.length - 1;
    
    for (let i = nums.length - 1; i>=0; i--){
        if(i + nums[i] >= lastGoodIndex){
            lastGoodIndex = i
        }
    }
    
    return lastGoodIndex === 0
};
