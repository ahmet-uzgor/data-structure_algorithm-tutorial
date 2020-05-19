// Question is I have a string like : "ahmet likes to watch cloud" and I want to see the reverse 
// of this string

function reverse(str){ // It reverses given string as parameter
    let s= ""  // we create a null string 
    if(str && str.length>=2 && typeof str == 'string'){ // we are controlling the given parameter is ok or not ok
        for(let i=0;i<str.length;i++){ // we will take all letters of string one by one
            s = str[i] + s; // we are taking respectively letters and adding s . ahmet => 1.loop  a  2.loop ha ....
        }
        console.log(s); // it prints reverse of given string
    }
    else{
        console.log("You entered wrong or any string!"); // if you enter unsuitable string it warns you
    }
}

reverse("ahmet likes to watch cloud"); // it prints "duolc hctaw ot sekil temha" .
