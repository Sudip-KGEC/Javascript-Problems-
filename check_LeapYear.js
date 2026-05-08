// IsLeapYear ? check 

function isLeapYear(year){
    if(typeof year === "string" || year < 0) return new TypeError("Year must a positive number")

    if (year % 4 === 0) return true;
    return false
}

console.log(isLeapYear(2000))
console.log(isLeapYear(2023))
// console.log(isLeapYear(-2024))
// console.log(isLeapYear("sjhfshf"))