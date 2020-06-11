// Merge sort algorith uses divide & conquer method which
// divides input to the small parts and finally unify according to
// their value until finish sorting.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(inputs){
    if(inputs.length === 1){
        return inputs;
    }
    // Firstly split the array into left and right
    const middle = Math.floor(inputs.length/2);
    const left = inputs.slice(0,middle);
    const right = inputs.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++
        }else{
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sortedArray = mergeSort(numbers);
console.log(sortedArray);