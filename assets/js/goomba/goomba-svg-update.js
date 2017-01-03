import d3 from "../d3-bundle";

function updateSVG() {

	var that = this;

	this.gChromosome.each(function (data) {
		d3.select(this)
			.selectAll("rect")
			.attr('x', d => that.xt(d.start) )
			.attr('width', d => that.xt(d.end) - that.xt(d.start) );

	});

	return this;
}

export default updateSVG;