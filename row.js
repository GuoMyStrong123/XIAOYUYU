function createRow() {
	let row = {};
	row.r = 5;
	row.x = part.x + part.w * 0.5;
	row.y = canvas.height - part.h - row.r;
	row.speed = 8;
	row.draw = function() {
		c.beginPath();
		c.fillStyle = "green";
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
		c.fill();
		c.closePath();
	};

	return row;
}

function updateRow() {
	rowArr.forEach((item, index) => {
		item.y -= item.speed;
		if (item.y < 0) {
			rowArr.splice(index, 1);
		}
		enemyArr.forEach((enemy, i) => {
			if (
				item.x-item.r < enemy.x + enemy.w &&
				item.x + item.r > enemy.x &&
				item.y-item.r < enemy.y + enemy.h &&
				item.y + item.r > enemy.y
			) {
				enemyArr.splice(i, 1);
				rowArr.splice(index, 1);
				score ++;
				speed = Math.floor(score/40)+1;
				$score.innerText = score;
			}
		})
		item.draw();
	})
}
