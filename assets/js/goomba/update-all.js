function updateAll() {
	var that = this;
	var zooming = false;

	this.buildChromosomes()
		.buildGenes()
		.updateAxis();
	
	this.buildTextGroup()
		.buildText();
		
	if (this.expanded) {
	
		zooming = true;
		// Throttle the showHideText function
		setTimeout(function () {
			if (zooming) {
				that.showHideText();
				zooming = false;
			}
		}, 200);
	}


}

export default updateAll;