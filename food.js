function Food(){
	this.x;
	this.y;

	this.show = function(){
		fill(255, 0, 100);
		rect(this.x, this.y, scl, scl);
	}

	this.newLocation = function(){
		var cols = floor(width/scl);
		var rows = floor(height/scl);

		this.x = floor(random(rows))*scl;
		this.y = floor(random(cols))*scl;
	}

	this.eaten = function(){
		if ((this.x == s.x) && (this.y == s.y)){
			this.newLocation();
		}
	}
}