let playerPoints = 0;
let computerPoints = 0;
initializeGame();

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);


function resetGame(){
    playerPoints = 0;
    computerPoints = 0;
    let playerChoiseDisplay = document.getElementById("playerChoise");
    let computerChoiseDisplay = document.getElementById("computerChoise");
    let roundResult = document.getElementById("roundResult");
    let score = document.getElementById("score")
    let gameResult = document.getElementById("gameResult");
    playerChoiseDisplay.textContent = ""
    computerChoiseDisplay.textContent = ""
    roundResult.textContent = ""
    score.textContent = ""
    gameResult.textContent = ""
}

function initializeGame(){
    const choiceButtons = document.querySelectorAll(".choise_button");
    choiceButtons.forEach(button => {
        button.addEventListener("click", playGame);
    
    })
}


//asks user to enter a choise and returns a string that should be either rock or paper or scissors
function getUserChoise(){
    
    let userChoise;
    do{
        userChoise = prompt("Type a gesture you enter");
        try {
            userChoise = userChoise.trim().toLowerCase();
        } catch (error) {
            console.log("Failed to get a gesture");
        }
    }
    while(userChoise !== "rock" && userChoise !== "paper" && userChoise !== "scissors");

    return userChoise;
}

//returns one of rock paper or scissors string
function getComputerChoise(){
    let choises = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choises.length);
    return choises[random];
}

//compares user's choise to computer's choice and returns the outcome of the game
function playRound(userChoise, computerChoise){
    if (userChoise === "rock"){
        switch (computerChoise) {
            case ("rock"):
                return "Draw!";
            case ("paper"):
                computerPoints += 1;
                return "You Lose! Paper beats Rock";
            case ("scissors"):
                playerPoints += 1;
                return "You Won! Rock beats Scissors";
        }
    }
    else if(userChoise === "paper"){
        switch (computerChoise) {
            case ("rock"):
                playerPoints += 1;
                return "You Won! Paper beats Rock";
            case ("paper"):
                return "Draw!";
            case ("scissors"):
                computerPoints += 1;
                return "You Lose! Scissors beat Paper";
        }
    }
    else if(userChoise === "scissors"){
        switch (computerChoise) {
            case ("rock"):
                computerPoints += 1;
                return "You Lose! Rock beats Scissors";
            case ("paper"):
                playerPoints += 1;
                return "You Won! Scissors beat Paper";
            case ("scissors"):
                return "Draw!";
        }
    }
}

function playGame(event){        
    if (playerPoints < 5 && computerPoints < 5 ){
        let computerChoise = getComputerChoise();
        let userChoise = event.target.getAttribute('id');
        printRound(userChoise, computerChoise);
    }
    else{
        printWinner();
    }
    
}

function printRound(userSelect, computerSelect){
    let playerChoiseDisplay = document.getElementById("playerChoise");
    let computerChoiseDisplay = document.getElementById("computerChoise");
    let roundResult = document.getElementById("roundResult");
    playerChoiseDisplay.textContent = `You choose: ${userSelect}`;
    computerChoiseDisplay.textContent = `Computer choose: ${computerSelect}`;
    roundResult.textContent = playRound(userSelect, computerSelect);
    let score = document.getElementById("score")
    score.textContent = `${playerPoints}:${computerPoints}`;
}

function printWinner(){
    let gameResult = document.getElementById("gameResult");
    if (playerPoints == 5){
        gameResult.textContent = `You won the game!`;
    }
    else if (computerPoints == 5){
        gameResult.textContent = `Computer won the game!`;
    }
}