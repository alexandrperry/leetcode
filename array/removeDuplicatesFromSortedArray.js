/**
 * @param {number[]} nums
 * @return {number}
 */
 
//brut force
var removeDuplicates = function(nums) {
    let prev = null
    let counter = nums.length-1
    while(counter>=0){
      if(prev === nums[counter]){
        nums.splice(counter,1)
      }
      prev = nums[counter]
      counter--
    }
};

// JS hacky solution
var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
};

//two pointer 
const removeDuplicates = function (nums) {
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
		if (nums[i] !== nums[j]) {
			i++;
			nums[i] = nums[j];
		}
	}
	return i + 1;
};
