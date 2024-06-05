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
const Cscore = document.querySelector("#Cscore");
const Hscore = document.querySelector("#Hscore");
const humanUi = document.querySelector("#humanUi");
const computerUi = document.querySelector("#computerUi");




btns.forEach((button) => {

    button.addEventListener("click", () => {

        const compChoice = getComputerChoice();

        if (button.id == "Reset") {
            round.textContent = "S T A R T";
            humanScore = 0;
            computerScore = 0;
            humanUi.textContent = computerUi.textContent = "";
        }

        else if (button.id == "Rock"){
            round.textContent = playRound("rock", compChoice);
        }
        else if (button.id == "Paper")
            round.textContent = playRound("paper", compChoice);

        else
            round.textContent = playRound("scissors", compChoice);


        if (humanScore > 4) {

            humanScore = computerScore = 0;
            round.textContent = "You Win!";
        }
        else if (computerScore > 4) {
            humanScore = computerScore = 0;
            round.textContent = "You Lost!";
        }



        Hscore.textContent = "PLAYER = " + humanScore ;
        Cscore.textContent = "COMPUTER = " + computerScore ;



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






