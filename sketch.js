const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5, ballOptions;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,400,20,roof_options);
    World.add(world,roof);

	ballOptions={
		isStatic:false,
		weight:0.01,
		restitution:0.7,
	}
	ball1=Bodies.circle(240,450,40,ballOptions);
	ball2=Bodies.circle(320,450,40,ballOptions);
	ball3=Bodies.circle(400,450,40,ballOptions);
	ball4=Bodies.circle(480,450,40,ballOptions);
	ball5=Bodies.circle(560,450,40,ballOptions);

	World.add(world,ball1);
	World.add(world,ball2);
	World.add(world,ball3);
	World.add(world,ball4);
	World.add(world,ball5);

	Engine.run(engine);

	rope1 = new Rope(ball1 ,roof ,-160,0);
	rope2 = new Rope(ball2 ,roof ,-80,0);
	rope3 = new Rope(ball3 ,roof ,0,0);
	rope4 = new Rope(ball4 ,roof ,80,0);
	rope5 = new Rope(ball5 ,roof ,160,0);
	
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  Engine.update(engine);



  rect(roof.position.x,roof.position.y,400,20);

  //call display() to show ropes here

  ellipseMode(RADIUS)

  ellipse(ball1.position.x,ball1.position.y,40);
  ellipse(ball2.position.x,ball2.position.y,40);
  ellipse(ball3.position.x,ball3.position.y,40);
  ellipse(ball4.position.x,ball4.position.y,40);
  ellipse(ball5.position.x,ball5.position.y,40);
  
  //create ellipse shape for multiple bobs here
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.4,y:0})
	}

}