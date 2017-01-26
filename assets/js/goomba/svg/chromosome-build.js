import d3 from "../../d3-bundle";

function buildChromosomes() {
	var that = this;

	// Find the active chromosome by name in an array of objects
	// This should be contracted into one file
	function isActiveChromosome(elem, index, array) {
		return elem.name === that.activeChromosome;
	}

	let data = this.expanded ? [this.dataByChromosome.find(isActiveChromosome)] : this.dataByChromosome;

	this.gChromosome = this.gChromosomes.selectAll("g")
		.data(data, d => d.name);

	// Enter
	this.gChromosome.enter()
		.append("g")
		.attr("class", "g-genes")
		.attr("opacity", 1)
		.attr('transform', d => {
			let y = this.expanded ? this.yScaleExpanded(d.name) : this.yScaleContracted(d.name);
			return `translate(0, ${y})`;
		});

	// Update
	this.gChromosome
		.attr('transform', d => {
			let y = this.expanded ? this.yScaleExpanded(d.name) : this.yScaleContracted(d.name);
			// console.log(d.name);
			// console.log(this.activeChromosome);
			// console.log(this.yScaleExpanded.domain());
			// console.log(this.yScaleExpanded(d.name));
			return `translate(0, ${y})`;
		});		

	// Exit
	this.gChromosome.exit()
		.transition()
		.attr("opacity", 0)
		.remove();

	return this;
}

export default buildChromosomes;