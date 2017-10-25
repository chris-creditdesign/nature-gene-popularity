import d3 from "../../d3-bundle";

function buildChromosomes() {
	var that = this;

	let data = this.dataByChromosome;

	this.gChromosome = this.gChromosomes.selectAll("g")
		.data(data, d => d.name);

	// Enter
	this.gChromosome.enter()
		.append("g")
		.attr("class", "g-genes")
		.attr("opacity", 1)
		.attr('transform', d => {
			let y = this.yScale(d.name);
			return `translate(0, ${y})`;
		})
		.append("line")
		.attr("x1", 0)
		.attr("y1", this.yScale.bandwidth())
		.attr("x2", this.width)
		.attr("y2", this.yScale.bandwidth())
		.attr("stroke-width", 1)
		.attr("stroke", "#000");

	// Update
	this.gChromosome
		.attr('transform', d => {
			let y = this.yScale(d.name);
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