// calculate with power 

function calculateWithPower (base , power){
    let ans = 1
   
    for(let i= 1 ; i <= power; i++){
       ans *= base
    }

    return ans
}


console.log(calculateWithPower(4,4))