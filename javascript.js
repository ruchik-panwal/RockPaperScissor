console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3);

    if (ran == 0)
        return "rock";
    else if (ran == 1)
        return "paper";
    return "scissors";

}



function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors ?")
    return choice.toLowerCase();
}



function playRound(humanChoice, computerChoice) {

    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice == computerChoice)
        return "It's a tie"

    if (humanChoice == "rock") {
        if (computerChoice == "scissors")
            return "You won this round"
        return "You lost this round"
    }

    if (humanChoice == "paper") {
        if (computerChoice == "rock")
            return "You won this round"
        return "You lost this round"
    }

    if (humanChoice == "scissors") {
        if (computerChoice == "paper")
            return "You won this round"
        return "You lost this round"
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection))

