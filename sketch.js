var mrect,frect
function setup() {
  createCanvas(800,400);
  mrect=createSprite(255,55,50,50)
  mrect.shapeColor="orange"
  frect=createSprite(260,200,50,50)
  frect.shapeColor="orange"
}

function draw() {
  background("green");
  mrect.x=mouseX
  mrect.y=mouseY
  mrect.debug=true
frect.debug=true
if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
  mrect.y-frect.y<mrect.height/2+frect.height/2&&
  frect.y-mrect.y<mrect.height/2+frect.height/2&&
  frect.x-mrect.x<mrect.width/2+frect.width/2){
  mrect.shapeColor="red"
  frect.shapeColor=" red"

}else{
  mrect.shapeColor="orange"
  frect.shapeColor="orange"
  
}
  drawSprites();
}