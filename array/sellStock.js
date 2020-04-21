/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let farMinPrice = Infinity
  let maxProfite = 0
  prices.forEach(price => {
    let maxProfiteToday = price - farMinPrice
    maxProfite = Math.max(maxProfite,maxProfiteToday)
    farMinPrice = Math.min(farMinPrice,price)
  })
  return maxProfite
};
