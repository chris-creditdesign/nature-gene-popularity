import d3 from "../../d3-bundle";

function buildAxis() {

	this.xAxis = d3.axisBottom(this.xt)
			.tickArguments([4])
			.tickSize(5)
			.tickPadding(5);

	this.gXAxis.call(this.xAxis);

	this.yAxis = d3.axisLeft(this.yScale)
		.tickSize(0)
		.tickPadding(5);

	this.gYAxis.call(this.yAxis);

	// Add y axis label 
	/*this.gYAxis.append("text")
		.attr("fill","#000000")
		.attr("text-anchor","middle")
		.attr("transform", "translate(0, 0) rotate(-90)")
		.attr("x", this.height * -0.5)
		.attr("y", -30)
		.attr("dy", 0)
		.text("Chromosome");*/

	this.gXAxis.append("text")
		.attr("fill","#000000")
		.attr("text-anchor","middle")
		.attr("x", this.width * 0.5)
		.attr("y", 40)
		.attr("dy", 0)
		.text("Gene position");


	return this;
}

export default buildAxis;