// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// When we need to fibonacci series we do not calculate each time with dynamic programming
// because already calculated elements results will be in cache.

function fibonacci(n){ // without memorized - cache system o(n^2)
    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2)
};

// With cache O(n)
function memoizedFibonacci(){
    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n];
        }else{
            if(n < 2){
                return n;
            }else{
                cache[n] = fib(n-1) + fib[n-2];
                return cache[n];
            }
        }
    }
};

const fasterFibonacci = memoizedFibonacci();
console.log(fasterFibonacci(10)); // big O is O(n) because we don't need each time to calculate known results
