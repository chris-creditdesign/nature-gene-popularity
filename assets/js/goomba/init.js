function init() {

	this.buildData()
		.buildSlider()
		.buildChart()
		.buildScales()
		.buildChromosomes()
		.buildCircles()
		.buildGenes()
		.buildCentromeres();
}

export default init;