import d3 from "../../d3-bundle";

function buildScales() {
	let xScaleDomain = [0, d3.max(this.data.map((d) => { return +d.end; }))];
	let colorDomain = d3.extent(this.data.map( d => parseInt(d.count, 10) ));

	this.yScale = d3.scaleBand()
		.domain(this.inOrder)
		.range([0, this.height])
		.round(true)
		.paddingInner(0)
		.paddingOuter(0);

	this.xScale = d3.scaleLinear()
		.domain(xScaleDomain)
		.range([0, this.width]);

	this.xt = d3.scaleLinear()
		.domain(xScaleDomain)
		.range([0, this.width]);

	// Use a log scale to account for the wide range of numbers
	this.colorScale = d3.scaleLog()
		.domain(colorDomain)
		.range(['#FFFF00', '#FF0000']);
			
	return this;
}

export default buildScales;