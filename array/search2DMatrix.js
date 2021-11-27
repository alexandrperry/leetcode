
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let j = matrix[0].length - 1, i = 0
    
    while(j >= 0 && i < matrix.length) {
        if(matrix[i][j] === target) return true
        
        if(matrix[i][j] > target) j--
        else i++
    }
    return false
}


var searchMatrix = function(matrix, target) {
  
    const rows = matrix.length;
    const columns = matrix[0].length
    
    let start = 0;
    let end = rows*columns-1;
    
    while(start<=end){
        const middle = start+Math.floor((end-start)/2)
        const middleElement = matrix[Math.floor(middle/columns)][middle%columns]
        
        if(target === middleElement){
            return true
        }
        
        else if(target>middleElement){
            start = middle+1
        }
        
        else if(target<middleElement){
            end = middle - 1;
        }
    }
    
    return false
    
};
