// function reverseString (str){
// let ans = str.split("").reverse().join("")
// return ans
// }

function reverseString (str){
let ans=''

for(let i = str.length-1;i>=0;i--){
    ans += str[i]
}
return ans
}

console.log(reverseString("hello"))
