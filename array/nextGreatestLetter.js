/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right){
        let pivot = left + Math.floor((right-left)/2)
        
        if(arr[pivot]>target){
            right = pivot - 1
        }
        else{
            left = pivot + 1
        }
    }
    
    //return arr[left%arr.length]
    return arr[left] ?? arr[0]
};
