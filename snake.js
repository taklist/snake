function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	this.total = 1;
	this.tail = [createVector(0,0)];


	this.update = function(){
		if (this.total > 1){
			for (var i = 0; i < this.total-1; i++){
			this.tail[i] = this.tail[i+1];
			}
		}

		this.tail[this.total-1] = createVector(this.x, this.y);


		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}

	this.show = function(){
		fill(255);

		for (var i = 0; i < this.total; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
			console.log(this.tail[i].x);
		}

		rect(this.x, this.y, scl, scl);
	}

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.grow = function(){
		this.total++;
		this.tail[this.total-1] = createVector(this.x, this.y);
	}
}