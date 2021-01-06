const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;

var box;
var ground;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution:2
  }

  box = Bodies.rectangle(200,100,40,40,options)
  console.log(box.position.x)

  World.add(world,box)

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,300,800,10,options)
  World.add(world,ground)


}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(box.position.x,box.position.y,40,40)

  rect(ground.position.x,ground.position.y,800,10)
  drawSprites();
}