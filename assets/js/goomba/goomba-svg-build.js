import d3 from "../d3-bundle";

function buildSVG () {
	var that = this;

	this.gChromosome = this.gMain.selectAll("g")
		.data(this.dataByChromosome, d => d.name)
		.enter()
		.append("g")
		.attr("class", "g-chromosome")
		.attr('transform', d => {
			let y = this.yScale(d.name);
			return `translate(0, ${y})`;
			}
		);

	this.gChromosome.each(function (data) {
		d3.select(this)
			.selectAll("rect")
			.data(data.genes, d => d.geneid)
			.enter()
			.append("rect")
			.attr("x", d => that.xScale(d.start) )
			.attr("y", 0 )
			.attr("width", d => that.xScale(d.end) - that.xScale(d.start) )
			.attr("height", that.yScale.bandwidth() )
			.attr("stroke", d => that.colorScale(parseFloat(d.count)) )
			.attr("fill", d => that.colorScale(parseFloat(d.count)) );

	});

	return this;
}

export default buildSVG;