import d3 from "../../d3-bundle";

function buildScales() {
	let xScaleDomain = [0, d3.max(this.data.map((d) => { return +d.geneEnd; }))];
	let countDomain = d3.extent(this.data.map( d => parseInt(d.citations, 10) ));

	console.log(`Highest cited gene: ${d3.max(this.data.map((d) => { return +d.citations; }))}`)
	console.log(`Lowest cited gene: ${d3.min(this.data.map((d) => { return +d.citations; }))}`)

	this.yScale = d3.scaleBand()
		.domain(this.inOrder)
		.range([0, this.height])
		.paddingInner(0.2)
		.paddingOuter(0.1)
		.round(true);

	this.xScale = d3.scaleLinear()
		.domain(xScaleDomain)
		.range([0, this.width]);

	this.xt = d3.scaleLinear()
		.domain(xScaleDomain)
		.range([0, this.width]);

	// Use a log scale to account for the wide range of numbers
	this.colorScale = d3.scaleLog()
		.domain(countDomain)
		.range(['#FFFF00', '#FF0000']);

	this.geneScale = d3.scaleLog()
		.domain(countDomain)
		.range([1, this.yScale.bandwidth()]);

	return this;
}

export default buildScales;