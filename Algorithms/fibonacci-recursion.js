// When a number given N , it will return the index value of Fibonacci Sequences

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...
// the pattern of the sequence is that each value is the sum of 
// the 2 previous values, that means that for N = 8 --> 3 + 5

function findFibonacciRecursive(n){ // O(2^n) exponentially increasing ;recursive function
    if(n < 2){
        return n;
    }
    return findFibonacciRecursive(n-1) + findFibonacciRecursive(n-2)
}
console.log(findFibonacciRecursive(8));

function findFibonacciIterative(){ // O(n) this solution  is better than recursive one.
    let arr = [0, 1];
    for(let i = 2 ; i < n+1 ; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n]
}

console.log("Iterative solution answer is ", findFibonacciIterative(8));

// TAIL CALL OPTIMIZATION does not call stack each time so it makes O(2^n) --> O(n)
// https://hackernoon.com/es6-tail-call-optimization-43f545d2f68b
