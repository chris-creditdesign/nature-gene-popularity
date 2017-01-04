import d3 from "../../d3-bundle";

function buildChromosomes() {
	let data = this.expanded ? [this.dataByChromosome[this.activeChromosome]] : this.dataByChromosome;

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