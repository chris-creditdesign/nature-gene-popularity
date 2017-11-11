import d3 from "../d3-bundle";

function updateAll() {
	
	this.buildChromosomes()
		.buildGenes();

	d3.select("#date")
		.text(this.year);
}

export default updateAll;