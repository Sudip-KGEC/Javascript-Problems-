const prompt = require("prompt-sync")();


// let userChose = Number(prompt("Enter your select :-  1 - Paper , 2 - Scissor , 3 - Rock , 4 - Exit: "));



// const Paper = 1;
// const Scissor = 2;
// const Rock = 3
// const Exit = 4



// let computerScore = 0;
// let YourScore = 0;

// let validate = true

// while(userChose < 1 || userChose > 4) {
//     validate = false
//     console.log("give Valid input between 1 to 4 ")
//     userChose = Number(prompt("Enter your select :-  1 - Paper , 2 - Scissor , 3 - Rock , 4 - Exit: "));
// };

// while (userChose !== Exit && validate ) {

//      const computerchose = Math.floor((Math.random() * 3) + 1);

//     if (userChose === computerchose) {
//         console.log("Tie")
//     } else if (computerchose == Paper && userChose == Scissor || computerchose == Rock && userChose == Paper || userChose == Rock && computerchose == Scissor) {
//         YourScore++
//         console.log("You Win!!", `Computer Chose ${computerchose} , You chose ${userChose} `)
//     }
//     else {
//         computerScore++
//         console.log("Computer Win" ,  `Computer Chose ${computerchose} , You chose ${userChose} `)
//     }

//     userChose = Number(prompt("Enter your select :-  1 - Paper , 2 - Scissor , 3 - Rock , 4 - Exit: "));
// }


// if(userChose == Exit){
//   console.log(`Final End Score : You - ${YourScore} Vs  Computer - ${computerScore}`)
// }



// Advance Approch 




const rules = {
  1: 3,
  2: 1,
  3: 2
};

let userScore = 0;
let computerScore = 0;

function getChoice() {
  return Number(prompt("1-Paper 2-Scissor 3-Rock 4-Exit: "));
}

let userChoice = getChoice();

while (userChoice !== 4) {

  if (userChoice < 1 || userChoice > 4) {
    console.log("Invalid Input");
    userChoice = getChoice();
    continue;
  }

  const computerChoice = Math.floor(Math.random() * 3) + 1;

  if (userChoice === computerChoice) {
    console.log("Tie");
  }
  else if (rules[userChoice] === computerChoice) {
    userScore++;
    console.log("You Win");
  }
  else {
    computerScore++;
    console.log("Computer Wins");
  }

  console.log(`You: ${userScore} | Computer: ${computerScore}`);

  userChoice = getChoice();
}

console.log(`Final Score -> You: ${userScore} Computer: ${computerScore}`);
