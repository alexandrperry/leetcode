const isPrime = (n) => {
  if (n == 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i == 0) return false;

  return true;
};

var countPrimes = function (n) {
  let res = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) res++;
  }
  return res;
};
