const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,650,70);
	ground = new Ground(400,690,800,20);
	dustbin1 = new Dustbin(560,630,20,100)
	dustbin2 = new Dustbin(740,630,20,100)
	dustbin3 = new Dustbin(650,675,200,20)

	launcher = new Launcher(paper.body, {x:300, y:300});
	  
}


function draw() {
  background(255);
  
  Engine.update(engine);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

