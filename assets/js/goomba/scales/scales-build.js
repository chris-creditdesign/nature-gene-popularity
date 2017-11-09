import d3 from "../../d3-bundle";

function buildScales() {
	let xScaleDomain = [0, d3.max(this.data.map((d) => { return +d.geneEnd; }))];
	
	//	Fix the domain for the print graphic
	let countDomain = [0,10000];

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

	this.geneScale = d3.scaleLinear()
		.domain(countDomain)
		.range([1, this.yScale.bandwidth()]);

	return this;
}

export default buildScales;