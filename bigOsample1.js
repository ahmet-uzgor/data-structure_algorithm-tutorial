// Let's calculate the BIG O Notation of these functions

const fishes = ['mahi','tuna','japanese','nemo','dolphin'];

// WE will write findNemo in an array function.

function findNemo(array){ // BIG O is "O(n)" because it runs n time until find nemo
    let t0 = performance.now(); // starting time of func.
    for (let i=0 ; i < array.length;i++){
        if(array[i]==='nemo'){
            console.log("We found nemo in %d. element",i);
        }
    }
    let t1 = performance.now(); // ending point of func. (t1-t0) shows run time of function
    // runtime of function is not efficient way to calculate quality or speed of code . 
    // It is related with CPU of computer. If you try a few times you 'll show always different run time.
};

// ES6 function type

const findNemoEs6 = (array)=>{
    for (let i=0 ; i < array.length;i++){
        if(array[i]==='nemo'){
            console.log("We found nemo in %d. element",i);
        }
    }
};