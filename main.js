var canvas, c, enemyArr,rowArr, timer, ref, part,speed,user;
var leftMove, rightMove = false;
var score = 0;
var user = true;
var $score;
init();
//初始化
function init() {
	canvas = document.getElementById("canvas");
	c = canvas.getContext("2d");
	canvas.width = 500;
	canvas.height = 600;
	$score = document.getElementById("score");
	$scoreHeight = document.getElementById("scoreHeight");
	speed = 1;
	$score.innerText = score;
	enemyArr = new Array();
	rowArr = new Array();
	part = createPart();
	part.draw();
		setInterval(function() {
			if (leftMove) {
				part.x -= part.speed
			}
			if (rightMove) {
				part.x += part.speed
			}
		}, 10)
	
	clearInterval(timer);
	setInterval(function(){
		rowArr.push(createRow());
	},200);
}
//更新渲染
function updateDraw() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	updateEnemy();
	updateRow();
	part.draw();
	ref = requestAnimationFrame(updateDraw); //根据自身电脑帧率来调整每秒渲染动画函数的次数
}
//随机产生敌人
function randomEnemy() {
	timer = setInterval(function() {
		enemyArr.push(createEnemy())
	}, 1000/speed);
}
canvas.addEventListener("mouseover", function() {
	ref = requestAnimationFrame(updateDraw);
})
canvas.addEventListener("mouseenter", function() {
	randomEnemy();
})
canvas.addEventListener("mouseout", function() {
	cancelAnimationFrame(ref);
	clearInterval(timer);
})
document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 37:
			leftMove = true;
			break;
		case 39:
			rightMove = true;
			break;
		default:
			break;
	}
}
document.onkeyup = function(e) {
	switch (e.keyCode) {
		case 37:
			leftMove = false;
			break;
		case 39:
			rightMove = false;
			break;
		default:
			break;
	}
}
canvas.addEventListener("touchstart",function(e){
	cancelAnimationFrame(ref);
	ref = requestAnimationFrame(updateDraw);
	randomEnemy();
	var dx = e.targetTouches[0].clientX;
	var temp = dx;
	document.ontouchmove = function(e){
		var mx = e.targetTouches[0].clientX;
		if(mx-temp>0){
			part.x= mx;
			temp = mx;
		}
		if(mx-temp<0){
			part.x= mx;
			temp = mx;
		}
	}
})
