function Food(){
	this.x;
	this.y;

	this.show = function(){
		fill(255, 0, 100);
		rect(this.x*scl, this.y*scl, scl, scl);
	}

	this.newLocation = function(){
		var cols = floor(width/scl);
		var rows = floor(height/scl);

		this.x = floor(random(rows));
		this.y = floor(random(cols));
	}
}