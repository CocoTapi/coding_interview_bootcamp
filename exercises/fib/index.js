// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    //memo[0] & memo[1] === undefined
  
   if (n < 2) return n;
   let result = fib(n - 1, memo) + fib(n - 2, memo);
   memo[n] = result;
   console.log(memo);
   return result;
}


module.exports = fib;
