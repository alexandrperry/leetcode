/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxSequence = 0;
    
    const hashSet = new Set()
    
    nums.forEach(num => hashSet.add(num))
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let streak = 1

        if(!hashSet.has(num-1)){
            while(hashSet.has(num+1)){
                num++
                streak++
            } 
        }        
        
        maxSequence = Math.max(maxSequence,streak)
    }
    
    return maxSequence;
};
