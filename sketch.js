const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rda,rdb,rdc,rdd//ground1;
var rdaa,rdba,rdca,rdda;

var BG;

function preload(){
  BG=loadImage("background.jpg");
}

function setup() {
  createCanvas(1200,625);

  engine = Engine.create();
  world = engine.world;
  
  e1=new Rde(100,-200,20,50);
  e2=new Rde(300,-200,20,50);
  e3=new Rde(500,-200,20,50);
  e4=new Rde(700,-200,20,50);
  e5=new Rde(900,-200,20,50);
  e6=new Rde(1100,-200,20,50);
}

function draw() {
  background(BG);  

  Engine.update(engine);

    e1.display();
    e2.display();
    e3.display();
    e4.display();
    e5.display();
    e6.display();
    
  
  drawSprites();
}