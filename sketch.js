const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var backgroundimg

function preload(){
  backgroundimg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundimg);
  background(255,255,255);  
  drawSprites();
}