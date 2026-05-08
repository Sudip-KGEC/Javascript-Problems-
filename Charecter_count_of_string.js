// Char Count In A String

function stringCountChar (inputString){

    const charCountObj = {};
    inputString = inputString.toLowerCase().replace(/\s/g , "")

    for(let i = 0 ; i < inputString.length ; i++){
        if(!charCountObj[inputString[i]]){
            charCountObj[inputString[i]] = 0
        }
        
        charCountObj[inputString[i]]++
        
    }
   return charCountObj
}


console.log(stringCountChar("Hello World "))