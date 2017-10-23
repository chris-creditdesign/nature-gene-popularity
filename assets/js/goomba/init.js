function init() {

	this.buildChart()
		.buildScales()
		.buildAxis()
		.buildChromosomes()
		.buildGenes()
		.buildZoom();
		// .buildText();	
}

export default init;