"use strict";

function countPrimeNumbers() {
  const n = 100;
  let sieve = new Array(n + 1);
  let count = n - 1;

  sieve[0] = sieve[1] = 1;
  sieve.fill(0);
  
  for (let j = 2; j * j <= n; j++) {
    if (sieve[j] == 0) {
      for (let i = j * j; i <= n; i += j) {
        if (sieve[i] == 0) {
          sieve[i] = 1;
          count--;
        }
      }
    }
  }
  return count;
}

const t0 = performance.now();
countPrimeNumbers()
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
