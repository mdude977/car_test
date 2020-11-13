var car,wall,speed,weight, Def;


function setup() {
  createCanvas(1400,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,height/2);

  car.shapeColor = "blue";
  wall.shapeColor = "White";

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  console.log("Speed is "+speed);
  console.log("Weight is "+weight);
}

function draw() {
  background("black");

  if(keyDown("space"))
  {
    car.velocityX = speed;
  }
  if(car.collide(wall))
  {
    Def = (0.5*weight*speed*speed)/22500;
    console.log("Deformation is " + Def);
  }
  if(Def<100)
  {
    car.shapeColor = "Green";
    console.log("It's Green");
  }
  if(Def>100 && Def <180)
  {
    car.shapeColor = "Yellow";
    console.log("It's Yellow");
  }
  if(Def > 180)
  {
    car.shapeColor = "red";
    console.log("It's Red");
  }

  drawSprites();
}