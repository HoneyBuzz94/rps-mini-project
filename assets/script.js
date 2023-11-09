var playBtn = document.querySelector(".play-btn");
var compChoice = "";
var wins = 0;
var losses = 0;
var ties = 0;

playBtn.addEventListener("click", gameStart)

function gameStart(){
    var userInput = prompt("Rock, Paper, or Scissors? R = Rock, P = Paper, S = Scissors");
    compChooser();

    if(userInput.toLowerCase() == compChoice.toLowerCase()){
        ties += 1;
        alert("It's a tie!")
    } else if(userInput.toLowerCase() == "r"){
        if(compChoice == "P"){
            losses += 1;
            alert("The computer picked Paper. You lose!");
        } else if(compChoice == "S"){
            wins += 1;
            alert("The computer picked Scissors. You win!");
        }
    } else if(userInput.toLowerCase() == "p"){
        if(compChoice == "S"){
            losses += 1;
            alert("The computer picked Scissors. You lose!");
        } else if(compChoice == "R"){
            wins += 1;
            alert("The computer picked Rock. You win!");
        }
    } else if(userInput.toLowerCase() == "s"){
        if(compChoice == "P"){
            wins += 1;
            alert("The computer picked Paper. You win!");
        } else if(compChoice == "R"){
            losses += 1;
            alert("The computer picked Rock. You lose!");
        }
    } else{
        alert("Please enter R, P, or S to choose your weapon.")
        return;
    }
    playAgain();
}

function playAgain(){
    var replay = confirm("Wins: "+wins+"    Losses: "+losses+"    Ties: "+ties+"\r\nWould you like to play again?");
    if(replay){
        gameStart();
    } else{
        wins = 0;
        losses = 0;
        ties = 0;
        return;
    }
}

function compChooser(){
    var rndNum = Math.floor(Math.random()*3+1);
    
    if(rndNum == 1){
        compChoice = "R";
        return;
    } else if(rndNum == 2){
        compChoice = "P";
        return;
    } else if(rndNum == 3){
        compChoice = "S";
        return;
    }
}