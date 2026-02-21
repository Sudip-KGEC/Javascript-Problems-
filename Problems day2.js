//write a fn takes a number and check Even or Odd and Print !

function checkEvenOdd (num) {
    if(typeof num != 'number') return false;

    if(num % 2 == 0 ) {
        return "Num is Even"
    } else {
        return 'Num is Odd'
    }
}

console.log(checkEvenOdd(2))


//write a fn that take three input and print the small number 

function printSmallestNumber (num1 , num2 , num3) {
    let smallNum = num1;
    if(num2 < smallNum){
        smallNum = num2
    }
    if(num3 < smallNum){
        smallNum = num3
    }
    return smallNum
}



function printSmallestNumber (num1 , num2 , num3) {
   let arr = [num1 , num2 , num3].sort((a , b) => a - b);
   return arr[0]

}
console.log(printSmallestNumber(3 , 6 , 2))
console.log(printSmallestNumber(2 , 2 , -4))