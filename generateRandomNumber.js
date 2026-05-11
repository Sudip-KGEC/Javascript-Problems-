
// generate random number 

const max = 10;

const randomNum = Math.floor((Math.random() * max ) + 1)

for (let i = 0; i < 11 ; i++) {
  
    const randomNum = Math.floor((Math.random() * max ) + 1)
    //  console.log(randomNum)
}



// between min and max 

const minNum = 11 ;
const maxNum = 21;

for(let i = 0 ; i < 11; i++) {
      const randomNumber = Math.floor((Math.random() * (maxNum - minNum) + minNum));
    //   console.log(randomNumber)
}


// otp generate  4 digit

for(let i = 0 ; i < 21; i++) {
      const randomNumber = Math.floor((Math.random() * (9999 - 1000) + 1000 ));
    //   console.log(randomNumber)
}


// otp generate  6 digit

for(let i = 0 ; i < 21; i++) {
      const randomNumber = Math.floor((Math.random() * (999999 - 100000) + 100000 ));
    //   console.log(randomNumber)
};



// user Input from prompt-sync pakage like build in java input


const prompt = require("prompt-sync")();

const userName = prompt("Please Enter your name: ")

console.log(`Welcome ${userName} to the world of JavaScript`)