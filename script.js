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
}
console.log(getComputerChoice());