// Global variables
var player1score = 0;
var player2score = 0;
var round = 0;
var playerMoves = 0;
let gameState = false;
let currentTurn = null;
let winner;
let bouncingDuck = document.getElementById("bouncingDuck");

document.getElementById("bouncingDuck").addEventListener("click", function(e) {
    // checks to verify the event was clicked
    console.log("Duck was hit"); 

    // plays success audio when duck is hit
    var audio = new Audio("audio/success.mp3"); 
    audio.play();

    // TODO need to change to add score to the current player instead of both
    player1score = player1score + 1;
    console.log("Player 1 Score: " + player1score);
    renderScoreBoard();
});

function renderScoreBoard() {
    $('#p1score').html(`Player 1 Hits: ${player1score}`);
    $('#p2score').html(`Player 2 Hits: ${player1score}`);
    $('#round').html(`Round: ${round} of 3`);
}

function player1Turn(){
    $("p").text("Player 1's Turn");
}

function player2Turn(){
    $("p").text("Player 2's Turn");
}

function help() {
    $("p").text("Shoot the ducks by clicking directly on them to gain a point. The player with the most points at end of 3 rounds wins, if it's not a tie!");
}

function newGame() {
    renderScoreBoard();
    removeElement();

    // state which players turn it is plus reset scoreboard values
    player1Turn();
    currentTurn = 1;
    winner = null;
    gameState = true;
    if(gameState = true) {
        stats.style.display = "block";
        bouncingDuck.style.display = "block";
        startGame.style.display = "none";
        instructions.style.display = "none";
        document.getElementById("playArea").addEventListener("click", function(e) {
            // checks to verify the event was clicked
            console.log("mouseclick on ", e.target); 
            // TODO increments the playerMoves only if the target clicked was not the bouncingDuck - does not work
            if ($(e.target).is(".shootThisDuck")) {
                // player1score = player1score + 1;
                // playerMoves = playerMoves + 1;
                console.log("playerMoves = " + playerMoves);
            };

            playerMoves = playerMoves + 1;
            console.log("Player 1 moves: " + playerMoves);
            
            // TODO when playerMoves === 2 (3 clicks hit or miss) then next player's turn *** Does not change back to pLayer 1 turn
            if(playerMoves === 4) {
            console.log("Next player's turn!!!");
            player2Turn();
            playerMoves = 0;
            playerMoves = playerMoves + 1;
            console.log("Player 2 moves: " + playerMoves);
            round = round + 1;
        }

        if(round === 4) {
            if (player1score === player2score) {
                console.log("It's a tie!!!")
            } else if (player1score > player2score) {
                console.log("Player 1 Wins!!!")
            } else {
                console.log("Player 2 Wins!!!")
            }
            // TODO change to edit DOM usiong jquery <p> tag to display the results + GAME OVER notification
            console.log("Game Over");

            // TODO Display the startGame button to start a new game but this does not clear the score
            startGame.style.display = "block";
            player1score = 0;
            player2score = 0;
            round = 0; // TODO does not reset when game restarted
            playerMoves = 0;
            gameState = false;
            bouncingDuck.style.display = "none";
        }
        });

    }

    // change the player turn when 3 shots fired, whether hit or miss
    if(player1Turn === 2) {

    }
}

// function showBouncingDuck() {
//     document.getElementById("bouncingDuck").style.visibility = "visible";
// }

function removeElement() {
    document.getElementById("introDuck").style.display = "none";
  }

// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 0.2;
//     audio.play();
//   })
