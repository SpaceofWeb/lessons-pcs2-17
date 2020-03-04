let y = 50,
		vy = 0,
		speed = .2;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	textSize(20);
}

function draw() {
	background(0);

	fill(255);
	rect(100, y, 100, 150);
	text(y, 10, 20);

	vy += 0.8;
	y += vy * speed;
}


