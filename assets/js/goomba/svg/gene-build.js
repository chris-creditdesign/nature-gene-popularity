import d3 from "../../d3-bundle";

function buildGenes() {

	var that = this;
	
	function findXPosition(d) {
		let midPoint = (d.geneEnd - d.geneEnd) / 2; 
		return that.xt(midPoint + d.geneStart)
	}

	this.gChromosomes.selectAll("g").each(function (data) {

		d3.select(this)
			.selectAll("line")
			.data(data.genes)
			.enter()
			.append("line")
			.attr("x1", d => findXPosition(d))
			.attr("y1", d => {
				return that.yScale.bandwidth() - that.geneScale(parseInt(d.citations, 10))
			})
			.attr("x2", d => findXPosition(d))
			.attr("y2", d => {
				return that.yScale.bandwidth()
			})
			.attr("stroke-width", 1)
			.attr("stroke", "#CE1421");

	});

	return this;
}

export default buildGenes;