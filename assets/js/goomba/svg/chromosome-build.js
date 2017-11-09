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
	  .append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", d => this.xScale(d.length) + 1)
		.attr("height", this.yScale.bandwidth())
		.attr("fill", "#fff")
		.attr("stroke", "none");

	return this;
}

export default buildChromosomes;