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
		.attr("y", this.height)
		.attr("width", this.xScale.bandwidth())
		.attr("height", 0)
		.attr("fill", "#fff")
		.attr("stroke", "none")
		.transition()
		.duration(this.duration)
		.delay( (d,i) => {
			return i * this.delay;
		})
		.attr("height", d => this.height - this.yScale(d.length))
		.attr("y", d => this.yScale(d.length));

	// Update
	// this.gChromosome
	// 	.attr('transform', d => {
	// 		let y = this.xScale(d.name);
	// 		return `translate(0, ${y})`;
	// 	});		

	// Exit
	this.gChromosome.exit()
		.transition()
		.attr("opacity", 0)
		.remove();

	return this;
}

export default buildChromosomes;