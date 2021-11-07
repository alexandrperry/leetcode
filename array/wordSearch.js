/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let visited = []

var exist = function(board, word) {
    const rows = board.length;
    const columns = board[0].length;
    
    visited = Array(rows).fill([]).map(row => Array(columns).fill(false))
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(word[0] === board[i][j] && searchWord(i,j,0,word,board)){
                return true
            }
        }
    }
    
    return false
};

const searchWord = (i,j,index,word,board) => {
    if(index === word.length){
        return true
    }
    
    
    if(i < 0 || i >= board.length  || j < 0 || j >= board[i].length || board[i][j] !== word[index] || visited[i][j] ){
        return false
    }
        
    
    visited[i][j] = true
    
    if(searchWord(i+1,j,index+1,word,board)|| searchWord(i-1,j,index+1,word,board) || searchWord(i,j+1,index+1,word,board) || searchWord(i,j-1,index+1,word,board)){
        return true
    }
    
    visited[i][j] = false
    
    
    return false
}
