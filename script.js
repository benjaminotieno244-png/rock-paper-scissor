console.log("Hello World"); 
//Generate a random number between 0 and 1
//if the number is between 0 and 0.33, return "rock"
//if the number is between 0.34 and 0.66, return "paper"
//if the number is between 0.67 and 1, return "scissors"

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}let humanscore = 0;
 let computerscore = 0;  
console.log(getComputerChoice());
//ask a player to type in their choice of rock, paper, or scissors
//return whatever the player types in
function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice;
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!"); humanscore++
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!"); humanscore++
    } else {
        console.log("You lose!"); computerscore++
    }
}
console.log(playRound(getHumanChoice(), getComputerChoice()));