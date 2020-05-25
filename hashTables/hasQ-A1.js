// Find the first recurring item inside of the given array 
// For Ex: If given array is => [2 , 1 , 4 , 3 ,2 ] 
// The result should be => first recurring object is "2".

let givenArray = [2 , 1 , 4 , 3 ,2];
let recurringItem = {};

function findRecurringObject(inputArray){
    if(!inputArray && inputArray.length < 2){
        console.log("You should enter an array as input or you should enter more element to find Recurring items");
    }else{
        for(let i=0 ; i< inputArray.length; i++){
            if(typeof inputArray[i] == 'number'){
                if(!recurringItem[inputArray[i]]){
                    recurringItem[inputArray[i]] = true;
                }else if(recurringItem[inputArray[i]]){
                    console.log('First recurring item in given array is %d' , inputArray[i]);
                    return inputArray[i];
                };
            };
        };
    };
};

findRecurringObject(givenArray);


