/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rows = matrix.length 
    
    //transpose
    for(let i = 0; i< rows; i++){
        for(let j = i; j < rows; j++){
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
            
        }
    }
    
    //reflect
    for(let i = 0; i< rows; i++){
        for(let j = 0; j < Math.floor(rows/2); j++){
            const reflectedColumn = rows - 1 - j
            const temp = matrix[i][j]
            matrix[i][j] = matrix[i][reflectedColumn]
            matrix[i][reflectedColumn] = temp
        }
    }
    
    
    return matrix
};
