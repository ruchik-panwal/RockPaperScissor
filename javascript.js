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




const btns = document.querySelectorAll("button");
const round = document.querySelector("#result");
const final = document.querySelector("#final");



btns.forEach((button) => {

    button.addEventListener("click", () => {

        if (button.id == "Rock")
            round.textContent = playRound("rock", getComputerChoice());

        else if (button.id == "Paper")
            round.textContent = playRound("paper", getComputerChoice());

        else
            round.textContent = playRound("scissors", getComputerChoice());


        if (humanScore > 4) {

            humanScore = computerScore = 0;
            final.textContent = "You Win!" ;
        }
        else if (computerScore > 4)
            {
                humanScore = computerScore = 0;
            final.textContent = "You Lost!" ;
            }


        const score = document.querySelector("#score");
        score.textContent = "Human = " + humanScore + " ; Computer = " + computerScore;



    })
})








function playRound(humanChoice, computerChoice) {

    console.log("human = " + humanChoice)
    console.log("computer = " + computerChoice)

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





}






