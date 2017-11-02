import d3 from "../../d3-bundle";

function buildGenes() {

	var that = this;
	
	this.gChromosomes.selectAll("g").each(function (data) {
		// Enter
		d3.select(this)
			.selectAll("rect")
			.data(data.genes)
			.enter()
			.append("rect")
			.attr("class", "gene contracted")
			.attr("y", d => that.yt(d.start) )
			.attr("x", 0)
			.attr("height", 2 )
			.attr("width", 0)
			.attr("stroke", "none")
			.attr("stroke-width", 0)
			.attr("fill", "#CE1421")
			.transition(that.duration)
			.delay( (d,i) => {
				return (that.duration * 1.8) + (that.yt(d.start) * 0.01 * that.delay);
			})
			.duration(that.duration)
			.attr("width", d => that.geneScale(parseInt(d.count, 10)));

	});

	return this;
}

export default buildGenes;