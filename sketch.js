const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon, lan;
var ground, p1, p2;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var engine, world, score;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 390, 2000, 10);

  p1 = new Ground(390, 300, 250, 10);

  a1 = new Block(300, 275, 30, 40, "pink");
  a2 = new Block(330, 275, 30, 40, "pink");
  a3 = new Block(360, 275, 30, 40, "pink");
  a4 = new Block(390, 275, 30, 40, "pink");
  a5 = new Block(420, 275, 30, 40, "pink");
  a6 = new Block(450, 275, 30, 40, "pink");
  a7 = new Block(480, 275, 30, 40, "pink");

  a8 = new Block(330, 235, 30, 40, "blue");
  a9 = new Block(360, 235, 30, 40, "blue");
  a10 = new Block(390, 235, 30, 40, "blue");
  a11 = new Block(420, 235, 30, 40, "blue");
  a12 = new Block(450, 235, 30, 40, "blue");

  a13 = new Block(360, 195, 30, 40, "pink");
  a14 = new Block(390, 195, 30, 40, "pink");
  a15 = new Block(420, 195, 30, 40, "pink");

  a16 = new Block(390, 155, 30, 40, "blue");


  //second pyrmiad

  p2 = new Ground(580, 140, 180, 10);

  b1 = new Block(520, 130, 30, 40, "blue");
  b2 = new Block(550, 130, 30, 40, "blue");
  b3 = new Block(580, 130, 30, 40, "blue");
  b4 = new Block(610, 130, 30, 40, "blue");
  b5 = new Block(640, 130, 30, 40, "blue");

  b6 = new Block(550, 90, 30, 40, "pink");
  b7 = new Block(580, 90, 30, 40, "pink");
  b8 = new Block(610, 90, 30, 40, "pink");

  b9 = new Block(580, 50, 30, 40, "blue");

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  lan = new Launcher(this.polygon, {x: 100, y: 200});

  score = 0;
  var gameState = "onSling";

}

function draw() {
  Engine.update(engine);
  background("white"); 

  ground.show();

  p1.show();
  a1.show();
  a2.show();
  a3.show();
  a4.show();
  a5.show();
  a6.show();
  a7.show();
  a8.show();
  a9.show();
  a10.show();
  a11.show();
  a12.show();
  a13.show();
  a14.show();
  a15.show();
  a16.show();

  p2.show();
  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();
  b7.show();
  b8.show();
  b9.show();

  a1.score();
  a2.score();
  a3.score();
  a4.score();
  a5.score();
  a6.score();
  a7.score();
  a8.score();
  a9.score();
  a10.score();
  a11.score();
  a12.score();
  a13.score();
  a14.score();
  a15.score();
  a16.score();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

  ellipseMode(RADIUS);
  fill (0, 198, 233);
  ellipse(polygon.position.x, polygon.position.y, 20 );

  keyPressed();

  drawSprites();

  text ("SCORE : "+score, 750, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  lan.fly();
}

function keyPressed() {
  if(keyCode === "SPACE") {
     lan.attach(this.polygon);
     console.log(polygon);
  }
}