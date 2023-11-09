var playBtn = document.querySelector(".play-btn");
var compChoice = "";
var wins = 0;
var losses = 0;
var ties = 0;
const weapons = {
    f:{weakTo:"s",weakMsg:"Shield beats flail. You lose!",strongTo:"k",strongMsg:"Flail beats kindness. You win!"},
    s:{weakTo:"k",weakMsg:"Kindness beats shield. You lose!",strongTo:"f", strongMsg:"Shield beats flail. You win!"},
    k:{weakTo:"f",weakMsg:"Flail beats kindness. You lose!",strongTo:"s",strongMsg:"Kindness beats shield. You win!"}
};
var compOptions = ["f","s","k"];

playBtn.addEventListener("click", runGame)

function runGame(){
    compChooser();

    try{
        var userInput = prompt("Choose Flail, Shield, or Kindness! F = Flail, S = Shield, K = Kindness").toLowerCase();
        if(userInput == compChoice){
            alert("It's a tie!");
            ties += 1;
        } else if(weapons[userInput].strongTo == compChoice){
            alert(weapons[userInput].strongMsg);
            wins += 1;
        } else if(weapons[userInput].weakTo == compChoice){
            alert(weapons[userInput].weakMsg);
            losses += 1;
        }
        playAgain();
    }
    catch{
        alert("You must type in F, S, or K to select your weapon.");
        return;
    }
}

function playAgain(){
    var replay = confirm("Wins: "+wins+"    Losses: "+losses+"    Ties: "+ties+"\r\nWould you like to play again?");
    if(replay){
        runGame();
    } else{
        wins = losses = ties = 0;
        return;
    }
}

function compChooser(){
    var rndNum = Math.floor(Math.random()*3);
    compChoice = compOptions[rndNum];
    return;
}