// Marcos fede

var ship, shipAnimation;
var sea, seaImage;

function preload(){
shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();

    
    sea = createSprite(200, 220, 200, 30);
    sea.addImage(seaImage)
    sea.scale = 0.30
    ship = createSprite(190, 200, 80, 30);
    ship.addAnimation("animation", shipAnimation);
    ship.scale = 0.25;

 
}
