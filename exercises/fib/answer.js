//1
// O(N)
function fib(n) {
    let fibNums = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }

    return fibNums[n]
}

//2
//time: O(2^n)
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

//2 + memoization
//O(N)
function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    //memo[0] & memo[1] === undefined
  
   if (n < 2) return n;
   let result = fib(n - 1, memo) + fib(n - 2, memo);
   memo[n] = result;
   console.log(memo);
   return result;
}

//2 + memoization
//O(N)
function memoize(fn) {
    const cache = {};
    return function(...args){
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function fib(n) {
   if (n < 2) return n;
   let result = fib(n - 1) + fib(n - 2);
   return result;
}

fib = memoize(fib);


//memoization
//doesn't think about fib(0) 
function fib_memo(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;

    let res = fib(n-1, memo) + fib(n-2, memo);

    memo[n] = res;
    return res;
}

//tabulated version
//[0, 1, 1, 2, 3, ]
function fib_tab(n) {
    if (n <= 2) return 1;
    
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    } 
    return fibNums[n];
}

