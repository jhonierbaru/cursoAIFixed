let x = 50;
let y = 50;

function setup() {
  createCanvas(100, 100);

  background(200);

  describe(
    'A gray square with a black circle at its center. The circle moves when the user presses an arrow key. It leaves a trail as it moves.'
  );
}

function draw() {
  // Update x and y if an arrow key is pressed.
  if (keyIsDown(37) === true) {
    x -= 1;
  }

  if (keyIsDown(39) === true) {
    x += 1;
  }

  if (keyIsDown(38) === true) {
    y -= 1;
  }

  if (keyIsDown(40) === true) {
    y += 1;
  }

  // Style the circle.
  fill(0);

  // Draw the circle.
  circle(x, y, 5);
}