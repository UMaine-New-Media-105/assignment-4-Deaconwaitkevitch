let Y = 10;
let sizeX = 45;
function setup() {
  createCanvas(400, 400);
  sizeX = random(5, sizeX);
  noLoop();
}
//Used badge pattern tutorial & YouTube for formatting.
function draw() {
  background("black");
  for (let row = -1; row < 11; row++) {
    for (let column = 0; column < 20; column++) {
      let x = column * 30;
      let y = Y + row * 40;
      drawSquare(x, y, 50);
      drawCirc(x, y, sizeX);
    }
  }
}

function drawSquare(x, y, size) {
  push();
  fill("slateblue");
  translate(x, y);
  rect(0, 0, size);
  pop();
}
function drawCirc(x, y, sizeX) {
  push();
  fill("springgreen");
  translate(x, y);
  ellipse(0, 0, sizeX);
  pop();
}
