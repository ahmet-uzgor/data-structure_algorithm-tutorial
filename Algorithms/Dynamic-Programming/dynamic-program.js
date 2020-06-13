// Dynamic program is an optimization technique to remember solved solutions answer on cache
// Memorized answer of items we use caching. And after when we need this answer , we can take without long solution.

function addTo80(number){
    return number + 80; // if this calculation takes so timee ... What should we need ? Dynamic prog.
}

// Memoized function

let cache = {}
function memoizedAddTo80(number){
    if(number in cache){
        console.log("Answer from cache");
        return cache[number];
    }else{
        cache[number] = number + 80 ;
        return cache[n]; 
    }
}

console.log('First Call for 75', memoizedAddTo80(75));
console.log('Second Call for 75', memoizedAddTo80(75));
