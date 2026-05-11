// check brackets correct order or not 

const parantheses = {
  "(" : ")",
  "{" : "}",
  "[" : "]"
}


function isBalanceBrackets (inputString) {
  
  const openingBrackesArr = [];

  for( let char of inputString) {
    
        if(parantheses[char]){
              openingBrackesArr.push(char)
        }else if(char === ")" || char === "}" || char === "]"){
          
             const lastBracketOnOpeningArr = openingBrackesArr.pop();

             if(parantheses[lastBracketOnOpeningArr] !== char ){
                return false
             }
        }

  }

  return openingBrackesArr.length === 0
}


console.log(isBalanceBrackets("[{()}]"))