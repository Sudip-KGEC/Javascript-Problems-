const prompt = require('prompt-sync')();

const generateNumber = Math.floor((Math.random() * 100) + 1)


let userInput = Number(prompt("Enter the number between 1 to 100: "));

while( userInput != generateNumber) {
   
    if(userInput > generateNumber){

        if(userInput - generateNumber > 5){
            console.log("You enter too high number try again!!")
        } else {
             console.log("You enter high number but close try again!!")
        }
    } else {
        if(generateNumber - userInput > 5){
            console.log("You enter too low number try again!!")
        } else {
            console.log("You enter low number but close  try again!!")
        }
    }

    userInput = Number(prompt("Enter again number between 1 to 100: "))
}

console.log("Congratulation you guess the number!!" , generateNumber)