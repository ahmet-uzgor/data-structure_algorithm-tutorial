// There are thousands of sorting algorithms beside the built-in methods
// BFS + DFS will be written in there

const letters = ['a', 'f', 'b', 'z', 'c', 'e'];
letters.sort() ; // This built-in methods sort the elements of arrays according to the Unicode points
const numbers = [1 ,64 ,32, 7, 2, 7, 28];
console.log(numbers.sort()) ; // it sorts considering unicode so output will be [1, 2, 28, 32, 64, 7, 7]
// because unicode points of 7 is bigger than unicode point of 64;
// For detail please check docs ==> https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
