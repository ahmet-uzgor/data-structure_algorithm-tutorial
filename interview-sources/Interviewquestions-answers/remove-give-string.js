// Remove a given character from string and return without given character
// For ex: Given char is "a" and string is "aliabi" return should be => libi
// Also string is "aaaaa" return should be => empty

function removeGivenChar(char, myString){ // time complexity O(n), space complexity O(1)
    let result = "";
    for(let i in myString){
        if(char !== myString[i]){
            result += myString[i];
        }   
    }
    return result;
}

console.log(removeGivenChar("a","aaaaaaaaa")); // returns empty
console.log(removeGivenChar("a","aliabi")); // returns libi
console.log(removeGivenChar("b","aliabi")); // returns aliai
console.log(removeGivenChar("c","aliabi")); // returns aliabi