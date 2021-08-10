var box1
function setup() {
  createCanvas(400,400);
  box1=createSprite(100,100,25,50)
  
}

function draw() 
{
  background("red");
  if (keyDown("right")){
    box1.position.x=box1.position.x+5
  }

  if (keyDown("left")){
    box1.position.x=box1.position.x-5
  }

  if (keyDown("up")){
    box1.position.y=box1.position.y-5
  }

  if (keyDown("down")){
    box1.position.y=box1.position.y+5
  }
drawSprites()
}




