class HomeScreen {


  constructor() {
    this.howToPlay=createButton('Information');
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.welcome = createElement('h2');
    this.info = createElement('h2');
    this.title = createElement('h2');
    this.socialDistancing = createSprite(windowWidth/2 + 10, 110,10,10);
    this.socialDistancing.addImage("sd.png",sd_image);
    this.enemy = createSprite( 150 , 200 , 5 , 5 );
    this.homeScreenPlayer = createSprite(1200,250,50,100);

  }
  hide(){
    this.homeScreenPlayer.visible=false;
    this.enemy.visible=false;
    this.socialDistancing.visible=false;
    this.welcome.hide();
    this.info.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.howToPlay.hide();
  }

  display(){
    
    this.title.html("Co_Protection");
    this.title.position(windowWidth/2 - 50, 0);

    this.socialDistancing.addImage("sd.png",sd_image);
    this.socialDistancing.scale=0.1;

    this.enemy.addImage("enemy.png",enemy_img);
    this.enemy.scale=1;
    
    this.homeScreenPlayer.addImage("player.png",player_img);
    this.homeScreenPlayer.scale=1.5;

    this.welcome.html("Hello Welcome To The game ")
    this.welcome.position(windowWidth/2 - 100, windowHeight/5);

    this.info.html(" To Start This Game Please Click On Play Button")
    this.info.position(windowWidth/2 - 180, windowHeight/4);

    this.input.position(windowWidth/2 - 40 , windowHeight/2 - 80);

    this.howToPlay.position(windowWidth/2 , windowHeight/2+30);


    this.howToPlay.mousePressed(()=>{  
      gameState=6;
      this.homeScreenPlayer.visible=false;
      this.enemy.visible=false;
      this.socialDistancing.hide();

    });

    this.button.position(windowWidth/2 + 20, windowHeight/2);
  
      this.button.mousePressed(()=>{  
        gameState=1;
      });

      

    drawSprites();
  }
  
    
}