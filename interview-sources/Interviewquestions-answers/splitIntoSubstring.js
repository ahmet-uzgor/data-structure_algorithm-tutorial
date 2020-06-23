// With given number as string in givenString, Split it into substrings from left to right , in such a way that:
// Each substring contains "k" digits 
// Leading zeroes are ignored
// Example givenNumber = "12345" when k=2 => output should be = ["12", "34", "5"] or givenNumber = "120354" when k=2 => output should be = ["12", "35", "4"]

const givenTest = "01234056";
const givenNumber1 = "01234056789123456789102";
const givenNumber2 = "12045";
const givenNumber3 = "12345665501";
const givenNumber4 = "120000000012"


function splitStringIntoKPart (givenNumber, k){ // it returns givenNumber string with k substring regarding conditions.
    let i= 0;
    let resultArray = [];
    while (i < givenNumber.length){
        let parsedString = givenNumber.slice(i,i+k);
        if(parsedString[0] !== "0"){
            resultArray.push(parsedString);
            i = i+k;
        }else {
            while (givenNumber[i] === "0"){
                i++;
            }
            resultArray.push(givenNumber.slice(i,i+k));
            i = i+k;
        }
    }
    return resultArray;
}

console.log("Test ", splitStringIntoKPart(givenTest,2)); // Output should be ['12', '34', '56']
console.log("1", splitStringIntoKPart(givenNumber1, 2)); // Output should be ['12', '34', '56','78', '91', '23','45', '67', '89','10', '2']
console.log("2", splitStringIntoKPart(givenNumber1, 4)); // Output should be [ '1234', '5678', '9123', '4567', '8910', '2' ]
console.log("3", splitStringIntoKPart(givenNumber2, 2)); // Output should be [ '12', '45' ]
console.log("4", splitStringIntoKPart(givenNumber2, 3)); // Output should be [ '120', '45' ]
console.log("5", splitStringIntoKPart(givenNumber3, 2)); // Output should be [ '12', '34', '56', '65', '50', '1' ]
console.log("6", splitStringIntoKPart(givenNumber3, 3)); // Output should be [ '123', '456', '655', '1' ]
console.log("7", splitStringIntoKPart(givenNumber4, 2)); // Output should be [ '12', '12' ]
console.log("8", splitStringIntoKPart(givenNumber4, 3)); // Output should be ['120', '12']
