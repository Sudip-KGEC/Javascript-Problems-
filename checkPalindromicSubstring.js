// check Palindrome subs String 

function isPalindrome (str){
 
    for(let i = 0 ; i <= str.length/2 ; i++){
        if( str[i] !== str[str.length-1 - i]){
           return false;
        }
    }

    return true

}


function palindromeSubstring( inputString){

 let result = [];

  for(let i = 0 ; i < inputString.length ; i++ ){

    for(let j = i + 1 ; j <= inputString.length ; j++){
        
        let word = inputString.slice(i , j)
        
        if(isPalindrome(word) && word.length > 1 && !result.includes(word)){
                result.push(word)
        }
       
    }
  }

  return result

}

console.log(palindromeSubstring("radarmadam"))