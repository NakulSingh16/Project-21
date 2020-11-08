var bullet,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1600,400); 

 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.weight=weight;
  bullet.shapeColor=color("white");
 //bullet.debug=true;
   wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor=color(80,80,80,);
 //wall.debug=true;
}


function draw() {
  background(0);  

if(wall.x-bullet.x<(bullet.width+wall.width/2)){
  bullet.velocityX=0;
   var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
     wall.shapeColor=color("red");
    }
    
    if(damage<10)
    {
      wall.shapeColor=color("green");
    }

}

drawSprites();
}