import d3 from "../d3-bundle";
import GoombaScales from "./goomba-scales";

class GoombaAxis extends GoombaScales {
	buildAxis() {

		this.xAxis = d3.axisBottom(this.xScale)
				.tickArguments([4]);
		this.gXAxis.call(this.xAxis);

		this.yAxis = d3.axisLeft(this.yScale);
		this.gYAxis.call(this.yAxis);

		return this;
	}

	updateAxis() {
		this.xAxis.scale(this.xt);
		this.gXAxis.call(this.xAxis);

		return this;	
	}

}

export default GoombaAxis;