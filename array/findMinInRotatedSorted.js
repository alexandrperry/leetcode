/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    if(nums.length === 1) return nums[0]
    
    if(nums[start] < nums[end]){
        return nums[start]
    }
    
    while(start <= end){
        let middle = start + Math.floor((end-start)/2)
        
        if(nums[middle]  > nums[middle+1]){
            return nums[middle+1]
        }
        
        if(nums[middle-1] > nums[middle]){
            return nums[middle]
        }
        
        if(nums[middle] > nums[start]){
            start = middle + 1;
        }
        
        else{
            end = middle - 1
        }
    }
};
