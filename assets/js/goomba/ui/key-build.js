import d3 from "../../d3-bundle";

function buildKey() {

	function oneInFour(elem, index, array) {
		return index % 4 ? false : true;
	}

	var ticks = this.colorScale.ticks().filter(oneInFour);

	d3.select("#temp-key")
		.selectAll("li")
		.data(ticks)
		.enter()
		.append("li")
		.html(d => `<span style="background-color: ${this.colorScale(d)}"></span> ${d3.format(',')(d)} citations`);

	return this;
}

export default buildKey;