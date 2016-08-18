var s;
var f;
var scl = 20;
var gamerunning = true;


function setup() {
	createCanvas(600, 600);

	if (gamerunning){
		s = new Snake();
		f = new Food();
		frameRate(10);
		f.newLocation();
	}	
}

function draw() {
	background(51);

	if (gamerunning) {
		s.update();
		s.collision();
		f.eaten();
	}

	s.show();
	f.show();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		s.dir(0, -1);
	}	
	else if (keyCode === DOWN_ARROW){
		s.dir(0, 1);
	}
	else if (keyCode === RIGHT_ARROW){
		s.dir(1, 0);
	}
	else if (keyCode === LEFT_ARROW){
		s.dir(-1, 0);
	}
}