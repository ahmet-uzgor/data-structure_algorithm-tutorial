// Question is merge sorted arrays arr1 = [0,3,4,31] , arr2= [4,6,30] . it merged like [0,3,4,31,4,6,30]

function mergeSortedArrays(array1 , array2){
    if( array1 && array2 && typeof array1 == 'object' && typeof array2 == 'object'){
        for(let i = 0 ; i<array2.length ; i++){
            array1.push(array2[i]);
        }
        console.log(array1);
    }else {
        console.log("You entered wrong input");
    }
}

const arr1 = [0,3,4,31] , arr2= [4,6,30] ;
mergeSortedArrays(arr1,arr2);



// different version of question sort and merge arrays
function mergeSortedArrays2(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  mergeSortedArrays2(arr1,arr2);