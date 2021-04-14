var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var car,carimage
var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  carimage=loadImage("car.png");
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 =                   loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
}

function setup(){
  
createCanvas(600,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
//creating car moving

}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    spawncar();
    
     carsGroup = createGroup();
    
 }
}



function spawncar() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var car = createSprite(600,120,40,10);
     car.y = Math.round(random(80,200));
     car.addImage(carimage);
     car.scale = 0.3;
     car.velocityX = -3;
    
     //assign lifetime to the variable
    car.lifetime = 200;
    
    //adjust the depth
   
    
    //add each cloud to the group
    carsGroup.add(car);
  }
}