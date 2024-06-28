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
    console.log(playValue, computerChoice)
    return computerChoice
}

getComputerChoice()