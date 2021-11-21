/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length -1 ;
    while(start <= end){
        let middle = start + Math.floor((end-start)/2)
        if(nums[middle] === target) return middle
        
        if(nums[start] <= nums[middle]){
            if(nums[start] <= target && nums[middle] >= target){
                end = middle - 1
            }
            else{
                start = middle + 1
            }
        }
        
        else{
            if(nums[middle] <= target && nums[end] >= target){
                start = middle + 1
            }
            else{
                end = middle - 1
            }
        }


    }
    
    return -1
};
