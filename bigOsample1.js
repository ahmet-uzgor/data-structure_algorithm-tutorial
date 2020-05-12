const fishes = ['mahi','tuna','japanese','nemo','dolphin'];

// WE will write findNemo in an array function.

function findNemo(array){
    for (let i=0 ; i < array.length;i++){
        if(array[i]==='nemo'){
            console.log("We found nemo in %d. element",i);
        }
    }
};

// ES6 function type

const findNemoEs6 = (array)=>{
    for (let i=0 ; i < array.length;i++){
        if(array[i]==='nemo'){
            console.log("We found nemo in %d. element",i);
        }
    }
};