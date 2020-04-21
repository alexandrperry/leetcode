/**
 * @param {number} numRows
 * @return {number[][]}
 */
 
let generateRow = (index,arr=[]) => {
  if(index){
    const prevArr = generateRow(index - 1,arr)
    let rowArr = []
    for(let i = 0;i < index;i++){
      if(i === 0 || i === index - 1){
        rowArr.push(1)
      }
      // -2 coz current index of arr = index - 1 and for get prev -1 one more time
      else{
        rowArr.push(prevArr[index-2][i-1]+prevArr[index-2][i])
      }

    }
    arr[index-1] = rowArr
  }
  return arr
}

let generate = numRows => {
  return generateRow(numRows)
}
