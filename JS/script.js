// Global variables
var player1score = 0;
var player2score = 0;
var round = 0;
var playerMoves = 0;
var playerTurn = 0;
var player1turn = 0; // if this is 0 then player is not active, if 1 then the player is active
var player2turn = 0; // if this is 0 then player is not active, if 1 then the player is active
let gameState = false;
let bouncingDuck = document.getElementById("bouncingDuck");

document.getElementById("bouncingDuck").addEventListener("click", function(e) {
    // plays success audio when duck is hit
    var audio = new Audio("audio/success.mp3"); 
    audio.play();
    addScore();
    renderScoreBoard();
});

function renderScoreBoard() {
    $('#p1score').html(`Player 1 Hits: ${player1score}`);
    $('#p2score').html(`Player 2 Hits: ${player2score}`);
    $('#round').html(`Round: ${round} of 3`);
}

function player1Turn(){
    player2turn = 0;
    player1turn = 1;
    console.log("Player 1 Turn variable is: " + player1turn);
    console.log("Player 2 Turn variable is: " + player2turn);
    $("p").text("Player 1's Turn");
    playerMoves = 0;
    checkPlayerTurn();
}

function player2Turn(){
    player1turn = 0;
    player2turn = 1;
    console.log("Player 1 Turn variable is: " + player1turn);
    console.log("Player 2 Turn variable is: " + player2turn);
    $("p").text("Player 2's Turn");
    playerMoves = 0;
    checkPlayerTurn();

}

function checkPlayerTurn() {
    if(player1turn === 0 && player2turn === 0) {
        player1Turn();
        playerMoves = playerMoves - 1;
    } else {
        if(player1turn === 1 && playerMoves === 3) {
            player2Turn();
        } else if(player2turn === 1 && playerMoves === 3) {
            round = round + 1;
            renderScoreBoard();
            player1Turn();
        }
    }
}

function addScore() {
    if (player1turn === 1) {
        player1score = player1score + 1;
    } 
    else if (player2turn === 1) {
        player2score = player2score + 1;
    }
    console.log("Player 1 score: " + player1score);
    console.log("Player 2 score: " + player2score);
}

function help() {
    $("p").text("Shoot the ducks by clicking directly on it to gain a point. The player with the most points at end of 3 rounds wins, if it's not a tie!");
}

function newGame() {
    gameState = true;
    removeElement();
    round = round + 1;
    renderScoreBoard();
    checkPlayerTurn();


    if(gameState == true) {
        stats.style.display = "block";
        bouncingDuck.style.display = "block";
        startGame.style.display = "none";
        instructions.style.display = "none";
        if(gameState = true) {
            document.getElementById("playArea").addEventListener("click", function(e) {
            shoot();
            checkPlayerTurn();
            checkWinner();
            console.log(playerMoves)
        });
    }}
};

function checkWinner() {
    if(round >= 4) {
        if (player1score == player2score) {
            $("p").text("Game Over - It's a tie!!!");
        } else if (player1score > player2score) {
            $("p").text("Game Over - Player 1 Wins!!!");
        } else {
            $("p").text("Game Over - Player 2 Wins!!!");
        }
        gameState = false;

        document.getElementById("gameTitle").style.display = "block";

        //  Display the startGame button to start a new game 
        // startGame.style.display = "block";
        player1score = 0;
        player2score = 0;
        round = 0; 
        playerMoves = 0;
        gameState = false;
        bouncingDuck.style.display = "none";
    }
}

function removeElement() {
    document.getElementById("introDuck").style.display = "none";
    document.getElementById("gameTitle").style.display = "none";
  }

// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 0.2;
//     audio.play();

function shoot() {
    playerMoves = playerMoves + 1
}