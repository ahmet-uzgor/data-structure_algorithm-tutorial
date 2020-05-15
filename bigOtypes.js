// Big O Notation- Big O types are listed below with its samples

// 1. O(1) = constant time , notation / it works just as constant time
inputs = [1,2,3,'a','B','s',5,6] ; // it can be increased number of inputs.
function findFirst(inputs){ // findFirst function finds first element of given array so it just works one time .
    for(let i= 0 ; i<inputs.length ; i++){
        console.log(inputs[1])
    }
}


// 2. O(n) = linear time , notation / it works n times for desired outputs
function increaseNTimes(n){ // it increases a number as n times so it works n times . O(n)
    for (let i =0 ; i<=n.length ; i++){
        if(i==n.length){
            console.log(i);
        };
    };
};

// 3. =(n^2) = rapidly increasing time / it works n*n times because of nested loops
const numbers = [3,2,8,11,7,3,9,4] ;
function sumOfEachPairs(numbers){ // it shows all sum of each pairs in array  . O(n^2) 
    for(let i=0 ; i<numbers.length ;i++){ // it works n times
        for(let j= 0 ; j<numbers.length ; j++){  // it works n times
            console.log(numbers[i]+numbers[j]);
        };
    };
};

/*
----- BIG O NOTATION RULES -------    

 1-) Worst Case 
 2-) Remove Consants
 3-) Different terms for inputs
 4-) Drop Non Dominants 


  1-) Worst Case 
 - When you write code just think worst scenario but if it runs below than worst case
  break the loop with . "break";
  
  2-) Remove Consants
  when you calculate the big O of a function ignore constants l,ke O(3 +4n) = O(n)

  3-) Different Terms for inputs
  If function has different terms of inputs , you shoukd consider in two different big O .
  Like: function( input ,input2){for(i=0;i<input.length){};for(j=0;i<input2.length){};} 
  Big O of that function is O(n+k) = n for input , k for input2
  
  4-) Drop Non Dominants 
  If function has different big O's and different notations like : O(n^2 + 3n +12 )
  It can not show like that so drop all non dominants  O(n^2 + 3n +12 ) => O(n^2),
  Because others from n^2 are non dominants regarding thath so it has dropped.

  */