function createEnemy() {
	let enemy = {};
	enemy.w = 35;
	enemy.h = 35;
	enemy.x = Math.floor(Math.random() * 14) * 35;
	enemy.y = -enemy.h;
	enemy.speed = speed;
	enemy.alive = true;
	enemy.draw = function() {
		c.beginPath();
		c.fillStyle = "lightBlue";
		c.fillRect(this.x, this.y, this.w, this.h);
		c.font = "12px 楷体";
		c.fillStyle = "black";
		c.fillText("大可爱", this.x, this.y + 20);
	}
	return enemy;
}

function updateEnemy() {
	enemyArr.forEach((item, index) => {
		item.y += item.speed;
		if ((part.x < item.x + item.w &&
				part.x + part.w > item.x &&
				part.y < item.y + item.h &&
				part.y + part.h > item.y) || item.y >= canvas.height) {
			alert("大可爱接近到你准备攻击，你输啦，总共攻击：" + score + "次");
			location.reload();
		}
		item.draw();
	})
}
