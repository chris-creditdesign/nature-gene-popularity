import d3 from "../d3-bundle";
import GoombaAxis from "./goomba-axis";

class GoombaGraphic extends GoombaAxis {
	buildGraphic () {
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
				.attr("stroke", d => that.colorScale(Math.log(+d.count)) )
				.attr("fill", d => that.colorScale(Math.log(+d.count)) );

		});

		return this;
	}

	updateGraphic() {

		var that = this;

		this.gChromosome.each(function (data) {
			d3.select(this)
				.selectAll("rect")
				.attr('x', d => that.xt(d.start) )
				.attr('width', d => that.xt(d.end) - that.xt(d.start) );

		});

		return this;
	}

}

export default GoombaGraphic;