import d3 from "../../d3-bundle";

function buildGenes() {

	var that = this;

	console.log(this.geneScale(168));

	this.gChromosomes.selectAll("g").each(function (data) {
		// Enter
		d3.select(this)
			.selectAll("rect")
			.data(data.genes)
			.enter()
			.append("rect")
			.attr("class", "gene contracted")
			.attr("x", d => that.xt(d.start) )
			.attr("y", d => {
				return that.yScale.bandwidth() - that.geneScale(parseInt(d.count, 10))
			})
			// .attr("width", d => that.xt(d.end) - that.xt(d.start) )
			.attr("width", 1 )
			.attr("height", d => that.geneScale(parseInt(d.count, 10)))
			.attr("stroke", "none")
			.attr("stroke-width", 0)
			.attr("fill", "#CE1421");
			// .attr("fill", "#CE1421");
			// .attr("fill", d => that.colorScale(parseInt(d.count, 0)) );

	});

	return this;
}

export default buildGenes;