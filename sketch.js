var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed = random (55,90);
  weight = random (400,1500);

  car = createSprite(50,200,50,20);
  car.shapeColor='#00ffff';
  car.velocityX = speed;
  wall = createSprite(750, 200, 20, 100);
  wall.shapeColor='#ccffff';
}

function draw() {
  background("black"); 
  
  if (wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed *speed/22509;
    if (deformation>180){
      car.shapeColor='#ff0000';
    }
    if(deformation<180 && deformation>100){
      car.shapeColor='#ffff00';
    }
    if(deformation<100){
      car.shapeColor='#00ff00';
    }
  }
  drawSprites();
}