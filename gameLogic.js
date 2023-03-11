// Create global constant rps that stores the options
const rps = ["rock", "paper", "scissor"];
var userInput;          // Variable to store the user input
var compChoice;         // Variable to store the computer choice
var userScore = 0;      // Variable to store user score
var compScore = 0;      // Variable to store computer score

// Create a random number between a given range
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Choose rock, paper or scissor based on the random number 
function setCompChoice(randNum) {
    return rps[randNum];
}

// Get the choice
function getCompChoice() {
    compChoice = setCompChoice(getRandInt(0, 2));
}

// Check if user input is valid
function userInputVal(userInput) {
    if (rps.includes(userInput)) {
        roundCheck(userInput, compChoice);
    }
    else {
        console.log("Wrong input");
        return false;
    }
}

function roundCheck(userInput, compChoice) {
    if (userInput === compChoice) {
        return;
    }
    switch (compChoice) {
        case "rock":
            if (userInput === "paper") {
                userScore ++;
            }
            else {
                compScore ++;
            }
            break;
        case "paper":
            if (userInput === "scissor") {
                userScore ++;
            }
            else {
                compScore ++;
            }
            break;
        case "scissor":
            if (userInput === "rock") {
                userScore ++;
            }
            else {
                compScore ++;
            }
            break;
    }
}

// Ask for user choice
function game() {
    while (compScore < 5 && userScore < 5) {
        getCompChoice();
        userInputVal("rock");
        console.log(compChoice);
        console.log(compScore, userScore);
    }
}

game();