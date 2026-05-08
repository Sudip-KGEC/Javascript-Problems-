
// check pelindrome of a string

function checkPelindrome(str){
    if(typeof str != "string") return "must be a string"
    let revstr = str.split("").reverse().join('')
    return revstr === str
}

// console.log(checkPelindrome(101));
// console.log(checkPelindrome("101"));


// function checkPelindrome2 (str) {
//   if(typeof str != "string") return "must be a string"
//   let revstr = []
//   for(let i = str.length-1 ; i>=0 ; i--){
//     revstr.push(str[i])
//   }
//   return str === revstr.join('')
// }

// console.log(checkPelindrome2("madam"))

function checkPelindrome3 (inpstr) {
  if(typeof inpstr != 'string') return "input must a string"
  for (let i = 0 ; i <= inpstr.length / 2 ; i++){
    if (inpstr[i] != inpstr[inpstr.length - 1 - i]) return false;
    return true
  }
}


console.log(checkPelindrome3("madam"))
console.log(checkPelindrome3(123))