// Max number of an array 

function printMaxNumOfArray (arr){
    let max = arr[0];

    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > max) max = arr[i]
    }

    return max
}

console.log(printMaxNumOfArray([2,6,0,3,8,4,16]))