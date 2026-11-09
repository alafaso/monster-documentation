function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-background");
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(11, 11, 11);
}
