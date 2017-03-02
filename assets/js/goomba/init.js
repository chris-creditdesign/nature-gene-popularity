function init() {

	this.buildChart()
		.buildScales()
		.buildKey()
		.buildAxis()
		.buildChromosomes()
		.buildChromosomeSelector()
		.buildGenes()
		.buildSvgChromosomeSelector()
		// .buildZoom()
		.buildTextGroup()
		.buildText()
		.showHideText();		

}

export default init;