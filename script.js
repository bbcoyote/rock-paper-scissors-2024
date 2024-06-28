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

// write a function to get human choice (getHumanChoice)
// return a valid choice depending on what the user chooses.
// the human choice will be made with a prompt that will pop up when getHumanChoice is called.
// the choice will be stored in a variable called humanChoice.
// humanChoice will be lowercased to ensure no bugs due to casing.
let humanChoice;

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    console.log(humanChoice)
    return humanChoice
}

getHumanChoice()

// function checkChoice() {
//     if (humanChoice !== "rock" || "paper" || "scissors") {
//         alert("invalid choice, please choose again")
//         getHumanChoice();
//     } else {
//         return humanChoice
//     }
// }
// checkChoice()

