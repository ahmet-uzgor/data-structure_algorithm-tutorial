// When a number given N , it will return the index value of Fibonacci Sequences

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...
// the pattern of the sequence is that each value is the sum of 
// the 2 previous values, that means that for N = 8 --> 3 + 5

function findFibonacciRecursive(n){
    if(n < 2){
        return n;
    }
    return findFibonacciRecursive(n-1) + findFibonacciRecursive(n-2)
}
console.log(findFibonacciRecursive(8));

function findFibonacciIterative(){
    //code here
}