import d3 from "../../d3-bundle";

function buildGenes() {

	var that = this;
	
	this.gChromosomes.selectAll("g").each(function (data) {

		function findXPosition(d) {
			let midPoint = (d.geneEnd - d.geneEnd) / 2; 
			return that.yScale(midPoint + d.geneStart)
		}

		let myGenes = d3.select(this)
			.selectAll("line")
			.data(data.genes.filter( d => d[that.year] > 0));
		
		// Enter
		myGenes.enter()
			.append("line")
			.attr("y1", d => findXPosition(d))
			.attr("x1", d => {
				return 0;
			})
			.attr("y2", d => findXPosition(d))
			// .attr("x2", 0)
			.attr("stroke-width", 1)
			.attr("stroke", "#ffff00")
			.attr("x2", d => {
				if (d[that.year] === 0) {
					return 1;
				} else {
					return that.geneScale(parseInt(d[that.year], 10))
				}
			});
			// .transition(that.duration)
			// .delay( (d,i) => {
			// 	return (that.duration * 1.8) + (findXPosition(d) * 0.01 * that.delay);
			// })
			// .duration(that.duration)
			// .attr("x2", d => {
			// 	return that.geneScale(parseInt(d.citations, 10))
			// });

		// Update
		myGenes.attr("x2", d => {
				if (d[that.year] === 0) {
					return 1;
				} else {
					return that.geneScale(parseInt(d[that.year], 10))
				}
			});

		myGenes.exit()
			.remove();


	});

	return this;
}

export default buildGenes;