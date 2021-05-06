var canvas, backgroundImage , background;
//var database;


 function preload(){
  playBImg = loadImage("playB.png");
 backgroundImage = loadImage("bgg.jpg")
 }
                  

function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
  Form = new Form();
}


function draw(){
  background(backgroundImage);
  Form.display();
}