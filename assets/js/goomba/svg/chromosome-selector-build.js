import d3 from "../../d3-bundle";

function buildChromosomeSelector () {
	var that = this;

	this.gSelectors.selectAll("rect")
		.data(this.dataByChromosome, d => d.name)
		.enter()
		.append("rect")
		.attr("class", "g-chromosome")
		.attr('transform', d => {
			let y = this.expanded ? this.yScaleExpanded(d.name) : this.yScaleContracted(d.name);
			return `translate(0, ${y})`;
		})
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", this.width)
		.attr("height", this.expanded ? this.yScaleExpanded.bandwidth() : this.yScaleContracted.bandwidth())
		.attr("fill", "#ffffff")
		.attr("fill-opacity", 0)
		.attr("stroke", "#ffffff")
		.attr("stroke-width", 1)
		.attr("opacity", 1)
		.on("mouseenter", function() {
			d3.select(this)
				.attr("stroke", "#000000");
		})
		.on("mouseleave", function() {
			d3.select(this)
				.attr("stroke", "#ffffff");
		})
		.on("click", function(d, i) {

			if (that.activeChromosome === i && that.expanded) {
				that.expanded = false
			} else {
				that.activeChromosome = i;
				that.expanded = true;
			}

			that.updateAll();
		});

	return this;
}

export default buildChromosomeSelector;