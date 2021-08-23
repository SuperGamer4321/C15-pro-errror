
var box = {
   x : 200 , 
   y : 200 ,
   radius : 40 , 
   xSpeed : 5 , 
   color : "lightBlue"
}

function setup(){
   
   
   //rectMode(CENTER);
   //fill("green");
   //rect(200,200,50,50);
   //var sprite = createSprite(200,200,50,50);
   //sprite.shapeColor = "red";
   //drawSprites();



}

function draw(){
   background("pink");
   box.x += box.xSpeed;
   fill("blue");
   circle(200,200,40);
}