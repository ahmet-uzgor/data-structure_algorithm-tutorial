// Recursive functions - Example for Recursion 

let counter = 0;
function recursiveFunc(){ // bigO of this function is O(n)
  console.log(counter);
  if(counter >3){
    return 'done!';
  }
  counter++
  return recursiveFunc(); // it provides return data to be able to take return value of recursiveFunc() 
}

recursiveFunc(); // when it called , it call again itself inside of function

//3 rules of recursion
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually it needs 2 returns
