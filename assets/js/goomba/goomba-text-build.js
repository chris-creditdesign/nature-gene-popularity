import d3 from "../d3-bundle";

function buildText () {
	var that = this;

	this.gText = this.gMainText.selectAll("g")
		.data(this.dataByChromosome, d => d.name)
		.enter()
		.append("g")
		.attr("class", "g-text")
		.attr('transform', d => {
			let y = this.yScale(d.name);
			return `translate(0, ${y})`;
			}
		);

	this.gText.each(function (data, i) {

		d3.select(this)
			.selectAll('text')
			.data(data.genes, d => d.geneid)
			.enter()
			.append("text")
			.attr("opacity", 0)
			.attr("x", d => {
				let start = that.xScale(d.start);
				let width = that.xScale(d.end) - that.xScale(d.start);
				
				return start + (width / 2);
			})
			.attr("y", - 5 )
			.attr("text-anchor", "middle")
			.text(d => d.symbol)
			.transition(500)
			.attr("opacity", 1);

	});

	return this;
}

export default buildText;
