function updateAll() {
	var that = this;
	// var zooming = false;
	
	this.yScaleExpanded
		.domain([this.activeChromosome]);

	this.buildChromosomes()
		.buildGenes()
		.updateAxis();
	
	this.buildTextGroup()
		.buildText()
		.showHideText();

	if (this.expanded) {
		this.gChromosomeSelector.selectAll("rect")
			.remove();
	} else {
		this.buildSvgChromosomeSelector();
	}
		
	// if (this.expanded) {
	
	// 	zooming = true;
	// 	// Throttle the showHideText function
	// 	setTimeout(function () {
	// 		if (zooming) {
	// 			that.showHideText();
	// 			zooming = false;
	// 		}
	// 	}, 200);
	// }
	


}

export default updateAll;