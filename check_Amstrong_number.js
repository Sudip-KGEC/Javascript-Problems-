// check Amstrong number 

function isAmstrong (num){
   let original = num; 

    const numArr = []
    while( num > 0){
       let lastElem = num % 10
       numArr.push(lastElem)
       num = Math.floor(num / 10)
    }

    let length = numArr.length
    let sum = 0
   numArr.forEach((n) => sum += Math.pow( n , length ))
   
 
  if (sum === original) {
   return true
  } else {
   return false
  }
   
}

console.log(isAmstrong(153))

console.log(isAmstrong(370))