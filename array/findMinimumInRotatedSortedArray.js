/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0
    let end = nums.length - 1;
    if(nums.length === 1){
        return nums[0]
    }
    if(nums[start]< nums[end]){
        return nums[start]
    }
    while(start <= end){
        const mid = Math.floor((start+end)/2);
        if(nums[mid-1]>nums[mid]){
            return nums[mid]
        }else if(nums[mid+1]<nums[mid]){
            return nums[mid+1]
        }
        if(nums[mid]>nums[start]){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
};
