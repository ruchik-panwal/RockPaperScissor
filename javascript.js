
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

        if (computerChoice == "scissors") {
            humanScore++;
            return "You won this round"
        }
        computerScore++;
        return "You lost this round"
    }

    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            return "You won this round"
        }
        computerScore++;
        return "You lost this round"
    }

    if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            humanScore++;
            return "You won this round"
        }
        computerScore++;
        return "You lost this round"
    }

    return "unvalid";


}





function playGame() {
    for (let i = 0; i < 5; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)

        if (humanScore == 3 || computerScore == 3)
            break;
    }

    if (humanScore > computerScore)
        return "You won the Game"
    else
        return "You lost the Game"
}

console.log(playGame())