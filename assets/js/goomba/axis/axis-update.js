import d3 from "../../d3-bundle";

function updateAxis() {
	this.xAxis.scale(this.xt);
	this.gXAxis.call(this.xAxis);

	if (this.expanded) {
		this.yAxis.scale(this.yScaleExpanded);
	} else {
		this.yAxis.scale(this.yScaleContracted);
	}

	this.gYAxis.call(this.yAxis);

	return this;	
}

export default updateAxis;