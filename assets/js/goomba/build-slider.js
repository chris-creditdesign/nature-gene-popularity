import d3 from "../d3-bundle";

function buildSlider() {
	var that = this;
	
	d3.select("#slider")
		.append("input")
		.attr("type","range")
		.attr("min", 1980)
		.attr("max", 2016)
		.attr("step", 1)
		.attr("style", `width: ${that.width}px;`)
		.on("input", function() {
			that.year = this.value;
			that.updateAll();
		});


	return this;
}

export default buildSlider;