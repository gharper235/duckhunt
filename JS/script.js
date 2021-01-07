// Global variables
var player1score = 0;
var player2score = 0;
var round = 0;
var player1moves = 0;
var player2moves = 0;
let gameState;
let currentTurn;
let winner;

document.getElementById("bouncingDuck").addEventListener("click", function(e) {
    // checks to verify the event was clicked
    console.log("Duck was clicked"); 
    //plays success audio when duck is hit
    var audio = new Audio("audio/success.mp3"); 
    audio.play();
});

function player1Turn(){
    window.alert("It is Player 1's turn");
}

function player2Turn(){
    window.alert("It is Player 2's turn");
}

function help() {
    window.alert("Shoot the ducks by clicking directly on them to gain a point. The player with the most points at end of 3 rounds wins, if it's not a tie!");
}

function newGame() {
    location.reload();
    removeElement();
    // state which players turn it is
    player1Turn();
    currentTurn = 1;
    winner = null;
    showBouncingDuck();
    // TODO bouncing duck stays hidden until this button is pressed. 

}

function showBouncingDuck() {
    document.getElementById("bouncingDuck").style.visibility = "visible";
}

function removeElement() {
    document.getElementById("introDuck").style.display = "none";
  }

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  })




