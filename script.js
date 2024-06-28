console.log("hello world!")

// Make a function that will get the computer choice (getComputerChoice).
// We can do this by using math.random round down to lowest number and store this value in a variable called playValue.
// put the choices for rock paper scissors in an array called arrayValue.
// call getComputerChoice function.
// math.random comes up with a number between 0 and 2 and stores in choiceArray
// playValue array with rock, paper, scissors will be returned with arrayValue being what chooses rock paper or scissors.

function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"]
    let playValue = Math.floor(Math.random() * 3)
    let computerChoice = choiceArray[playValue]
    // console.log(playValue, computerChoice)
    return computerChoice
}

// write a function to get human choice (getHumanChoice)
// return a valid choice depending on what the user chooses.
// the human choice will be made with a prompt that will pop up when getHumanChoice is called.
// the choice will be stored in a variable called humanChoice.
// humanChoice will be lowercased to ensure no bugs due to casing.

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    return humanChoice
}

// make a function that checks for incorrect values. call this function valueChecker.
// we can make a clean comaprison function featuring a switch statement that will call the getHumanChoice function if use chooses the wrong play.

//add variable to keep track of score. these variables will be global variables. humanScore & computer score.
let humanScore = 0;
let computerScore = 0;

// write logic to play a single round.
// create a function playRound that takes two params; humanChoice and computerChoice.
// does it make sense to put all these actions in one function?
// play round will compare human and computer choices.
// rock beats scissors
// scissors beats paper
// paper beats rock.
// increment winners score by 1

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    console.log(`computer ${computerChoice}, player ${humanChoice}`)

    humanChoice === 'rock' && computerChoice === 'scissors' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
        humanChoice === 'paper' && computerChoice === 'rock' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
            humanChoice === 'scissors' && computerChoice === 'paper' ? console.log('you win', `computer score: ${computerScore}, player score: ${++humanScore}`) :
                humanChoice === computerChoice ? console.log('draw') : console.log('you lose', `computer score: ${++computerScore}, player score: ${humanScore}`);
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

playRound(humanChoice, computerChoice)