// calculate Factorial of a positive  number 

function calculateFactorial (num){
    if (num < 0) return new RangeError("Number must be positive")
    let ans = 1;
    for(let i = 1 ; i <= num; i++){
        ans *= i
    }
    return ans
}

console.log(calculateFactorial(0)) // 1
console.log(calculateFactorial(1)) // 1
console.log(calculateFactorial(4)) // 1
// console.log(calculateFactorial(-1)) // 1

//----------------------------------------

function calculateFactorialRecursion (num) {
 if (num < 0) return new RangeError("Number must be positive")

    if( num == 0 || num== 1 ) return 1 ;

    return num * calculateFactorialRecursion(num - 1)
}

console.log(calculateFactorialRecursion(0))
console.log(calculateFactorialRecursion(1))
console.log(calculateFactorialRecursion(4))
// console.log(calculateFactorialRecursion(-1))