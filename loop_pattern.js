let Y = 10;
//for (let Y=10+=40 )
function setup() {
createCanvas(400, 400);
}

function draw() {
  background(220);
  squaresX(0, Y, 0.2);
  squaresX(0,50,0.2)
  squaresX(0,90,0.2)
  squaresX(0,130,0.2)
  squaresX(0,170,0.2)
  squaresX(0,210,0.2)
  squaresX(0,250,0.2)
  squaresX(0,290,0.2)
  squaresX(0,330,0.2)
  squaresX(0,370,0.2)
  circX(2, 235, 0.3)
  circX(20, 225, 0.3)
}
function squaresX(X, Y, Scale) {
  Y = Y + 40;
  push();
  fill("maroon");
  translate(X, Y);
  scale(Scale);
  for (let squaresDrawn = 0; squaresDrawn < 20; squaresDrawn++) {
    rect(squaresDrawn * 110, 10, 40);
  }
  pop();
}

function circX(X, Y, Scale) {
  push();
  fill("red");
  translate(X, Y);
  scale(Scale);
  for (let circDrawn = 0; circDrawn < 20; circDrawn++) {
    ellipse(circDrawn * 110, 10, 40);
  }
  pop();
}
