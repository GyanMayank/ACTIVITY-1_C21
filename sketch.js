const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var upArrow,rightArrow;

var ball;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  upArrow = createImg("up.png")
  upArrow.position(50,50)
  upArrow.size(50,50)
  upArrow.mouseClicked(vForce)

  rightArrow = createImg("right.png")
  rightArrow.position(330,50)
  rightArrow.size(50,50)
  rightArrow.mouseClicked(hForce)

  var ballOptions={
  restitution:0.95
  }

  ball = Bodies.circle(200,200,20,ballOptions)
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20)
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03})
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0})
}