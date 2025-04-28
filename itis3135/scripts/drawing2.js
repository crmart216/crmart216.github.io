      // —— Dog sketch ——  
const dogSketch = (p) => {
    p.setup = () => {
        p.createCanvas(600, 400);
    };
    p.draw = () => {
        // sky gradient
        for (let y = 0; y < p.height; y++) {
        let inter = p.map(y, 0, p.height, 0, 1);
        let c = p.lerpColor(
            p.color(135, 206, 235),
            p.color(255),
            inter
        );
        p.stroke(c);
        p.line(0, y, p.width, y);
        }

        p.noStroke();
        // grass
        p.fill(100, 200, 100);
        p.rect(0, p.height * 0.65, p.width, p.height * 0.35);

        // sun
        p.fill(255, 255, 100);
        p.ellipse(500, 80, 80, 80);

        // clouds
        p.fill(255, 255, 255, 200);
        p.ellipse(100, 80, 60, 40);
        p.ellipse(140, 100, 70, 50);
        p.ellipse(120, 60, 80, 50);
        p.ellipse(300, 120, 100, 60);
        p.ellipse(340, 100, 60, 40);

        // flowers
        for (let i = 0; i < 5; i++) {
        let fx = 80 + i * 100;
        let fy = p.height * 0.65 + 20;
        p.fill(255, 150, 200);
        p.ellipse(fx, fy, 15, 25);
        p.fill(255, 255, 0);
        p.ellipse(fx, fy, 8, 8);
        }

        // dog body & head
        p.fill(150, 111, 51);
        p.ellipse(300, 300, 300, 150);
        p.ellipse(200, 250, 150, 150);

        // ears
        p.triangle(140, 180, 130, 250, 180, 200);
        p.triangle(260, 180, 270, 250, 220, 200);

        // legs
        p.ellipse(230, 350, 40, 80);
        p.ellipse(270, 350, 40, 80);
        p.ellipse(330, 350, 40, 80);
        p.ellipse(370, 350, 40, 80);

        // tail
        p.push();
        p.translate(430, 300);
        p.rotate(p.PI / 4);
        p.ellipse(0, 0, 20, 100);
        p.pop();

        // eyes & nose
        p.fill(255);
        p.ellipse(180, 240, 30, 20);
        p.ellipse(220, 240, 30, 20);
        p.fill(0);
        p.ellipse(180, 240, 10, 10);
        p.ellipse(220, 240, 10, 10);
        p.ellipse(200, 265, 15, 10);

        // mouth
        p.noFill();
        p.stroke(0);
        p.strokeWeight(2);
        p.arc(200, 280, 50, 30, 0, p.PI);
    };
};

// —— Orbit sketch (needs WEBGL) ——  
const orbitSketch = (p) => {
    p.setup = () => {
        p.createCanvas(600, 400, p.WEBGL);
    };
    p.draw = () => {
        p.background(250, 180, 200);
        p.orbitControl();

        // build a “sphere” of little cubes
        for (let zAngle = 0; zAngle < 180; zAngle += 30) {
        for (let xAngle = 0; xAngle < 360; xAngle += 30) {
            p.push();
            p.rotateZ(p.radians(zAngle));
            p.rotateX(p.radians(xAngle));
            p.translate(0, 400, 0);
            p.box(30);
            p.pop();
        }
        }
    };
};

// instantiate each into its own <div>
new p5(dogSketch, 'sketchDog');
new p5(orbitSketch, 'sketchOrbit');