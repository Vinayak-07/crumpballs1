const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var ground1;
var rec1,rec2,rec3;
var binIMg,paperimg;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 560);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,430,20);
	ground1 = new Ground(600,540,1200,20);
	rec1 = new Dustbin(840,470,10,100);
	rec2 = new Dustbin(920,515,150,10);
	rec3 = new Dustbin(1000,470,10,100);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1500,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  paper.display();
  rec1.display();
  rec2.display();
  rec3.display();
  ground1.display();
   

}
function keyPressed(){
if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 85,y: -55});
}
}