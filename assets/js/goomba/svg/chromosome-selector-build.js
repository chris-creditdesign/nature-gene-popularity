import d3 from "../../d3-bundle";

function buildSvgChromosomeSelector() {
	var that = this;

	this.chromomsoeSelectors = this.gChromosomeSelector.selectAll("rect")
		.data(this.dataByChromosome, d => d.name);

	// Enter
	this.chromomsoeSelectors.enter()
		.append("rect")
		.attr("class", "chromosome-selector")
		.attr('transform', d => {
			let y = this.yScaleContracted(d.name);
			return `translate(0, ${y})`;
		})
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", this.width)
		.attr("height", this.yScaleContracted.bandwidth())
		.attr("fill", "#ccc")
		.attr("opacity", 0)
		.attr("stroke-width", 0);

	// Update 
	this.chromomsoeSelectors.attr("opacity", d => {
			if (this.activeChromosome === d.name) {
				return 0.3;
			} else {
				return 0;
			}
		})

	return this;
}

export default buildSvgChromosomeSelector;