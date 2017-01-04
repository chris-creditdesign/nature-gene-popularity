import d3 from "../../d3-bundle";

function buildAxis() {

	this.xAxis = d3.axisBottom(this.xScale)
			.tickArguments([4]);
	this.gXAxis.call(this.xAxis);

	if (this.expanded) {
		this.yAxis = d3.axisLeft(this.yScaleExpanded);
	} else {
		this.yAxis = d3.axisLeft(this.yScaleContracted);
	}

	this.gYAxis.call(this.yAxis);

	return this;
}

export default buildAxis;