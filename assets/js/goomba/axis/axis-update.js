import d3 from "../../d3-bundle";

function updateAxis() {
	this.xAxis.scale(this.xt);
	this.gXAxis
		.transition()
		.duration(this.duration)
		.call(this.xAxis);

	this.yAxis.scale(this.yScale);
	this.gYAxis.call(this.yAxis);

	return this;	
}

export default updateAxis;