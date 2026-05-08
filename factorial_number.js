// factor of a Number

function factorOfNum (inp) {
    if(inp < 1 || typeof inp == "string") return "must be positive number";
      let factor = []
    for(let i = 1 ; i <= inp ; i++) {
        if (inp % i == 0 ) factor.push(i)
    }

    return factor
}

console.log('factor', factorOfNum(10))