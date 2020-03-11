
let frequency = 1,
		y = 0,
		x = 0,
		aplitude = 0;


function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
}


let alpha = .01;

function draw() {
	background(`rgba(0,0,0, ${alpha})`);
	stroke(255);
	strokeWeight(1);


	drawingContext.strokeStyle = '#fff';
	drawingContext.beginPath();

	frequency += .01;

	for (let i = 0; i < width; i++) {

		y = Math.sin(i * .02 + frequency) * 100 * Math.sin(frequency);

		drawingContext.lineTo(i, height/2 + y);
	}

	drawingContext.stroke();
}

