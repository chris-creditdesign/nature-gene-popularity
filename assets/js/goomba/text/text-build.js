import d3 from "../../d3-bundle";

function buildText () {
	var that = this;

	this.gMainText.selectAll("g").each(function (data, i) {

		// Enter
		d3.select(this)
			.selectAll('text')
			.data(data.genes, d => d.geneid)
			.enter()
			.append("text")
			.attr("x", d => {
				let start = that.xt(d.start);
				let width = that.xt(d.end) - that.xt(d.start);
				
				return start + (width / 2);
			})
			.attr("y", - 5 )
			.attr("text-anchor", "middle")
			.text(d => d.symbol)
			.attr("class", "hide-svg-text");

		// Update
		d3.select(this)
			.selectAll("text")
			.attr("x", d => {
				let start = that.xt(d.start);
				let width = that.xt(d.end) - that.xt(d.start);
				
				return start + (width / 2);
			});


	});

	return this;
}

export default buildText;
