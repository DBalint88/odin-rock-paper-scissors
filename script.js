let playerChoice = "";
let computerChoice = "";
let result = ""
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;



let nextRoundButton = document.getElementById("next-round")
let newGameButton = document.getElementById("new-game")
let rockButton = document.getElementById("rock-button")
let paperButton = document.getElementById("paper-button")
let scissorsButton = document.getElementById("scissors-button")

let roundNumberSpan = document.getElementById("round-number")
let playerChoiceSpan = document.getElementById("player-choice")
let computerChoiceSpan = document.getElementById("computer-choice")
let resultSpan = document.getElementById("result")
let playerScoreSpan = document.getElementById("player-score")
let computerScoreSpan = document.getElementById("computer-score")


function updateInfo() {
    roundNumberSpan.innerHTML = roundNumber
    playerChoiceSpan.innerHTML = playerChoice;
    computerChoiceSpan.innerHTML = computerChoice;
    resultSpan.innerHTML = result;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
}

function compChoose() {
    let j = Math.floor(Math.random * 3);
    if (j == 0) {
        return "rock";
    }
    if (j == 1) {
        return "paper";
    }
    if (j == 2) {
        return "scissors";
    }
}

function decideVictor() {
    if ((playerChoice == "rock" && computerChoice == "scissors") ||
         (playerChoice == "paper" && computerChoice == "rock") ||
         (playerChoice == "scissors" && computerChoice == "paper")) {
            result = "Player Wins!";
            playerScore++
    }

    if ((playerChoice === "rock" && computerChoice == "paper") ||
         (playerChoice == "paper" && computerChoice == "scissors") ||
         (playerChoice == "scissors" && computerChoice == "rock")) {
            result = "Computer Winds!";
            computerScore++;
         }

    if (playerChoice == computerChoice) {
        result = "Tie!"
    }
}

function rockClick() {
    playerChoice = "rock";
    computerChoice = compChoose;
    decideVictor;
    roundNumber++
    updateInfo;
}