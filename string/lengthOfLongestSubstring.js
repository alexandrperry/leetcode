/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    
    for (let i = 0; i < s.length; i++){
        const visited = new Map()
        for(let j = i; j < s.length; j++){
            if(visited.get(s[j]) === true){
                break
            }
            else{
                res = Math.max(res,j-i+1)
                visited.set(s[j],true)
            }
        }
        visited.set(s[i],false)
    }
    
    return res
};
