// check prime number or not

function isPrime (Num){
    for (let i = 2 ; i < Num ; i++ ){
       if(Num % i === 0) return false 
    }

    return true
}

console.log(isPrime(11))