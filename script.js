let playerChoice = "";
let computerChoice = "";
let result = ""
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

let newGameButton = document.getElementById("new-game")
let selectionButtons = document.getElementsByClassName("selection-button")

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
    let j = Math.floor(Math.random() * 3);
    if (j == 0) {
        return "Rock";
    }
    if (j == 1) {
        return "Paper";
    }
    if (j == 2) {
        return "Scissors";
    }
}

function decideVictor() {
    if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
         (playerChoice == "Paper" && computerChoice == "Rock") ||
         (playerChoice == "Scissors" && computerChoice == "Paper")) {
            result = "Player Wins!";
            playerScore++
    }

    if ((playerChoice === "Rock" && computerChoice == "Paper") ||
         (playerChoice == "Paper" && computerChoice == "Scissors") ||
         (playerChoice == "Scissors" && computerChoice == "Rock")) {
            result = "Computer Wins!";
            computerScore++;
         }

    if (playerChoice == computerChoice) {
        result = "Tie!"
    }
}

function playerSelection() {
    playerChoice = this.innerHTML
    computerChoice = compChoose();
    decideVictor();
    roundNumber++
    updateInfo();
}
for (let i = 0; i < selectionButtons.length; i++) {
    selectionButtons[i].addEventListener("click", playerSelection);
}

function newGame() {
    playerChoice = "";
    computerChoice = "";
    result = ""
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    updateInfo();
}

newGameButton.addEventListener("click", newGame);