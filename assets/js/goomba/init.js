function init() {

	this.buildChart()
		.buildScales()
		.buildKey()
		.buildAxis()
		.buildChromosomes()
		.buildChromosomeSelector()
		.buildGenes()
		.buildZoom()
		.buildTextGroup()
		.buildText()
		.showHideText();		

}

export default init;