import d3 from "../../d3-bundle";

function buildScales() {
	let yScaleDomain = [d3.max(this.data.map((d) => { return +d.end; })),0];
	let countDomain = d3.extent(this.data.map( d => parseInt(d.count, 10) ));

	this.xScale = d3.scaleBand()
		.domain(this.inOrder)
		.range([0, this.width])
		.paddingInner(0.25)
		.paddingOuter(0)
		.round(true);

	this.yScale = d3.scaleLinear()
		.domain(yScaleDomain)
		.range([0, this.height]);

	this.yt = d3.scaleLinear()
		.domain(yScaleDomain)
		.range([0, this.height]);

	// Use a log scale to account for the wide range of numbers
	this.colorScale = d3.scaleLog()
		.domain(countDomain)
		.range(['#FFFF00', '#FF0000']);

	this.geneScale = d3.scaleLog()
		.domain(countDomain)
		.range([1, this.xScale.bandwidth()]);

	return this;
}

export default buildScales;