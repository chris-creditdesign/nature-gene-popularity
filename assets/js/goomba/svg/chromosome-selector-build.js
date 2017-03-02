import d3 from "../../d3-bundle";

function buildSvgChromosomeSelector() {
	var that = this;

	this.gChromosomeSelector.selectAll("rect")
		.data(this.dataByChromosome, d => d.name)
		.enter()
		.append("rect")
		.attr("class", "chromosome-selector")
		.attr('transform', d => {
			let y = this.expanded ? this.yScaleExpanded(d.name) : this.yScaleContracted(d.name);
			return `translate(0, ${y})`;
		})
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", this.width)
		.attr("height", this.expanded ? this.yScaleExpanded.bandwidth() : this.yScaleContracted.bandwidth())
		.attr("fill", "#ccc")
		.attr("stroke-width", 0)
		.on("click", function(d, i) {
			that.activeChromosome = d.name;
			that.expanded = true;;
			that.chromosomeSelector.node().value = d.name;
			that.updateAll();
		});

	return this;
}

export default buildSvgChromosomeSelector;