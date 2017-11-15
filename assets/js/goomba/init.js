function init() {

	this.buildData()
		.buildSlider()
		.buildChart()
		.buildScales()
		.buildChromosomes()
		.buildGenes()
		.buildCentromeres();
}

export default init;