var merge = function(nums1, m, nums2, n) {
    m--
    n--
    let index = nums1.length -1 
    while(index>=0){
      if(0>n){
         nums1[index] = nums1[m]
        m--
      }
      else if(0>m){
        nums1[index] = nums2[n]
        n--
      }
      else{
        if(nums2[n]>nums1[m]){
          nums1[index] = nums2[n]
          n--
        }
        else{
          nums1[index] = nums1[m]
          m--
        }
      }
      index--
    }
};
