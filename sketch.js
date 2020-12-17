
var bullet,speed,wall,weight,deformation,thickness;






function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  bullet.velocityX=speed;
  thickness=random(23,83);
  deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background(255,255,255); 
  if(bullet.collide(wall)){
    if(deformation<10){
      wall.shapeColor="green";
    }
    
    if(deformation>10){
      wall.shapeColor="red";
    }
  } 
  drawSprites();
}