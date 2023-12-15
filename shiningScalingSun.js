angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;
var scaleF = 2;

var drawCloud = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};

var drawSunRay = function() {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};

var drawSun = function() {
    //draw sun rays
    for (var i = 0; i < 360; i += 36) {
        pushMatrix();
        translate(width/2, height/2);
        rotate(i);
        drawSunRay();
        popMatrix();
    
    }
    
    //draw center of sun
    fill(sunColor);
    stroke(sunStrokeColor);
    ellipse(width/2, height/2, sunDiameter, sunDiameter);
};

//draw background
background(backgroundColor);

//draw sun
pushMatrix();
// 200 -> 400(after scale) -> -200
translate(width/2-(width/2*scaleF),height/2-(height/2*scaleF));
scale(scaleF);
drawSun();
popMatrix();

//draw clouds
pushMatrix();
translate(width/2+50, height/2+50);
drawCloud();
popMatrix();
