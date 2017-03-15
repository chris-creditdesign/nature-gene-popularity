function init() {

	this.buildChart()
		.buildScales()
		.buildKey()
		.buildAxis()
		.buildChromosomes()
		.buildChromosomeSelector()
		.buildGenes()
		.buildSvgChromosomeSelector()
		.buildZoom()
		.buildBrush()
		.buildText();
		
}

export default init;