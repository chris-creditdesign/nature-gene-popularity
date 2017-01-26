import d3 from "../../d3-bundle";

function buildTextGroup () {
	var that = this;

	// Find the active chromosome by name in an array of objects
	// This should be contracted into one file
	function isActiveChromosome(elem, index, array) {
		return elem.name === that.activeChromosome;
	}

	let data = this.expanded ? [this.dataByChromosome.find(isActiveChromosome)] : this.dataByChromosome;

	this.gText = this.gMainText.selectAll("g")
		.attr("opacity", 1)
		.data(data, d => d.name)

	if (this.expanded) {
		// Enter
		this.gText.enter()
			.append("g")
			.attr("class", "g-text")
			.attr('transform', d => {
				let y = this.yScaleExpanded(d.name);
				return `translate(0, ${y})`;
				}
			);

		// Update
		this.gText
			.attr('transform', d => {
				let y = this.yScaleExpanded(d.name);
				return `translate(0, ${y})`;
				}
			);

		// Remove
		this.gText.exit()
			.transition()
			.attr("opacity", 0)
			.remove();

	} else {
		this.gText.each(function() {
				d3.select(this)
					.selectAll('text')
					.attr("class", "hide-svg-text");
				})
			.transition()
			.delay(300)
			.attr("opacity", 0)
			.remove();
	}

	return this;

}

export default buildTextGroup;
