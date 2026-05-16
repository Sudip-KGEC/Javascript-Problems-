

const prompt = require("prompt-sync")();


let operator = Number(prompt("Choose the operation. 1 For Addition , 2 For Substraction , 3 for Multipication , 4 for Division: "))
let firstNumber = Number(prompt("Enter first Number: "))
let secondNumber = Number(prompt("Enter second Number: "))


if(operator == 1 ) addtion(firstNumber, secondNumber)
if(operator == 2 ) substraction(firstNumber, secondNumber)
if(operator == 3 ) Multipication(firstNumber, secondNumber)
if(operator == 4 ) Division(firstNumber, secondNumber)


function addtion ( firstNumber, secondNumber ){
  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
}

function substraction ( firstNumber, secondNumber ){
  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
}

function Multipication ( firstNumber, secondNumber ){
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
}

function Division ( firstNumber, secondNumber ){
  console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
}