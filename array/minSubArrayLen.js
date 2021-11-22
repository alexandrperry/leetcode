/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let sum = 0;
    let start = 0;
    let end = 0;
    
    while(start < nums.length){
        if(end > nums.length) break
        if(sum >= target){
            minLength = Math.min(minLength,end-start)
            sum -= nums[start]
            start++
        }
        else{
            sum += nums[end]
            end++
        }
    }
    
    return minLength === Infinity ? 0 : minLength
};
