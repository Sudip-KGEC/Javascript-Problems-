
// Find words on big string

//method 1 
function findword(inputString , word){
    const inpStrTrim = inputString.trim()
    const wordStartIndexArr = []
    for(let i = 0 ; i < inpStrTrim.length ; i++){
   if(inpStrTrim[i] === word[0]){
     wordStartIndexArr.push(i)
   }
       
    }

   if(wordStartIndexArr.length === 0) return "Not found" 
   return wordStartIndexArr
}

//method 2
function findword2( inputString , word){
    let index = inputString.indexOf(word);
    const result = []
    while(index !== -1){
        result.push(index);
        index = inputString.indexOf(word , index + 1)
    }
    if(result.length === 0 ) return "Not found"
    return result
}

console.log(findword("This is the big word on the big world big" , "child"))
console.log(findword2("This is the big word on the big world big" , "chiild"))