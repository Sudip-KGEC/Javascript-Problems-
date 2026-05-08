
// Calculate Sum of digit in a number 

function sumOfDigit(inputNum){
    if(typeof inputNum === 'string' || inputNum < 0 ) return new RangeError("Input must be positive number") 
     let inpArr = inputNum.toString().split("");
     let ans=0
     for (let index = 0; index < inpArr.length; index++) {
        ans+= Number(inpArr[index])
     }

    return ans
   
}


console.log(sumOfDigit(12345))
console.log(sumOfDigit(-56))
console.log(sumOfDigit("24324"))
console.log(sumOfDigit("asdf"))