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
			let x = this.xScale(d.name);
			return `translate(${x}, 0)`;
		})
	  .append("rect")
		.attr("x", 0)
		.attr("y", d => that.yScale(d.length))
		.attr("width", that.xScale.bandwidth())
		.attr("height", d => that.height - that.yScale(d.length))
		.attr("fill", "#333")
		.attr("stroke", "none");

	return this;
}

export default buildChromosomes;