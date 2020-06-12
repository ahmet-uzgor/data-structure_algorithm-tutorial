// Quick sort algorithm one of the most effective and used sorting algorithm.
// Quick sort uses divide & conquer method and it selects a pivot and divides
// elements to right(bigger than pivot) and left(lower than pivot) and it continues to 
// do that until sorting is finished.Big O is O(nlogn) but in worst case it can be O(n^2)
// because pivots are selected randomly .If pivot is biggest or lowest element , time comp. O(n^2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

 

function quickSort(array, left, right){
  const len = array.length;
  let pivot;
  let partitionIndex;
  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
} 

function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left; 
  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);