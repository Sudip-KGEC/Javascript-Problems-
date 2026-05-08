// print Hello World

// function printGreet (greet){
//     console.log(greet)
// }

// printGreet("Hello World")


// Write a function takes two numbers and print their sum .

// function printSum (num1 , num2 ){
//    if(typeof num1 != 'number' || typeof num2 != 'number') return false 
//     return num1 + num2
// }

// console.log('sum is',printSum(7,4))



// write a fn to calculate the area of rectangle !

function calculateAreaOfRect (height , width){
    if(typeof height != 'number' || typeof width != 'number' || height < 0 || width < 0) return false
    return `Area is ${height * width}`
}

console.log(calculateAreaOfRect(7 , 5))