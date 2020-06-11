//Insertion sort algorithms sets relationship respect of mass and insert the element 
// to the correct place which is mass is appropriate.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(inputs){
    for(let i=0; i<inputs.length; i++){
        if(inputs[i] < inputs[0]){
            // it moves number to the start of array
            inputs.unshift(inputs.splice(i,1)[0]);
        }else {
            // it finds where number should go
            for(let j=1; j < i; j++){
                if(inputs[i] > inputs[j-1] && inputs[i] < inputs[j]){
                    inputs.splice(j, 0, inputs.splice(i,1)[0]);
                }
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);