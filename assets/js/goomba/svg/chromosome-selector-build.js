import d3 from "../../d3-bundle";

function buildChromosomeSelector () {
	var that = this;

	if (!this.expanded) {
		// Enter
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
			.attr("stroke", "#000000")
			.attr("stroke-width", 1)
			.attr("opacity", 0)
			.on("mouseenter", function() {
				d3.select(this)
					.attr("opacity", 1)
			})
			.on("mouseleave", function() {
				d3.select(this)
					.attr("opacity", 0);
			})
			.on("click", function(d) {
				
				if (that.activeChromosome === d.name && that.expanded) {
					that.expanded = false
				} else {
					that.activeChromosome = d.name;
					that.expanded = true;
				}

				that.updateAll();
			});		
	} else {
		// Remove all the selectors in the expanded view
		// Need to add a reset button
		this.gSelectors.selectAll("rect")
			.remove();
	}


	return this;
}

export default buildChromosomeSelector;