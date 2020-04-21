/**
 * @param {number[]} digits
 * @return {number[]}
 */
// non optimal solution by runtime but good by memory 
var plusOne = function(digits) { 
  let numberPlusOne =BigInt(digits.toString().replace(/\D/gm,""))+BigInt(1)
  return numberPlusOne.toString().split('').map(item => Number(item))
};

// more faster
var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i--){
    digits[i]++
    if( digits[i] < 10 ) return digits
    digits[i] = 0
    if(i === 0 ){
      digits.unshift(1)
      return digits
    }
  }
};
