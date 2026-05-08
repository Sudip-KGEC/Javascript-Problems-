
// Write a programme that checks if a given string is a alfabet order or not ?

 function checkAlfabetOrder (inputString){
   inputString = inputString.toLowerCase().replace(/ /g , "")
    for ( let i = 0 ; i < inputString.length ; i++){
      if(inputString[i] > inputString[i + 1]){
         return false
      }
    }

    return true;
 }

 console.log(checkAlfabetOrder("AaAbc dez"))