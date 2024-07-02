let humanScore = 0;
let computerScore = 0;
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const btnContainer = document.querySelector(".btn-container");
const scoreContainer = document.createElement("div");
const body = document.querySelector("body")
body.appendChild(scoreContainer)
const humanScoreSpan = document.createElement("h1");
const computerScoreSpan = document.createElement("h1");

scoreContainer.append(humanScoreSpan, computerScoreSpan);
scoreContainer.append(humanScoreSpan, computerScoreSpan);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
btnContainer.append(rockBtn, paperBtn, scissorsBtn);

function setHumanChoiceRock() {
    playRound("rock", getComputerChoice)
    displayScore()
    displayWinner()
}

function setHumanChoicePaper() {
    playRound("paper", getComputerChoice)
    displayScore()
    displayWinner()
}

function setHumanChoiceScissors() {
    playRound("scissors", getComputerChoice)
    displayScore()
    displayWinner()
}

rockBtn.addEventListener("click", setHumanChoiceRock)
paperBtn.addEventListener("click", setHumanChoicePaper)
scissorsBtn.addEventListener("click", setHumanChoiceScissors)



function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"]
    let playValue = Math.floor(Math.random() * 3)
    let computerChoice = choiceArray[playValue]
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors.");
    return humanChoice.toLowerCase()
}



function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice()
    console.log(`computer ${computerChoice}, player ${humanChoice}`)

    humanChoice === 'rock' && computerChoice === 'scissors' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
        humanChoice === 'paper' && computerChoice === 'rock' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
            humanChoice === 'scissors' && computerChoice === 'paper' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
                humanChoice === computerChoice ? console.log('draw') : console.log('you lose', `computer score: ${++computerScore}, player score: ${humanScore}`);
    return [humanScore, computerScore]
}



function displayScore() {
    humanScoreSpan.textContent = ` Player Score: ${humanScore} `
    computerScoreSpan.textContent = `Computer Score: ${computerScore} `
}
displayScore()

function displayWinner() {
    const winnerCircle = document.createElement('div');
    const computerWins = document.createElement('h1');
    const playerWins = document.createElement('h1');
    computerWins.textContent = "Computer Wins!";
    playerWins.textContent = "Player Wins!";
    body.appendChild(winnerCircle);

    if (computerScore == 5) {
        btnContainer.setAttribute("hidden", true)
        winnerCircle.appendChild(computerWins)
    }
    if (humanScore == 5) {
        btnContainer.setAttribute("hidden", true)
        winnerCircle.appendChild(playerWins)
    }
}
