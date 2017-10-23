function updateAll() {
	var that = this;
	
	this.buildChromosomes()
		.buildGenes()
		.updateAxis();
	
	// this.buildText();

}

export default updateAll;