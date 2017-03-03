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
		.buildBrush()
		.buildTextGroup()
		.buildText()
		.showHideText();
		
}

export default init;