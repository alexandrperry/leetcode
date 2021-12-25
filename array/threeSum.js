/**
 * @param {Array<number>} A
 * @return {Array<Array<number>>}
 */

var threeSum = function(A) { 
  // Initially sort the array
    A.sort((a, b) => a - b); 
    
    // Make an empty list to store the answer
    let results = [];
    for(let i = 0; i <A.length; i++) {
        let j = i + 1;
        let k = A.length - 1;
        
        // Traverse till first index less than second index
        while(j < k) {
            const sum = A[i] + A[j] + A[k];
            if (sum === 0) {
                results.push([A[i], A[j] ,A[k]]);
                
                // This step will handel case of similar A[j]
                while(j < k && A[j] == A[j+1]) {
                    j++;
                }
                j++;
                
                //This step will handel case of similar A[k]
                while(k > j && A[k] == A[k-1]) {
                    k--;
                }
                k--;
                //If sum<0 jth index should increase to increase sum
            } else if (sum < 0) {
                j++;
                // if sum>0 kth index should decrease to decrese sum
            } else {
                k--;
            }
        }
        // This step will handele case of similar A[i]
        while(i < A.length - 1 && A[i] == A[i+1]) {
            i++;
        }
    }    
    
    return results;
};
