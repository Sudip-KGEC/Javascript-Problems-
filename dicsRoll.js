

function dicsRoll (noOfDics , noOfSides) {

    let results = [];


    for ( let i = 1 ; i <= noOfDics ; i++ ) {
        let roll = Math.floor(Math.random() * noOfSides) + 1;
        results.push(roll);
    }

    return results;
};

const prompt = require('prompt-sync')();

let noOfDics = parseInt(prompt('Enter the number of dics you want to roll: '));
let noOfSides = parseInt(prompt('Enter the number of sides on the dics: '));

console.log(dicsRoll(noOfDics , noOfSides));