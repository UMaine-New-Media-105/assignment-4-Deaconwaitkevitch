//Updated code below


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

//This is my updated code for this assignment 
let Y = 10;

function setup() {
  createCanvas(400, 400);
}
//Used badge pattern tutorial & YouTube for formatting.
function draw() {
  background("black");
  for (let row = -1; row < 11; row++) {
    for (let column = 0; column < 20; column++) {
      let x = column * 30;
      let y = Y + row * 40;
      drawSquare(x, y, 50);
      drawCirc(x, y, 25);
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
function drawCirc(x, y, size) {
  push();
  fill("springgreen");
  translate(x, y);
  ellipse(0, 0, size);
  pop();
}
