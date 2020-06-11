// Find the factorial of given number via recursion & iterative way

function findFactorialRecursion(number){
    let i = 0
    if(number === 0){ // exception for 0 
        return 1;
    }
    if(number === 1){
        return 1;
    }
    if(typeof number === 'number' && number >= 0){
        return number*findFactorialRecursion(number-1)
    }
}

// Iterative Way 
function findFactorialIterative(number){
    let answer = 1;
    if(number < 0){
        return undefined ;
    }
    if(number === 0){
        return 1;
    }
    for(let i=1 ; i<= number ; i++){
        answer = answer * i ;
    }
    return answer;
}

console.log(findFactorialRecursion(-15), findFactorialIterative(-15)); //undefined
console.log(findFactorialRecursion(0), findFactorialIterative(0)); // return 1
console.log(findFactorialRecursion(5), findFactorialIterative(5)); // return 5!