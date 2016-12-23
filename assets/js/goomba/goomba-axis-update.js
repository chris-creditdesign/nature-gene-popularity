import d3 from "../d3-bundle";

function updateAxis() {
	this.xAxis.scale(this.xt);
	this.gXAxis.call(this.xAxis);

	return this;	
}

export default updateAxis;