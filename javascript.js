const choices = ["rock","paper","scissors"];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
    playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = window.prompt("Choose Rock, Paper, or Scissors:");
    while (input == null) {
        input = window.prompt("Choose Rock, Paper, or Scissors:");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
       input = window.prompt (
        "Type Rock, Paper, or Scissors. Capitalization does not matter but speeling needs to be correct."
    );
        return input;
    }
    return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie";
    }   else if ((choiceP === "rock" && choiceC == "scissors") || 
                 (choiceP == "paper" && choiceC == "rock") || 
                 (choiceP == "scissors" && choiceC == "paper")) {
        return  "Player"

    }   else{
            return "Computer"
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item =="Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:")
    console.log("Player:",playerWins);
    console.log("Computer:",computerWins);
    console.log("Ties",ties);
}

function logRound(playerChoice,computerChoice,winner,round){
    console.log("Round:",round);
    console.log("Player Choice:",playerChoice);
    console.log("Computer Choice:",computerChoice);
    console.log(winner,("Won the round!"));
    console.log("--------------------------------------------------------")
}




/* Create buttons for each option RPS
    
correlate each button on html with its corresponding choice on js

for each choice create an array for pc choice limited to the other 2 options

create an if statement correlating to the winner of both pc and user input*/