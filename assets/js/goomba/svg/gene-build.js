import d3 from "../../d3-bundle";

function buildGenes() {

	var that = this;
	
	this.gChromosomes.selectAll("g").each(function (data) {
		// Enter
		// d3.select(this)
		// 	.selectAll("rect")
		// 	.data(data.genes)
		// 	.enter()
		// 	.append("rect")
		// 	.attr("class", "gene contracted")
		// 	.attr("y", d => that.yt(d.start) )
		// 	.attr("x", 0)
		// 	.attr("height", 2 )
		// 	.attr("width", 0)
		// 	.attr("stroke", "none")
		// 	.attr("stroke-width", 0)
		// 	.attr("fill", d => {
		// 		if (d.symbol === "CD4" || 
		// 			d.symbol === "TP53"  ||
		// 			d.symbol === "GRB2" ||
		// 			d.symbol === "HBB" ||
		// 			d.symbol === "TNF" ||
		// 			d.symbol === "APOE") {
		// 			console.log(d);
		// 			return "#000000;"
		// 		} else {
		// 			return "yellow"
		// 		}
		// 	})
		// 	.transition(that.duration)
		// 	.delay( (d,i) => {
		// 		return (that.duration * 1.8) + (that.yt(d.start) * 0.01 * that.delay);
		// 	})
		// 	.duration(that.duration)
		// 	.attr("width", d => that.geneScale(parseInt(d.count, 10)));

		function findXPosition(d) {
			let midPoint = (d.geneEnd - d.geneEnd) / 2; 
			return that.yScale(midPoint + d.geneStart)
		}

		// Enter
		d3.select(this)
			.selectAll("line")
			.data(data.genes)
			.enter()
			.append("line")
			.attr("y1", d => findXPosition(d))
			.attr("x1", d => {
				return 0;
			})
			.attr("y2", d => findXPosition(d))
			.attr("x2", 0)
			.attr("stroke-width", 1)
			.attr("stroke", "#ffff00")
			.transition(that.duration)
			.delay( (d,i) => {
				return (that.duration * 1.8) + (findXPosition(d) * 0.01 * that.delay);
			})
			.duration(that.duration)
			.attr("x2", d => {
				return that.geneScale(parseInt(d.citations, 10))
			})

	});

	return this;
}

export default buildGenes;