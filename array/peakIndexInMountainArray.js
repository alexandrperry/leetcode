/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0
    let right = arr.length - 1 
    
    while(left <= right){
        let pivot = left + Math.floor((right - left)/2)
        
        if(arr[pivot] < arr[pivot+1]){
            left = pivot + 1
        }
        else{
            right = pivot - 1
        }                   
    }
    
    return left
};
