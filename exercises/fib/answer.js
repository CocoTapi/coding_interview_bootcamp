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

/*
1. set the base case. when the number is less than 2, return the number.
2. when the number is greater than 1
    a. call the function with one before the target number and two before the target number
    b. increment them.  

*/

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

/*
1. check if the result for nth number is already memoize. If there is, return the number.
2. set the base case: if the target number is less than 2, return the number. 
3. recursively caliculate Fibonacci numbers with memoization. increment two before numbers.
4. memoize the result for the target number
5. return the caliculated number.   
*/

function fib_memo(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;

    let res = fib(n-1, memo) + fib(n-2, memo);

    memo[n] = res;
    return res;
}

//tabulated version
//[0, 1, 1, 2, 3, ]

/*
1. when the number is less than 2, return the number.
2. create an array to store Fibonacci numbers, starting with 0 and 1. 
3. when the number is greater than 2, iterate through to the target number 
    a. increment previous two number to get the target fabinacci number
4. return the target number from the stored array
*/

function fib_tab(n) {
    if (n <= 2) return 1;
    
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    } 
    return fibNums[n];
}

