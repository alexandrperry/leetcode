/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === '1'){
                count++
                recDFS(grid,i,j)
            }
        }
    }
    
    return count
};

const recDFS = (grid,i,j) => {
    if(i<0 || j < 0 || i>=grid.length || j>=grid[i].length||grid[i][j] === '0'){
        return
    }
    
    grid[i][j] = '0'
    
    recDFS(grid,i+1,j)
    recDFS(grid,i-1,j)
    recDFS(grid,i,j+1)
    recDFS(grid,i,j-1)
}
