function setup() {
    createCanvas(600, 400);
  }

  function draw() {
    // sky gradient
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(color(135, 206, 235), color(255), inter);
      stroke(c);
      line(0, y, width, y);
    }

    noStroke();
    // grass
    fill(100, 200, 100);
    rect(0, height * 0.65, width, height * 0.35);
    // sun
    fill(255, 255, 100);
    ellipse(500, 80, 80, 80);
    // clouds
    fill(255, 255, 255, 200);
    ellipse(100, 80, 60, 40);
    ellipse(140, 100, 70, 50);
    ellipse(120, 60, 80, 50);
    ellipse(300, 120, 100, 60);
    ellipse(340, 100, 60, 40);
    // flowers
    for (let i = 0; i < 5; i++) {
      let fx = 80 + i * 100;
      let fy = height * 0.65 + 20;
      fill(255, 150, 200);
      ellipse(fx, fy, 15, 25);
      fill(255, 255, 0);
      ellipse(fx, fy, 8, 8);
    }

    // dog body & head
    fill(150, 111, 51);
    ellipse(300, 300, 300, 150);
    ellipse(200, 250, 150, 150);
    // ears
    triangle(140, 180, 130, 250, 180, 200);
    triangle(260, 180, 270, 250, 220, 200);
    // legs
    ellipse(230, 350, 40, 80);
    ellipse(270, 350, 40, 80);
    ellipse(330, 350, 40, 80);
    ellipse(370, 350, 40, 80);
    // tail
    push();
    translate(430, 300);
    rotate(PI / 4);
    ellipse(0, 0, 20, 100);
    pop();
    // eyes & nose
    fill(255);
    ellipse(180, 240, 30, 20);
    ellipse(220, 240, 30, 20);
    fill(0);
    ellipse(180, 240, 10, 10);
    ellipse(220, 240, 10, 10);
    ellipse(200, 265, 15, 10);
    // mouth
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(200, 280, 50, 30, 0, PI);
  }
