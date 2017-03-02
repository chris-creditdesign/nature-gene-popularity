import d3 from "../../d3-bundle";

function buildGenes() {

	var that = this;

	this.gChromosomes.selectAll("g").each(function (data) {
		// Enter
		d3.select(this)
			.selectAll("rect")
			.data(data.genes, d => d.geneid)
			.enter()
			.append("rect")
			.attr("class", "gene contracted")
			.attr("x", d => that.xt(d.start) )
			.attr("y", 0 )
			.attr("width", d => that.xt(d.end) - that.xt(d.start) )
			.attr("height", that.expanded ? that.yScaleExpanded.bandwidth() : that.yScaleContracted.bandwidth())
			.attr("stroke", d => that.colorScale(parseInt(d.count, 0)) )
			.attr("stroke-width", 0.5)
			.attr("fill", d => that.colorScale(parseInt(d.count, 0)) );

		// Update
		d3.select(this)
			.selectAll("rect")
			.attr('x', d => that.xt(d.start) )
			.attr('width', d => that.xt(d.end) - that.xt(d.start) )
			.attr("height", that.expanded ? that.yScaleExpanded.bandwidth() : that.yScaleContracted.bandwidth());

	});

	return this;
}

export default buildGenes;