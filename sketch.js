
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,paper;
var dust1, dust2, dust3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2,690,width,40);
  paper = new Paper(width/5,height/2,20)
  dust1 = new Dustbin(670,665,200,20);
  dust2 = new Dustbin(560,625,20,100);
  dust3 = new Dustbin(780,625,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  keyPressed();
  
  ground1.display();
  paper.display();
  dust1.display();
  dust2.display();
  dust3.display();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:-5})
  }
}

