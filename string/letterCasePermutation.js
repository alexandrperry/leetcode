/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const result = []
    const charTrace = []
    
    const backtracker = (index = 0) => {
        if(index === s.length){
            result.push(charTrace.join(''))
            return 
        }
        if(isChar(s[index])){
            charTrace[index] = s[index].toLowerCase()
            backtracker(index+1)
            
            charTrace[index] = s[index].toUpperCase()
            backtracker(index+1)
        }else{
            charTrace[index] = s[index]
            backtracker(index+1)
        }
    }
    
    backtracker()
    
    return result
};

    
   

    
const isChar = (char) => {
    return /[a-zA-Z]/.test(char)
}
