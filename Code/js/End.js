class End {

    constructor() {
      this.Re_Start = createButton('RE-START');
    }
    theEnd(){
    if(gameState==10){
      if(life<0){
        //theEnd.addImage("End",theEnd_img);
        End_img=createSprite(windowWidth/100,-windowHeight/30,windowWidth,windowHeight);
        End_img.addImage("img",theEnd_img);
      }
  }
        drawSprites();
    }

    restart(){
  this.Re_Start.position(windowWidth/2 + 20, windowHeight/2);

  this.Re_Start.mousePressed(()=>{  
    //game.play();
    gameState=100;
    
    
    
  });


}
}