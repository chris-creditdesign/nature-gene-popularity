function drawCanvas() {
	this.context.beginPath();
	this.context.fillStyle = "hotpink";
	this.context.arc(100,100,50, 2 * Math.PI, false);
	this.context.fill();
	this.context.closePath();

	// console.log(this.dataByChromosome);
}

export default drawCanvas;