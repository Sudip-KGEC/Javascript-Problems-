// check Anagram or not ?


function isAnagram (inputSrtingA , inputStringB) {
 
    inputSrtingA = inputSrtingA.toLowerCase().replace(/ /g , "");
    inputStringB = inputStringB.toLowerCase().replace(/ /g , "");

    if(inputSrtingA.length !== inputStringB.length ) return false;
 
     let obj = {};
     let obj2 = {};

     for(let i = 0 ; i < inputSrtingA.length ; i++){
        
        if(!obj[inputSrtingA[i]]){
            obj[inputSrtingA[i]] = 0
        }

        if(!obj2[inputStringB[i]]){
            obj2[inputStringB[i]] = 0
        }

        obj[inputSrtingA[i]]++
        obj2[inputStringB[i]]++
     }

    for (let key in obj){
        if(obj[key] !== obj2[key]){
            return false
        }
    }
    
    return true
    
} 

console.log(isAnagram("ge l At lo" , "ol Aglge"))