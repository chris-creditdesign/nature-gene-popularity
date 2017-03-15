function updateAll() {
	var that = this;
	// var zooming = false;
	
	this.yScaleExpanded
		.domain([this.activeChromosome]);

	this.buildChromosomes()
		.buildGenes()
		.updateAxis();
	
	this.buildText();

		

	if (this.expanded) {
		this.gChromosomeSelector.selectAll("rect")
			.remove();
	} else {
		this.buildSvgChromosomeSelector();
	}

}

export default updateAll;