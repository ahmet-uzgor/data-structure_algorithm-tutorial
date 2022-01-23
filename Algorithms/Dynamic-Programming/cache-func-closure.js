// To use cache inside of function in JS we have closure so always pattern is same to do this.


function memoizedAddTo80(number){
    let cache = {};
    return function(number){
        if(number in cache){
            console.log("Answer from cache");
            return cache[number];
        }else{
            cache[number] = number + 80 ;
            return cache[number]; 
        }
    }
}
const memoized = memoizedAddTo80(); // it provides us to remember cache even cache inside of function.

console.log('First Call for 75', memoized(75));
console.log('Second Call for 75', memoized(75));
