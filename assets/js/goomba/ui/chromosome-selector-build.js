import d3 from "../../d3-bundle";

function buildChromosomeSelector () {
	var that = this;
	var firstItem = "All";

	function justNames(d) {
		return d.name;
	}

	var names = this.dataByChromosome.map(justNames);
	names.unshift(firstItem);

	this.chromosomeSelector = d3.select("#temp-chromosome-selector");
	
	this.chromosomeSelector.selectAll("option")
		.data(names)
		.enter()
		.append("option")
		.attr("value", d => d)
		.text(d => d);

	this.chromosomeSelector.on("change", function() {
			if (this.value === firstItem) {
				that.expanded = false;
			} else {
				that.expanded = true;
				that.activeChromosome = this.value;
			}

			that.updateAll();
		});

	return this;
}

export default buildChromosomeSelector;