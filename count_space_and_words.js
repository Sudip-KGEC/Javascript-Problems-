// count space and word of a sentence

function countOfSentence (sentence){
    if( typeof sentence != 'string') return "must be a string"
    let spaces = sentence.split(" ").length - 1
    let words = sentence.split(" ").filter((elm) => elm != "").length
    
     return {words , spaces}
}; 



console.log(countOfSentence(" this is b   a book of a book "))