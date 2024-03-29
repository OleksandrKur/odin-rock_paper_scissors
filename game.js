playGame();



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

    choises = ["rock", "paper", "scissors"];
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
                return "You Lose! Paper beats Rock";
            case ("scissors"):
                return "You Won! Rock beats Scissors";
        }
    }
    else if(userChoise === "paper"){
        switch (computerChoise) {
            case ("rock"):
                return "You Won! Paper beats Rock";
            case ("paper"):
                return "Draw!";
            case ("scissors"):
                return "You Lose! Scissors beat Paper";
        }
    }
    else if(userChoise === "scissors"){
        switch (computerChoise) {
            case ("rock"):
                return "You Lose! Rock beats Scissors";
            case ("paper"):
                return "You Won! Scissors beat Paper";
            case ("scissors"):
                return "Draw!";
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        
        //get choises
            //get a computer choise
        let computerChoise = getComputerChoise();
            //get user choise
        let userChoise = getUserChoise();

        //print choises
        console.log(`You choose ${userChoise}`);
        console.log(`Computer choose ${computerChoise}`);

        //print winner
        console.log(playRound(userChoise, computerChoise));
    }
}