let x = 1.2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("mistyrose");
  loopX(200, 200, 1.2, 25);
  loopX(200, 200, x - 0.4, 25);
  loopX(200, 200, x - 0.8, 25);
}
// source- setup of the loop used from badges tutorial
function loopX(arcX, arcY, arcScale, arcPoints, arcAngle) {
  noStroke();
  let addAngle = 360 / arcPoints;
  push();
  fill("arcFill");
  translate(arcX, arcY);
  scale(arcScale);
  rotate(arcAngle);
  for (let pointsDrawn = 0; pointsDrawn < arcPoints; pointsDrawn++) {
    rotate(addAngle);
    fill("seashell");
    arc(100, 50, 20, 130, 70, 40);
    rect(200, 410, 200);
  }
  pop();
}
