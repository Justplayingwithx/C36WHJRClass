var database;
var gameState, playerCount;
var loginForm, game, player;

function setup(){
    database = firebase.database();

    createCanvas(500,500)

    playerCount = 0;

   game = new Game();

   game.readState();

   game.startGame();


  

}

function draw(){
    background("white");

    
    drawSprites();
}


