console.log("hello world!")


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


let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    console.log(`computer ${computerChoice}, player ${humanChoice}`)

    humanChoice === 'rock' && computerChoice === 'scissors' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
        humanChoice === 'paper' && computerChoice === 'rock' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
            humanChoice === 'scissors' && computerChoice === 'paper' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
                humanChoice === computerChoice ? console.log('draw') : console.log('you lose', `computer score: ${++computerScore}, player score: ${humanScore}`);
}


function playGame() {
    for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
        playRound()
    } if (computerScore > humanScore) {
        console.log('computer wins')
    } if (humanScore > computerScore) {
        console.log('You win!')
    } else {
        console.log('DRAW play again?')
    }
}
playGame()
