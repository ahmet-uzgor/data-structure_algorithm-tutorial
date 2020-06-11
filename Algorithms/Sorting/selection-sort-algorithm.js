// selection sort is that firstly sets first item as min and compare with other when find the lower than
// it replace with lower one and continue to do this until finish the sorting

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(inputs){
    for(let i=0; i<inputs.length; i++){
        let min = i;
        let temp = inputs[i];
        for(let j=i+1 ;j<inputs.length ; j++){
            if(inputs[j]<inputs[min]){
                min = j ;
            }
        }
        inputs[i] =inputs[min];
        inputs[min] = temp ;
    }
    return inputs;
}

selectionSort(numbers);
console.log(numbers);