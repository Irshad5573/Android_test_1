var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;

var homeScreen;
var player;
var player1;
var player_img;
var player1_img;
var player2_img,player3,player4;

var end;
var game;



var road_img;
var road1_img;
var gamePlayer_img;


var garden_img;
var gardenEntrence_img;

var virus;
var virus_img;

var life1,life2,life3,life4,life5;
var life1_img,life2_img,life3_img,life4_img,life5_img;

var theEnd,theEnd_img;

var life=5;
var end;


var energyDrink,gloves,mask,sanitizer,tonic;
var End_img;
/*var pH;

if(World.frameCount % 60 === 0) {
  pH = createSprite(400,365,10,40);
  pH.velocityX = - (6 + 3*count/100);

  var rand = randomNumber(1,6);
    pH.setAnimation("pH" + rand);*/

    var playInfo;

function preload(){


  life1_img=loadImage("images/life.png");
  life2_img=loadImage("images/life.png");
  life3_img=loadImage("images/life.png");
  life4_img=loadImage("images/life.png");
  life5_img=loadImage("images/life.png");

  sd_image = loadImage("images/sd.png");

  road1_img=loadImage("images/Road.jpeg");
  road_img=loadImage("images/Road.jpeg");

  player_img=loadImage("images/player.png");

  player1_img = loadImage("images/player1.png");
  player2_img = loadImage("images/player2.png");
  player3 = loadImage("images/player3.png");
  player4 = loadImage("images/player4.png");

  gardenEntrence = loadAnimation("images/garden.png");
  gamePlayer_img=loadImage("images/player.png");

  enemy_img = loadImage("images/enemy.png");
  

  gardenEntrence_img=loadImage("images/garden.png");
  virus_img=loadImage("images/virus1.png");
  
  garden_img=loadImage("images/garden_img.png");

  theEnd_img=loadImage("images/theEnd.png");
  
}

function setup(){
  
  
  

  //gardenf.visible=false;
  //gardenf1.visible=false;
  

  canvas = createCanvas(windowWidth-30, windowHeight-30);

  end = new End();

  playInfo = new HowToPlay();

  game = new Game();
  game.start();
  
}


function draw(){
 
  if(gameState==6){
    playInfo.howPlay();
  }
  /*if(gameState==0){
    playInfo.button();
  }*/


  if(life<0){
    gameState=10;
    end.restart();
  }

  if(gameState == 10){
    end.theEnd();
    game.hide();
  }
  
  if(gameState == 1){
    clear();
    game.play();
  }
  if(gameState == 2){
    game.end();
  }
}
