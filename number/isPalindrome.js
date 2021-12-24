
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

const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  const logarithmAnswer = Math.log10(x);
  const totalDigits = Math.floor(logarithmAnswer) + 1;

  let mostSignificantExtractionMask = Math.pow(10, totalDigits - 1);

  for (let i = 0; i < (totalDigits / 2); i++) {
    const mostSignificantDigit = Math.floor(x / mostSignificantExtractionMask);
    const onesPlaceDigit = x % 10;

    if (mostSignificantDigit !== onesPlaceDigit) {
      return false;
    }

    // Removing most significant digit: 999 % 100 = 99
    x %= mostSignificantExtractionMask;

    /*
    * Removing the ones place digit: 99 / 10 = 9.9 => 9
    */
    x = Math.floor(x / 10);

    // Remove 2 0's from the mask since we just lost 2 digits
    mostSignificantExtractionMask /= 100;
  }

  return true;
}
