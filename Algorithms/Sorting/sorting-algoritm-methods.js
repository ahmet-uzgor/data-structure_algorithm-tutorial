// Bubble Sort Algorithm compares each possible pare and sorts the inputs
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(inputs){
    for(let i=0 ; i < inputs.length;i++){
        for(let j= 0; j < inputs.length ;j++){
            if(inputs[j] > inputs[j+1]){
                let firstPare = inputs[j];
                inputs[j] = inputs[j+1];
                inputs[j+1] = firstPare ;
            }
        }
    }
    return inputs;
}

console.log(bubbleSort(numbers));

// Write bubbleSort function with recursion...