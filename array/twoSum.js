/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brut-force 
var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length;i++){
      for(let j = 0;j<nums.length;j++){
        if(i !== j){
          if(nums[i] + nums[j] === target){
            return [i,j]
          }
        }
      }
    }
};

//optimize 
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0;i < nums.length;i++){
      if (map.has(nums[i])) return [map.get(nums[i]), i];
      const diff = target-nums[i]
      map.set(diff,i)
    }
};
