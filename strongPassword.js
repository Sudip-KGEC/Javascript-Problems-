// check strong password or not 


function isStrongPassword (inputPasswordString){

    if(inputPasswordString.length < 8) return false;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "012345689";
    const specialChar = "@!$";


    let upperCaseExist = false;
    let lowerCaseExist = false;
    let numbersExist = false;
    let specialCharExist = false;

   for( let char of inputPasswordString){
    if(upperCase.includes(char)) upperCaseExist = true 
    else if (lowerCase.includes(char)) lowerCaseExist = true 
    else if (numbers.includes(char)) numbersExist = true 
    else if (specialChar.includes(char)) specialCharExist = true 
   }

   return upperCaseExist && lowerCaseExist && numbersExist && specialCharExist

}


console.log(isStrongPassword("Sudipdas1@"))