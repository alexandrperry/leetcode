
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if(x < 0){
    return false
  }
  let str = String(x)
  let firstPointer = 0;
  let secondPointer = str.length - 1

  while(firstPointer!== secondPointer && secondPointer > 0){
    if(str[firstPointer] !== str[secondPointer]){
      return false
    }
    firstPointer++
    secondPointer--
  }  

  return true
}
