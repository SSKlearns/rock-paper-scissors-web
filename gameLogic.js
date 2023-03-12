// Create global constant rps that stores the options
const rps = ["rock", "paper", "scissor"];       // Array to store the options
const rock = document.querySelector("#rock");   // Get the rock button
const paper = document.querySelector("#paper"); // Get the paper button
const scissor = document.querySelector("#scissor"); // Get the scissor button
const restart = document.querySelector("#restart"); // Get the restart button
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

// Check the result of the round and display the result
function roundCheck(userInput, compChoice) {
    if (userInput === compChoice) {
        document.getElementById("choicestat").innerHTML = userInput + " ties with " + compChoice;
        return;
    }
    switch (compChoice) {
        case "rock":
            if (userInput === "paper") {
                userScore ++;
                document.getElementById("choicestat").innerHTML = "Paper defeats Rock";
            }
            else {
                compScore ++;
                document.getElementById("choicestat").innerHTML = "Scissor loses to Rock";
            }
            break;
        case "paper":
            if (userInput === "scissor") {
                userScore ++;
                document.getElementById("choicestat").innerHTML = "Scissor defeats to Paper";
            }
            else {
                compScore ++;
                document.getElementById("choicestat").innerHTML = "Rock loses to Paper";
            }
            break;
        case "scissor":
            if (userInput === "rock") {
                userScore ++;
                document.getElementById("choicestat").innerHTML = "Rock defeats Scissor";
            }
            else {
                compScore ++;
                document.getElementById("choicestat").innerHTML = "Paper loses to Scissor";
            }
            break;
    }
}

// Update scores
function updateScore() {
    document.getElementById("playerscore").innerHTML = userScore;
    document.getElementById("compscore").innerHTML = compScore;
}

// Ask for user choice
function game(userInput) {
    getCompChoice();
    userInputVal(userInput);
    updateScore();
}

// Add event listeners to the buttons
rock.addEventListener("click", function() {
    game("rock");
}
);
paper.addEventListener("click", function() {
    game("paper");
}
);
scissor.addEventListener("click", function() {
    game("scissor");
}
);

// Restart the game
restart.addEventListener("click", function() {
    userScore = 0;
    compScore = 0;
    updateScore();
});