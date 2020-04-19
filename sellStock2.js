/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  for (let i = 0; i < prices.length - 1; i++){
    if(prices[i+1] > prices[i]){
      profit += prices[i+1] - prices[i]
    }
  }
  return profit
};

// good by memory 
var maxProfit = function(prices) {
  let profit = 0
  prices.reduce((acc, next) => {
      if (next > acc) {
          diff += next - acc
      }
      return next
  })
  return profit
};
