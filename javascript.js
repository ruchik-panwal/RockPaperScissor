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

const rockIco = document.createElement("i");
rockIco.classList.add("fa-regular", "fa-hand-back-fist");
rockIco.id = 'symUi';

const paperIco = document.createElement("i");
paperIco.classList.add("fa-regular", "fa-hand");
paperIco.id = 'symUi';

const scissorsIco = document.createElement("i");
scissorsIco.classList.add("fa-regular", "fa-hand-scissors");
scissorsIco.id = 'symUi';


btns.forEach((button) => {

    button.addEventListener("click", () => {



        const compChoice = getComputerChoice();

        if (humanUi.hasChildNodes()) {
            humanUi.removeChild(humanUi.firstElementChild);
        }

        if (computerUi.hasChildNodes()) {
            computerUi.removeChild(computerUi.firstElementChild);
        }

        if (button.id == "Reset") {
            round.textContent = "S T A R T";
            humanScore = 0;
            computerScore = 0;
            humanUi.textContent = computerUi.textContent = "";
        }

        else if (button.id == "Rock") {
            round.textContent = playRound("rock", compChoice);

        }
        else if (button.id == "Paper") {
            round.textContent = playRound("paper", compChoice);
        }
        else {
            round.textContent = playRound("scissors", compChoice);
        }

        if (humanScore > 4) {

            humanScore = computerScore = 0;
            round.textContent = "You Win!";
        }
        else if (computerScore > 4) {
            humanScore = computerScore = 0;
            round.textContent = "You Lost!";
        }

        Hscore.textContent = "PLAYER = " + humanScore;
        Cscore.textContent = "COMPUTER = " + computerScore;

    })
})



function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice){
        
        if(humanChoice == "rock"){
            humanUi.appendChild(rockIco);
            computerUi.appendChild(rockIco);
        }
        else if(humanChoice == "paper"){
            humanUi.appendChild(paperIco);
            computerUi.appendChild(paperIco);
        }
        else{
            humanUi.appendChild(scissorsIco);
            computerUi.appendChild(scissorsIco);
        }
        return "It's a tie"
    }

    if (humanChoice == "rock") {

        humanUi.appendChild(rockIco);

        if (computerChoice == "scissors") {

            computerUi.appendChild(scissorsIco);
            humanScore++;
            return "You won this round"
        }

        computerUi.appendChild(paperIco);
        computerScore++;
        return "You lost this round"
    }

    if (humanChoice == "paper") {

        humanUi.appendChild(paperIco);

        if (computerChoice == "rock") {
            computerUi.appendChild(rockIco);
            humanScore++;
            return "You won this round"
        }

        computerUi.appendChild(scissorsIco);
        computerScore++;
        return "You lost this round"
    }

    if (humanChoice == "scissors") {

        humanUi.appendChild(scissorsIco);

        if (computerChoice == "paper") {
            computerUi.appendChild(paperIco);
            humanScore++;
            return "You won this round"
        }

        computerUi.appendChild(rockIco);
        computerScore++;
        return "You lost this round"
    }
}






