var quadrado
function setup() {
  createCanvas(400,400);
  quadrado = createSprite(200,200, 50, 50);
  quadrado.shapeColor = color("black");
}

function draw() {
  background("white");

  if (keyDown("w")){
    quadrado.position.y = quadrado.position.y-3;
  }
  if (keyDown("s")){
    quadrado.position.y = quadrado.position.y+3;
  }
  if (keyDown("a")){
    quadrado.position.x = quadrado.position.x-3;
  }
  if (keyDown("d")){
    quadrado.position.x = quadrado.position.x+3;
  }
  drawSprites();
}




