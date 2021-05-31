var form, player, game;
var database;
var gameState = 0;
var playerCount;
var player1, player2, player3, player4;
var allPlayers;
var skatePlayer = [];
var xPos = 0;
var yPos = 0;
var player1Img, player2Img, player3Img, player4Img;
var trackImg;
var player1Start, player2Start, player3Start, player4Start;

function preload() {

  player1Img = loadImage("Images/Jumping1.png");
  player2Img = loadImage("Images/Jumping1 - blue.png");
  player3Img = loadImage("Images/Jumping1 - green.png");
  player4Img = loadImage("Images/Jumping1 - yellow.png");
  
  trackImg = loadImage("Images/Track.png");


}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(255,255,255);  
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
  }