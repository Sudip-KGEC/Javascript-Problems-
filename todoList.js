const prompt = require('prompt-sync')();

let obj = {
    1: "ADD",
    2: "SEE",
    3: "DELETE",
    4: "EXIT"
};

let LISTS = [];

function userChoice() {
    return Number(
        prompt("Enter : 1-ADD , 2-SEE , 3-DELETE , 4-EXIT : ")
    );
}

function seeTasks() {
    if (LISTS.length === 0) {
        console.log("No Tasks Available");
        return;
    }

    LISTS.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

let choice = userChoice();

while (obj[choice] !== "EXIT") {

    if (obj[choice] === "ADD") {

        let task = prompt("Enter Task : ");
        LISTS.push(task);

        console.log("Task Added");

    }
    else if (obj[choice] === "SEE") {

        seeTasks();

    }
    else if (obj[choice] === "DELETE") {

        if (LISTS.length === 0) {
            console.log("No Task To Delete");
        } else {
            console.log("Deleted:", LISTS.shift());
        }
    }
    else {
        console.log("Invalid Choice");
    }

    choice = userChoice();
}

console.log("App Closed");