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

