var productExceptSelf = function(nums) {
  const leftArr = []
  const rightArr = []
  const outputArr = [];

  leftArr[0] = 1;
  rightArr[nums.length-1] = 1

  for(let i = 1;i< nums.length;i++){
      leftArr[i] = leftArr[i-1]*nums[i-1]
  }
  for(let j = nums.length -2;j >=0;j--){
      rightArr[j] = rightArr[j+1]*nums[j+1]
  }
  
  return nums.map((_,idx) => leftArr[idx]*rightArr[idx]) 
};
