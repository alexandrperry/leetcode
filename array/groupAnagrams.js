/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()

    for(let str of strs){
        const key = str.split('').sort().join('')

        const item = map.get(key)

        if(item){
            item.push(str)
            map.set(key, item)
        }else{
            map.set(key, [str])
        }

       
    }

    return Array.from(map.values())
};
