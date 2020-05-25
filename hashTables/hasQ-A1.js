// Find the first recurring item inside of the given array 
// For Ex: If given array is => [2 , 1 , 4 , 3 ,2 ] 
// The result should be => first recurring object is "2".

let givenArray = [2 , 1 , 4 , 3 ,2];
let recurringItem = {};

function findRecurringObject(inputArray){ // it finds first recurring elmenent in given array
    if(!inputArray && inputArray.length < 2){ // If input is not given or given array ha null or 1 object it returns a warning message
        console.log("You should enter an array as input or you should enter more element to find Recurring items");
    }else{
        for(let i=0 ; i< inputArray.length; i++){ // we will add each element to an object (hash tables) to compare with next items
            if(typeof inputArray[i] == 'number'){ // We just accept numbers to compare
                if(!recurringItem[inputArray[i]]){ // if recurringItem object has not items of inputArray . Add to object 
                    recurringItem[inputArray[i]] = true;
                }else if(recurringItem[inputArray[i]]){ // if element of inputArray included in recurrinItem then we found the recuured item.
                    console.log('First recurring item in given array is %d' , inputArray[i]); // we print a message that yupppiii we have found
                    return inputArray[i];
                };
            };
        };
    };
};


findRecurringObject(givenArray);


