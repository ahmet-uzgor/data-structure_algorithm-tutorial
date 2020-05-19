const strings= ['a', 'b', 'c', 'd']; // we have an array that includes some strings
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push method adds the given input to the last of array
strings.push('e'); // it makes ['a', 'b', 'c', 'd','e'] => O(1)

//pop method deletes last element of arrays 
strings.pop();  // it makes ['a', 'b', 'c', 'd'] deletes last element
strings.pop();  // it makes ['a', 'b', 'c'] deletes last element  => O(1)

//unshift method it adds the given element to start of arrays and shifts other elements
strings.unshift('x'); // it makes  ['x', a', 'b', 'c'] => O(n) because n times shifting it has

//splice method adds the given element in the given location and deletes element how much you want
// strings.splice(location of element to add, how much item will deleted, given input); 
strings.splice(2,0, 'alien'); // it makes ['x', a', 'alien' ,'b', 'c']; O(n) 

console.log(strings)