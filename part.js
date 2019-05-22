function createPart(){
	let part = {};
	part.w = 50;
	part.h = 50;
	part.speed = 3;
	part.x = canvas.width*0.5;
	part.y = canvas.height-part.h;
	part.draw = function(){
		if(this.x<0){
			this.x = 0;
		}
		if(this.x>canvas.width-this.w){
			this.x = canvas.width-this.w;
		}
		c.beginPath();
		c.fillStyle = "lightpink";
		c.font = "17px 楷体";
		c.fillRect(this.x,this.y,this.w,this.h);
		c.fillStyle = "green";
		c.fillText("小可爱",this.x,this.y+30);
	};
	return part;
}